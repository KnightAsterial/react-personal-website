import './HomePage.css';
import signature from './../../assets/tempSig.png';
import profilepic from './../../assets/brushMe.png';
import resume from './../../assets/ryan-zhao-resume.pdf';
import React from 'react';
import { FaGithub, FaLinkedin, FaFileAlt, FaEnvelope } from 'react-icons/fa';

import Portfolio from './../../components/portolio/Portfolio';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filters: [],
      filterText: "",
      inputPlaceholder: filler,
    };

    this.descriptionRef = React.createRef();
    this.inputRef = React.createRef();
    this.reachedPortfolio = false;
    this.typewriterWordIndex = 0;
    this.typewriterCharIndex = 0;
    this.typewriterSpeed = 150;

    this.handleFilterInput = this.handleFilterInput.bind(this);
    this.scrollListener = this.scrollListener.bind(this);
    this.handleTypewriter = this.handleTypewriter.bind(this);
  }

  handleFilterInput(event) {
    this.setState((state, props) => {
      return {
        filterText: event.target.value,
        filters: event.target.value.trim().replaceAll(/[^a-zA-Z ]/g, "").split(" "),
        inputPlaceholder: event.target.value.length === 0 ? filler : "",
      }
    });
  }

  handleTypewriter() {
    console.log("handling typerwriter with", this.typewriterWordIndex, this.typewriterCharIndex);
    let currentWord = typewriterWords[this.typewriterWordIndex];
    this.typewriterCharIndex += 1;
    if (this.typewriterCharIndex < currentWord.length) {
      let substr = currentWord.substring(0, this.typewriterCharIndex);
      this.setState({
        filterText: substr,
        filters: substr.split(" "),
        inputPlaceholder: ""});
      setTimeout(this.handleTypewriter, this.typewriterSpeed);
    } else if (this.typewriterCharIndex === currentWord.length){
      let substr = currentWord.substring(0, this.typewriterCharIndex);
      this.setState({
        filterText: substr,
        filters: substr.split(" "),
        inputPlaceholder: ""});
      setTimeout(this.handleTypewriter, this.typewriterSpeed * 4);
    } else {
      this.typewriterWordIndex += 1;
      if (this.typewriterWordIndex < typewriterWords.length) {
        this.typewriterCharIndex = 0;
        setTimeout(this.handleTypewriter, this.typewriterSpeed);
      } else if (this.typewriterWordIndex === typewriterWords.length) {
        setTimeout(() => {
          this.setState({filterText: "", filters:[""], inputPlaceholder: filler});
          this.inputRef.current.focus()
        }, this.typewriterSpeed * 4);
      }
    }
  }

  scrollListener() {
    if (this.descriptionRef.current.getBoundingClientRect().bottom < 0) {
      console.log("test");
      if (!this.reachedPortfolio) {
        this.reachedPortfolio = true;
        this.handleTypewriter();
        window.removeEventListener('scroll', this.scrollListener);
      }
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.scrollListener);
  }

  componentWillUnmount() {
    if (!this.reachedPortfolio) {
      window.removeEventListener('scroll', this.scrollListener);
    }
  }

  render() {
    return (
      <div className="homepage">
        <div className="landing">
          <div ref={this.descriptionRef} className="description">
            <img alt="Ryan Zhao signature" src={signature}></img>
            <div className="text">
              <p>Hello! I am a sophomore studying computer science and math at <a className="text-link" href="https://www.berkeley.edu/" target="_blank" rel="noopener noreferrer">UC Berkeley</a>. I love designing software and thinking about algorithmic challenges. This upcoming summer, I will be working as a software engineer intern.<br /><br />Outside of work, I am involved in some great organizations on campus. I am a mentored project manager for <a className="text-link" href="https://codebase.berkeley.edu/" target="_blank" rel="noopener noreferrer">Codebase</a>, where I teach students the fundamentals of software engineering. Previously, I have also been a course mentor for CS 61A through <a className="text-link" href="https://csmentors.berkeley.edu/" target="_blank" rel="noopener noreferrer">CSM</a>.</p>
              <a href="mailto:ryanzhao@berkeley.edu" target="_blank" rel="noopener noreferrer" className="icon-link"><FaEnvelope /></a>
              <a href="https://github.com/KnightAsterial" target="_blank" rel="noopener noreferrer" className="icon-link"><FaGithub /></a>
              <a href="https://www.linkedin.com/in/ryan-zhao-ab4752121" target="_blank" rel="noopener noreferrer" className="icon-link"><FaLinkedin /></a>
              <a href={resume} target="_blank" rel="noopener noreferrer" className="icon-link"><FaFileAlt /></a>
            </div>
          </div>
          <div className="sidePhoto">
            <img alt="Ryan Zhao profile" src={profilepic}></img>
          </div>
          <a className="scrollChevron" href="#portfolio">
            <svg width="54" height="30" viewBox="0 0 54 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 2L27 27L52 2" stroke="#30ADC9" strokeWidth="5" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
        <div id="portfolio" className="hp-accomplish">
          <div className="accomplish-text container">
            <h1>I am a <b>Computer Science</b> major</h1>
            <h1>studying at the <b>University of California, Berkeley</b>.</h1>
            <div className="accomplish-input-container">
              <span>I work with&nbsp;</span>
              <div className="accomplish-input-overlay">
                <span className="accomplish-input-gray">{this.state.inputPlaceholder}</span>
                <input autoComplete="off" ref={this.inputRef} value={this.state.filterText} onChange={this.handleFilterInput}></input>
                
              </div>
            </div>
          </div>
          <hr></hr>
          <div className="container">
            <Portfolio experiences={experiencesList} mentorship={mentorshipList} awards={awardsList} filters={this.state.filters}/>
          </div>
        </div>
      </div>
    )
  }
}

