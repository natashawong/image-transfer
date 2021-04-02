const qBank = [
    {
      question:
        "What is your favorite shape?",
      answers: ["Stars are out of this world!", "I'm very square", "~Petals~ of a flower"],
      correct: "Stars are out of this world!",
      questionId: "01"
    },
    {
      question:
        "What is your most recently used emoji?",
      answers: ["vinayak", "sarthak", "somil", "devesh"],
      correct: "vinayak",
      questionId: "02"
    },
    {
      question:
        "What color scheme do you like?",
      answers: ["vinayak", "sarthak", "somil", "devesh"],
      correct: "vinayak",
      questionId: "03"
    },
    {
      question:
        "What is your dream vacation spot?",
      answers: ["vinayak", "sarthak", "somil", "devesh"],
      correct: "vinayak",
      questionId: "04"
    },
    
    
  ];
    
  export default (n = 4) => Promise.resolve(qBank.sort(() => 0.5 - Math.random()).slice(0, n));