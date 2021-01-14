import './HomePage.css';
import signature from './../../assets/tempSig.png'
import React from 'react';
import { FaGithub, FaLinkedin, FaFileAlt, FaEnvelope } from 'react-icons/fa';

import Portfolio from './../../components/portolio/Portfolio';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="homepage">
        <div className="landing">
          <div className="description">
            <img src={signature}></img>
            <div className="text">
              <p>I am designing this website to attempt to learn <a className="text-link" href="https://reactjs.org/">React</a>. It is a pretty difficult thing to do, as I am horrible at designing things that look good, but it is a difficulty that I will have to overcome. <br /> <br />Part of my struggle in making this website is finding good colors and fonts! Why is this so difficult? There are so many options to choose from, some of which look horrible! Other fonts look exactly the same. What is the meaning behind a good font?</p>
              <a href="mailto:ryanzhao@berkeley.edu" target="_blank" rel="noopener noreferrer" className="icon-link"><FaEnvelope /></a>
              <a href="https://github.com/KnightAsterial" target="_blank" rel="noopener noreferrer" className="icon-link"><FaGithub /></a>
              <a href="https://www.linkedin.com/in/ryan-zhao-ab4752121" target="_blank" rel="noopener noreferrer" className="icon-link"><FaLinkedin /></a>
              <a target="_blank" rel="noopener noreferrer" className="icon-link"><FaFileAlt /></a>
            </div>
          </div>
          <div className="sidePhoto">

          </div>
        </div>
        <div className="hp-accomplish">
          <Portfolio experiences={test} mentorship={test} awards={[]} filters={[]}/>
        </div>
      </div>
    )
  }
}

const test = [
{
  organization: "Berkeley Codebase",
  title: "Software Developer",
  timeframe: "August 2019 - Present",
  description: ["Developed for Digital Academy, Lockheed’s internal education platform used by over 23,000 employees", "Helped transform Digital Academy from a MEAN site with an Express backend into a serverless application built with AWS Lambda and NodeJS, reducing operational costs by 23% and allowing for zero downtime deployments", "Created full-stack AWS serverless applications using NodeJS, Angular, and DynamoDB for Lockheed's rapid prototyping team and implemented OpenID authentication for WordPress sites"],
  tags: ["full stack", "aws", "databases", "angular", "nodejs"],
},
{
  organization: "Berkeley Codebase",
  title: "Software Developer",
  timeframe: "August 2019 - Present",
  description: ["Developed for Digital Academy, Lockheed’s internal education platform used by over 23,000 employees", "Helped transform Digital Academy from a MEAN site with an Express backend into a serverless application built with AWS Lambda and NodeJS, reducing operational costs by 23% and allowing for zero downtime deployments", "Created full-stack AWS serverless applications using NodeJS, Angular, and DynamoDB for Lockheed's rapid prototyping team and implemented OpenID authentication for WordPress sites"],
  tags: ["full stack", "aws", "databases", "angular", "nodejs"],
},
{
  organization: "Berkeley Codebase",
  title: "Software Developer",
  timeframe: "August 2019 - Present",
  description: ["Developed for Digital Academy, Lockheed’s internal education platform used by over 23,000 employees", "Helped transform Digital Academy from a MEAN site with an Express backend into a serverless application built with AWS Lambda and NodeJS, reducing operational costs by 23% and allowing for zero downtime deployments", "Created full-stack AWS serverless applications using NodeJS, Angular, and DynamoDB for Lockheed's rapid prototyping team and implemented OpenID authentication for WordPress sites"],
  tags: ["full stack", "aws", "databases", "angular", "nodejs"],
}];

export default HomePage;