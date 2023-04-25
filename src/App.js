import { useState } from "react";
import Header from "./components/Header";
import Division from "./components/Division";
import "./App.css";

const sttt = [
  {
    id: "que1",
    ques: "1. What is variable in python ?",
    options: [
      {
        id: "11",
        text: "Constant values",
        stats: false,
      },
      {
        id: 21,
        text: "Containers for values",
        stats: true,
      },
      {
        id: 31,
        text: "Number values",
        stats: false,
      },
      {
        id: 41,
        text: "None of the above",
        stats: false,
      },
    ],
  },
  {
    id: "que2",
    ques: '2. What is a correct syntax to output "Hello World" in Python?',
    options: [
      {
        id: "12",
        text: 'p("Hello World")',
        stats: false,
      },
      {
        id: 23,
        text: 'print("Hello World")',
        stats: true,
      },
      {
        id: 33,
        text: 'echo("Hello World");',
        stats: false,
      },
      {
        id: 43,
        text: 'echo "Hello World"',
        stats: false,
      },
    ],
  },
  {
    id: "que3",
    ques: "3. How do you insert COMMENTS in Python code?",
    options: [
      {
        id: "14",
        text: '#This is a comment',
        stats: true,
      },
      {
        id: 24,
        text: '/*This is a comment*/',
        stats: false,
      },
      {
        id: 34,
        text: '//This is a comment',
        stats: false,
      },
      {
        id: 44,
        text: "None of the above",
        stats: false,
      },
    ],
  },
  {
    id: "que4",
    ques: "4. Is the following is an identifier'12abc'?",
    options: [
      {
        id: 55,
        text: "Yes",
        stats: false,
      },
      {
        id: 65,
        text: "No",
        stats: true,
      },
    ],
  },
  {
    id: "que5",
    ques: "5. What are the types of loops available in python ?",
    options: [
      {
        id: "9",
        text: "for loop",
        stats: false,
      },
      {
        id: "10",
        text: "while loop",
        stats: false,
      },
      {
        id: "11",
        text: "do while loop",
        stats: false,
      },
      {
        id: "12",
        text: "all the above",
        stats: true,
      },
    ],
  },
  {
    id: "que6",
    ques: "6. How do you create a variable with the numeric value 5?",
    options: [
      {
        id: "96",
        text: 'x = int(5)',
        stats: false,
      },
      {
        id: "106",
        text: "x = 5",
        stats: false,
      },
      {
        id: "116",
        text: "Both the other answers are correct",
        stats: true,
      },
    ],
  },
  {
    id: "que7",
    ques: "7. What is the correct file extension for Python files?",
    options: [
      {
        id: "69",
        text: ".pyt",
        stats: false,
      },
      {
        id: "610",
        text: ".pyth",
        stats: false,
      },
      {
        id: "611",
        text: ".python",
        stats: false,
      },
      {
        id: "612",
        text: ".py",
        stats: true,
      },
    ],
  },
  {
    id: "que8",
    ques: "8. How do you create a variable with the floating number 2.8?",
    options: [
      {
        id: "69",
        text: "x = float(2.8)",
        stats: false,
      },
      {
        id: "610",
        text: "Both the other answers are correct",
        stats: true,
      },
      {
        id: "611",
        text: "x = 2.8",
        stats: false,
      },
    ],
  },
  {
    id: "que9",
    ques: "9. What is the correct syntax to output the type of a variable or object in Python?",
    options: [
      {
        id: "69",
        text: "print(typeof x)",
        stats: false,
      },
      {
        id: "610",
        text: "print(typeof(x))",
        stats: false,
      },
      {
        id: "611",
        text: "print(typeOf(x))",
        stats: false,
      },
      {
        id: "612",
        text: "print(type(x))",
        stats: true,
      },
    ],
  },
  {
    id: "que10",
    ques: "10. What is the correct way to create a function in Python?",
    options: [
      {
        id: "69",
        text: "def myFunction():",
        stats: true,
      },
      {
        id: "610",
        text: "create myFunction():",
        stats: false,
      },
      {
        id: "611",
        text: "function myfunction():",
        stats: false,
      },
    ],
  },
];

function App() {
  const [questions, setQuestions] = useState(sttt);
  const [isChatVisible, setIsChatVisible] = useState(false);
  const checkAns = (id, stats, ansdetails) =>
    // stats===true ? document.getElementById(id).style.backgroundColor="red" : document.getElementById(id).style.backgroundColor="steelblue"
    doChanges(id, stats, ansdetails);

  return (
    <div className="app" >
      <Header heading="Python Series" subheading="Basics" />
      <Division questions={questions} checkans={checkAns} />
    </div>
  );
}
function doChanges(id, stats, ansdetails) {
  stats === true
    ? (document.getElementById(ansdetails).style.backgroundColor =
      "#2eb82e")
    : (document.getElementById(ansdetails).style.backgroundColor =
      "#ff3333");
  if (stats === true) {
    document.getElementById(id).style.backgroundColor = "rgb(117, 255, 129)";
    document.getElementById(id).style.color = "black";
  } else {
    sttt.map((question) => {
      if (question.id === ansdetails) {
        question.options.map((opt) => {
          if (opt.stats === true) {
            document.getElementById(opt.id).style.backgroundColor =
              "rgb(117, 255, 129)";
            document.getElementById(opt.id).style.color = "black";
          } else {
            document.getElementById(opt.id).style.backgroundColor =
              "rgb(255, 88, 88)";
          }
        });
      }
    });
  }
  console.log(ansdetails);
}

export default App;
