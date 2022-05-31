import React, { Component } from "react";
//import { Link } from "react-router-dom";
//import { FaIgloo } from "react-icons/fa";
import "./resources.css";
//const ReactMarkdown = require("react-markdown");

export default class Resources extends Component {

    render() {
      return (
        <>
        <section className="services">
          <h2>Why you should do Competitive Programming?</h2>

          <div className="service-container">
            <div className="services-card service-one"></div>
            <div className="service-description">
              <h3>Makes you a desirable candidate to major companies</h3>
              <div>
                Participation in the ACM International Collegiate Programming
                Contest (ACM ICPC) is a great opportunity to be seen by Apple,
                Facebook, Google, IBM and many other authorities in the IT
                sphere. These major companies are constantly keeping track of
                these type of events and the participants to find talented
                employees.
              </div>
            </div>
          </div>

          <div className="service-container">
            <div className="services-card service-two"></div>
            <div className="service-description">
              <h3>Helps you solve complicated problems</h3>
              <div>
                During the ACM ICPC, you must solve difficult tasks, which are
                not for ordinary programmers. While you are training, you learn
                how to solve these out of the ordinary tasks. This helps prepare
                you for a job because you can adapt and solve various types of
                problems, in various types of situations.
              </div>
            </div>
          </div>

          <div className="service-container">
            <div className="services-card service-three"></div>
            <div className="service-description">
              <h3>Teaches you how to work in teams</h3>
              <div>
                This is a very important skill, as most jobs will require you at
                some point to work in a team. Competitive programming helps you
                learn how to effectively work together, as you must work with
                others on your team to complete the same task. You learn how to
                assess your team members strength and weaknesses and
                effectively divide responsibilities between each other.
              </div>
            </div>
          </div>
        </section>
         </>
      );
    }
  }