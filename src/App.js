import { useState } from "react";
import "./App.css";

function App() {
  let conveartText = true;
  const clickMe = () => {
    if (conveartText) {
      conveartText = false;
      setText("Hello Palestine");
    } else {
      conveartText = true;
      setText("Hello World!");
    }
  };
  const [text, setText] = useState(`Hello World!`);
  return (
    <div className="App">
      <span onClick={clickMe}>{text}</span>
    </div>
  );
}
const InputChange = () => {
  const [userName, setUserName] = useState("user name");
  const [email, setEmail] = useState("example@gmail.com");
  return (
    <div className="App">
      <p>{`User Name : ${userName}`}</p>
      <input
        onChange={(event) => setUserName(event.target.value)}
        placeholder="User Name"
      />
      <p>{`Email : ${email}`}</p>
      <input
        onChange={(event) => setEmail(event.target.value)}
        placeholder="example@gmail.com"
      />
    </div>
  );
};
const RandomSentences = () => {
  const [sentence, setArr] = useState("Change Sentence");
  const onClickButton = () => {
    const sentenceArr = [
      "Hi everyone",
      "Hello World!",
      "How are you",
      "what is your country؟",
      "What are you studying",
      "I hope you are fine",
      "I love you all my friends",
      "What is your favorite programming language?",
      "Erorr 404",
      "last sentence",
    ];
    setArr(sentenceArr[Math.floor(Math.random() * sentenceArr.length)]);
  };
  return (
    <div className="App">
      <button onClick={onClickButton}>{sentence}</button>
    </div>
  );
};
export { App, InputChange, RandomSentences };
