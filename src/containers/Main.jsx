import React, { Component } from "react";
import Header from "../components/header/Header";
import Greeting from "./greeting/Greeting";
import Skills from "./skills/Skills";
import WorkExperience from "./workExperience/WorkExperience";
import Projects from "./projects/Projects";
import Footer from "../components/footer/Footer";
import Top from "./topbutton/Top";
import Profile from "./profile/Profile";
import About from './about/About';


export default class Main extends Component {
  render() {
    return (
      <div>
        <Header />
        <Greeting />
        <About/>
        <Skills />
    
        <WorkExperience />
        <Projects />
        <Profile />
        <Footer />
        <Top />
      </div>
    );
  }
}