/* Temporarily placed here just to have things show up */
const experiencesList = [
{
  organization: "RiskIQ",
  title: "Developer through Codebase",
  timeframe: "August 2020 - Present",
  description: ["Developed MapReduce pipeline for RiskIQ to parallelize the extraction and aggregation of SSL server configurations from the world's ~2 billion hostnames, improving previous scan times by nearly 85%",
                "Worked with RiskIQ engineers to analyze hosts for vulnerabilities such as poodle, beast, and drown",
                "Scanned hosts using zgrab2, stored data in Apache HBase, and created indexed search using Apache Solr"],
  tags: ["mapreduce", "backend", "security", "zgrab2", "apache"],
},
{
  organization: "DataStax",
  title: "Developer through Codebase",
  timeframe: "January 2020 - May 2020",
  description: ["Built fault-tolerant database migration service to transfer existing Cassandra databases to the cloud",
                "Designed and created a multithreaded Go proxy that parsed Cassandra’s binary protocol to direct reads/writes during migration for zero user downtime",
                "Implemented custom communication channel between migration and proxy to coordinate operations"],
  tags: ["go", "golang", "databases", "cassandra", "networking", "backend"],
},
{
  organization: "Lockheed Martin",
  title: "Software Engineer Intern",
  timeframe: "July 2019 - August 2020",
  description: ["Developed for Digital Academy, Lockheed’s internal education platform used by over 23,000 employees",
                "Helped transform Digital Academy from a MEAN site with an Express backend into a serverless application built with AWS Lambda and NodeJS, reducing operational costs by 23% and allowing for zero downtime deployments",
                "Created full-stack AWS serverless applications using NodeJS, Angular, and DynamoDB for Lockheed's rapid prototyping team and implemented OpenID authentication for WordPress sites"],
  tags: ["full stack", "aws", "databases", "angular", "nodejs"],
}];

const mentorshipList = [
  {
    organization: "Berkeley Codebase",
    title: "Mentored Project Manager",
    timeframe: "January 2021 - Present",
    description: ["Trained six students with no web development experience to build a full-stack web application using React, Express, and PostgreSQL",
                  "Lead professional development mentorship sessions for the mentored developers to break into the software engineering industry",
                  "Designed and completed a voting portal for The Green Initiative Fund to streamline their grant discussion and approval process"],
    tags: ["codebase", "mentorship", "react", "postgresql", "express"],
  },
  {
    organization: "Computer Science Mentors",
    title: "CS 61A Course Tutor",
    timeframe: "February 2020 - January 2021",
    description: ["Taught a weekly small-group class for students in Berkeley’s introductory CS course",
                  "Presented mini-lectures, guided students through practice problems, and offered support on course work",
                  "Covered concepts such as recursion, mutation, and object-oriented programming"],
    tags: ["teaching", "mentorship", "staff", "education"],
  }];

  const awardsList = [
    {
      organization: "Lockheed Martin’s AWS Gameday Champion",
      title: "",
      timeframe: "July 2020",
      description: ["Placed 1st out of LM’s 2020 cohort of 2000 interns",
                    "Leveraged AWS tools like EKS, CloudFront, and Forecast to best solve the Gameday’s challenges"],
      tags: ["aws", "lockheed"],
    },
    {
      organization: "American Invitational Mathematics Exam (AIME) Qualifier",
      title: "",
      timeframe: "March 2019",
      description: ["Recognized for scoring among the top 5% nationally in the American Mathematics Competition"],
      tags: ["AIME", "AMC", "math", "olympiad"],
    },
    {
      organization: "National Merit Scholarship Recipient",
      title: "",
      timeframe: "April 2019",
      description: ["Received a scholarship awarded to 2500 students out of 1.6 million applicants"],
      tags: ["psat", "sat", "honors"],
    }];

const filler = "backend, Go, full stack, databases";
const typewriterWords = ["databases", "education", "React"];

export default HomePage;