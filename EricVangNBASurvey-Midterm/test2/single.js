
Survey
    .StylesManager
    .applyTheme("default");

var json = {
    pages: [
     {
      name: "assist_leader",
      elements: [
       {
        type: "radiogroup",
        name: "alltime_points",
        title: "Who is the current all time points leader in the NBA?",
        correctAnswer: "item4",
        isRequired: true,
        choices: [
         {
          value: "item1",
          text: "Karl Malone"
         },
         {
          value: "item2",
          text: "Michael Jordan"
         },
         {
          value: "item3",
          text: "Lebron James"
         },
         {
          value: "item4",
          text: "Kareem Abdul-Jabbar"
         },
         {
          value: "item5",
          text: "Kobe Bryant"
         }
        ]
       },
       {
        type: "radiogroup",
        name: "question2",
        title: "Who is the current all time assist leader in the NBA?",
        correctAnswer: "item1",
        isRequired: true,
        choices: [
         {
          value: "item1",
          text: "John Stockton"
         },
         {
          value: "item2",
          text: "Jason Kidd"
         },
         {
          value: "item3",
          text: "Magic Johnson"
         },
         {
          value: "item4",
          text: "Bob Cousy"
         }
        ]
       }
      ],
      title: "NBA Survey 2"
     },
     {
      name: "page2",
      elements: [
       {
        type: "radiogroup",
        name: "championships",
        title: "Who has won the most championships in the NBA?",
        correctAnswer: "item2",
        isRequired: true,
        choices: [
         {
          value: "item1",
          text: "Michael Jordan"
         },
         {
          value: "item2",
          text: "Bill Russel"
         },
         {
          value: "item3",
          text: "Lebron James"
         },
         {
          value: "item4",
          text: "Shaquille O'neal"
         },
         {
          value: "item5",
          text: "Kevin Durant"
         }
        ]
       },
       {
        type: "radiogroup",
        name: "tallest",
        title: "Who is the tallest recorded NBA player ever?",
        correctAnswer: "item4",
        isRequired: true,
        choices: [
         {
          value: "item1",
          text: "Russel Westbrook"
         },
         {
          value: "item2",
          text: "Damian Lillard"
         },
         {
          value: "item3",
          text: "Dirk Nowitzki"
         },
         {
          value: "item4",
          text: "Manute Bol"
         },
         {
          value: "item5",
          text: "Yao Ming"
         }
        ]
       }
      ]
     },
     {
      name: "page3",
      elements: [
       {
        type: "radiogroup",
        name: "most_games",
        title: "Which player has played the most NBA games in their entire career?",
        correctAnswer: "item1",
        isRequired: true,
        choices: [
         {
          value: "item1",
          text: "Robert Parish"
         },
         {
          value: "item2",
          text: "Vince Carter"
         },
         {
          value: "item3",
          text: "Jason Terry"
         },
         {
          value: "item4",
          text: "Tim Duncan"
         }
        ]
       },
       {
        type: "radiogroup",
        name: "triple_double",
        title: "Who has the most recorded triple doubles in the NBA?",
        correctAnswer: "item5",
        isRequired: true,
        choices: [
         {
          value: "item1",
          text: "Russel Westbrook"
         },
         {
          value: "item2",
          text: "Jason Kidd"
         },
         {
          value: "item3",
          text: "Magic Johnson"
         },
         {
          value: "item4",
          text: "Jason Richardson"
         },
         {
          value: "item5",
          text: "Oscar Robertson"
         }
        ]
       }
      ]
     },
     {
      name: "page4",
      elements: [
       {
        type: "radiogroup",
        name: "mvp",
        title: "Who won MVP (most valuable player) award in 2017?",
        correctAnswer: "item3",
        isRequired: true,
        choices: [
         {
          value: "item1",
          text: "Steph Curry"
         },
         {
          value: "item2",
          text: "James Harden"
         },
         {
          value: "item3",
          text: "Russell Westbrook"
         },
         {
          value: "item4",
          text: "Paul George"
         }
        ]
       },
       {
        type: "radiogroup",
        name: "most_championships",
        title: "What NBA franchise won the most championship titles in a row?",
        correctAnswer: "item4",
        choices: [
         {
          value: "item1",
          text: "Los Angeles Lakers"
         },
         {
          value: "item2",
          text: "Chicago Bulls"
         },
         {
          value: "item3",
          text: "San Antonio Spurs"
         },
         {
          value: "item4",
          text: "Boston Celtics"
         }
        ]
       }
      ]
     },
     {
      name: "page5",
      elements: [
       {
        type: "radiogroup",
        name: "heaviest",
        title: "Who is the heaviest NBA player ever to play?",
        correctAnswer: "item1",
        choices: [
         {
          value: "item1",
          text: "Oliver Miller"
         },
         {
          value: "item2",
          text: "Shaquille O'neal"
         },
         {
          value: "item3",
          text: "Eddy Curry"
         }
        ]
       },
       {
        type: "radiogroup",
        name: "2020_champions",
        title: "Which team won the 2020 NBA championship?",
        correctAnswer: "item4",
        isRequired: true,
        choices: [
         {
          value: "item1",
          text: "Golden State Warriors"
         },
         {
          value: "item2",
          text: "Los Angeles Lakers"
         },
         {
          value: "item3",
          text: "Toronto Raptors"
         },
         {
          value: "item4",
          text: "Los Angeles Clippers"
         },
         {
          value: "item5",
          text: "Houston "
         }
        ]
       }
      ]
     }
    ]
   }

window.survey = new Survey.Model(json);

survey
    .onComplete
    .add(function (result) {
        document.location = "singlethanks.html";
    });

$("#surveyElement").Survey({ model: survey });