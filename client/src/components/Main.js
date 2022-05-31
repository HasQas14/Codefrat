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
      <br /><br /><br /><br /><br /><br />
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
        <br />
        <br />
        <br />
        <br />
        <br />
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
        <section>

        </section>
      </main>
    </React.Fragment>
  );
};

export default Main;
