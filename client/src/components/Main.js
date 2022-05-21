import React, { useState } from "react";
import hero from "../hero.svg";
import { Link, useHistory } from "react-router-dom";

const Main = () => {
  const [joined, setJoined] = useState("");
  const history = useHistory();

  const join = (e) => {
    e.preventDefault();
    if (joined !== "") {
      let today = new Date();
      let date =
        today.getFullYear() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getDate();
      history.push(`/thanks/${joined}`, date);
    }
  };

  return (
    <React.Fragment>
      <header className="create">
        {/* <img src={hero} /> */}
        <div>
          <h1>
            CodeFrat
          </h1>
          <p>A Babu Banarasi Das Educational Institute Initiative!</p>
	        <p>A private Online Judge and CP Guide for students of BBDEG</p>
          <Link to="/compete">Get Started</Link>
        </div>
      </header>
    
      <main>
        <section>
        <div class="container-fluid text-center">
        <h2>Upcoming Features!</h2>
          <br />
          <div class = "row">
            <div class = "col-sm-4">
              <div class="logo-video">
              <span class = "glyphicon glyphicon-facetime-video"></span>
              </div>
              <h4>Video Resources</h4>
              <p>Various how to solve, dsa tutorials, video lectures, among more!</p>
            </div>
            <div class = "col-sm-4">
              <div class="logo-editor"><span class = "glyphicon glyphicon-edit"></span></div>
              <h4>Contests</h4>
              <p>An exciting competitive environment where different students can compete for a coveted prize using their coding skills!</p>
            </div>
            <div class = "col-sm-4">
            <div class="logo-judge"><span class = "glyphicon glyphicon-send"></span></div>
              <h4>Discussion Panel</h4>
              <p>A forum-based page where students and experienced alumni/faculty can post special helpful articles about DSA or just general knowledge regarding programming!</p>
            </div>
          </div>
        </div>
        </section>
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
                assess your team members’ strength and weaknesses and
                effectively divide responsibilities between each other.
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2>Join our newsletter to get the latest trends.</h2>

          <form className="newsletter" onSubmit={join}>
            <input
              type="email"
              placeholder="Your email goes here"
              onChange={(e) => setJoined(e.target.value)}
            />
            <input type="submit" value="Join Now!" />
          </form>
        </section>
      </main>
    </React.Fragment>
  );
};

export default Main;
