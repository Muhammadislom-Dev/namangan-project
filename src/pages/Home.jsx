import React from "react";
import Header from "../components/templates/Header/Header";
import Question from "../components/organisms/Question/Question";
import Process from "../components/templates/Process/Process";
import Partner from "../components/templates/Partner/Partner";
import News from "../components/templates/News/News";

function Home() {
  return (
    <div>
      <Header />
      <Process />
      <Partner />
      <News />
      <Question />
    </div>
  );
}

export default Home;
