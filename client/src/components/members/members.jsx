import "./members.css";

const Members = () => {
  return (
    <div id="members" className="container members-container">
      <h1 className="member-txt">Projects</h1>
      <div className="member member-1">
        <div className="member-img mem1"></div>
        <div className="member-info">
          <h1 className="name">Car Wiki</h1>
          <h3 className="position">JavaScript</h3>
          <h4 className="about">
              A Car Wiki where a person is able to create posts about their favorite vehicles for others to see and obtain data based
              on the vehicle that is selected. Utilizing Bootstrap for responsive designs for user satisfaction. Using JavaScript for both 
              front-end (Client) with React & back-end (Server) with NodeJS. Creating my own API for post information to be sent to my 
              MongoDB database & verifying json information with Postman.
              <br />
              Languages & Tools: JavaScript, Bootstrap, React, NodeJS, MongoDB, Mongoose, Postman, VsCode & Git.
          </h4>
          {/* Going to add link to the website  */}
          <a href="https://github.com/alexis0501/MyMERNProject" rel="noreferrer" className="contact-member" target={"_blank"}>
            <span>View Code</span>
          </a>
        </div>
      </div>

      <div className="member member-2">
        <div className="member-img mem2"></div>
        <div className="member-info">
          <h1 className="name">Blog Website</h1>
          <h3 className="position">Java</h3>
          <h4 className="about">
            A Blog Website where people are able to share what is going on in their daily lives with login & registration to store a user's session
            Using Session I am able to have conditional rendering for certain pages. As well as having redirects for unwanted visitors who 
            have not signed in. Having multiple SQL query statements to join data together with Jinja2.
            <br />
            Languages & Tools: Java 8, Git, Spring Tool Suite, Bootstrap, MySQL, Bcrypt & Session.
          </h4>
          {/* Going to add link to the website */}
          <a href="https://github.com/alexis0501/Java-Project" rel="noreferrer" target={"_blank"} className="contact-member">
            <span>View Code</span>
          </a>
        </div>
      </div>

      <div className="member member-3">
        <div className="member-img mem3"></div>
        <div className="member-info">
          <h1 className="name">Student Tracker</h1>
          <h3 className="position">Python</h3>
          <h4 className="about">
            A Student Tracker with Flask framework where a teacher is able to add Students to their classroom using query join statements with MySQL
            and utilizing session to add said student to the classroom of the user who is signed in. When a user wants to sign in, 
            their passwords get hashed with Bcrypt for security & using Flash to display error messages.
            <br />
            Languages & Tools: Python, Bcrypt, Jinja, Flask, Flash, Mysql, Git, & Bootstrap.
          </h4>
          <a href="https://github.com/alexis0501/Python-Project" rel="noreferrer" target={"_blank"} className="contact-member">
            <span>View Code</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Members;
