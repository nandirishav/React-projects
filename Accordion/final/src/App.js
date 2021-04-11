import React, { useState } from "react";
import data from "./data";
import Question from "./Question";
//import SingleQuestion from "./Question";

function App() {
  const [questions, setQuestions] = useState(data);
  return (
    <main>
      <div className="container">
        <h3>Some common FAQ questions</h3>
        <section className="info">
          {/* itertating over the list of questions from the data.js file */}
          {questions.map((question) => {
            return <Question key={question.id} {...question} />;
          })}
        </section>
      </div>
    </main>
  );
}

export default App;
