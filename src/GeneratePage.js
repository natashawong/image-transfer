import React, {Component} from 'react';
import { Formik, Form } from 'formik';
import { withRouter } from 'react-router-dom';

import QuestionBlock from '../Components/QuestionBlock/QuestionBlock'
import checkAns from '../utils/CheckAns';
import { DIFFICULTY } from '../utils/Difficulty';

import { connect } from 'react-redux';

const _ = require("lodash");
const axios = require("axios");

export class GeneratePage extends Component {
    constructor(props) {
        super(props);
        this.state={
            questions: [],
            answerKey: [],
            currDifficulty: DIFFICULTY.EASY,
            questionNumbering: 0,
            pageNum: 1,
            testResults: {
                easyCorrect: 0,
                easyTotal: 0,
                mediumCorrect: 0,
                mediumTotal: 0,
                advanceCorrect: 0,
                advanceTotal: 0,
                nativeCorrect: 0,
                nativeTotal: 0,
                result: "",
            }
        };
    }

    componentDidMount() {
        this.setQuestions('http://localhost:9000/set-questions/' + this.state.currDifficulty);
    }

    setQuestions(url) {
        axios.get(url, {withCredentials: true})
        .then(resp => {
            let result = resp.data.map(obj => obj.answer);
            // update question totals
            let tempUpdate = {...this.state.testResults}
            const totalQGiven = _.get(tempUpdate, this.state.currDifficulty + "Total")
            _.set(tempUpdate, this.state.currDifficulty + "Total", totalQGiven + 10)

            this.setState({
                questions: resp.data,
                answerKey: result,
                testResults: tempUpdate,
            });
        })
    }

    updateScores(pageScore) {
        let tempUpdate = {...this.state.testResults}
        const currScore = _.get(tempUpdate, this.state.currDifficulty + "Correct")
        _.set(tempUpdate, this.state.currDifficulty + "Correct", currScore + pageScore)

        this.setState({testResults: tempUpdate})
    }

    finalSubmit() {
        // set student's proficiency in test results state
        let tempUpdate = {...this.state.testResults}
        tempUpdate.result = this.state.currDifficulty // final test result bracket TODO: maybe calculate this
        this.setState({testResults: tempUpdate})

        const finalRes = Object.assign(this.props.userData.data, {Results: this.state.testResults});

        console.log(finalRes)

        // post data to db
        axios.post('http://localhost:9000/submit', finalRes, {withCredentials: true})
        .then(resp => console.log(resp))
        .catch(err => console.log(err))

        // TODO: directly move to end page (TODO: make an end page)
        this.props.history.push('finish')
    }

    render() {
        const initialValues = {
            1: "",
            2: "",
            3: "",
            4: "",
            5: "",
            6: "",
            7: "",
            8: "",
            9: "",
            10: "",
        };

        const langSettings = Object.values(this.props.langSettings)[0]

        return(
            <Formik 
                initialValues={initialValues} 
                onSubmit={(values, actions) => {
                    const userAns = Object.values(values)
                    const result = checkAns(userAns, this.state.answerKey, this.state.currDifficulty)

                    const nextDifficulty = result[0]; // difficulty for next page
                    const pageScore = result[1]; // score of current page

                    this.updateScores(pageScore);

                    if (this.state.pageNum === 4) {
                        this.finalSubmit(); // submit test
                    } else {
                        // update new difficulty and page and question numbering
                        this.setState({
                            currDifficulty: nextDifficulty,
                            pageNum: this.state.pageNum + 1,
                            questionNumbering: this.state.questionNumbering + 10
                        })

                        // reset questions again
                        this.setQuestions('http://localhost:9000/set-questions/' + this.state.currDifficulty);
                    }

                    actions.resetForm();
                }}
            >
                <Form>
                    <h3>Page {this.state.pageNum} of 4</h3>
                    {this.state.questions.map((question, i) => {
                        return (
                        <QuestionBlock
                            key={i}
                            numbering={this.state.questionNumbering + i + 1}
                            prompt={question["prompt_" + langSettings]}
                            options={question.options}
                            questionNumber={i+1}
                            langSettings={langSettings}
                        /> 
                        )
                    }
                    )}
                    <button type="submit">Submit</button>
                </Form>
            </Formik>
        )
    }
}

const addRouter = withRouter(GeneratePage);

const mapStateToProps = state => ({
    langSettings: state.langSettings,
    userData: state.userData,
});

export default connect(mapStateToProps)(GeneratePage)
