import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Upload from './Pages/Upload';
import SurveyPage from './Pages/SurveyPage';
import Stylizer from './Pages/Stylizer';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
        <Route exact strict path="/" component={Home}/>
          <Route exact strict path="/upload" component={Upload}/>
          <Route exact strict path="/quiz" component={SurveyPage}/>
          <Route exact strict path="/upload/stylize" component={Stylizer}/>
          {/* <Route exact strict path="/result" component={Result}/>
          <Route exact strict path="/confirm" component={Confirm}/> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
