import React from "react";
import Header from "../components/templates/Header/Header";
import Question from "../components/organisms/Question/Question";
import Process from "../components/templates/Process/Process";
import Partner from "../components/templates/Partner/Partner";
import News from "../components/templates/News/News";
import About from "../components/organisms/About/About";
import Category from "../components/templates/Category/Category";

function Home() {
  return (
    <div>
      <Header />
      <About />
      <Process />
      <Category />
      <Partner />
      <Question />
      <News />
    </div>
  );
}

export default Home;
