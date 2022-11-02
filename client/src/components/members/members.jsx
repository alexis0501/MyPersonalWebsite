import "./members.css";

const Members = () => {
  return (
    <div id="members" className="container members-container">
      <h1 className="member-txt">Projects</h1>
      <div className="member member-1">
        <div className="member-img"></div>
        <div className="member-info">
          <h1 className="name">Car Dealership</h1>
          <h3 className="position">By Alexis</h3>
          <h4 className="about">
              A Car Dealership website where you are able to sell a vehicle of your choosing. I took inspiration from my passion of cars to create this
              in MERN. Using Axios to handle the routes, Node.js as my back-end with React as my front-end. When a user sells a vehicle it is stored in 
              MongoDB.
          </h4>
          <a href="#contact" className="contact-member">
            <span>contact</span>
          </a>
        </div>
      </div>

      <div className="member member-2">
        <div className="member-img"></div>
        <div className="member-info">
          <h1 className="name">Project 2</h1>
          <h3 className="position">By Alexis</h3>
          <h4 className="about">
            Description here
          </h4>
          <a href="#contact" className="contact-member">
            <span>contact</span>
          </a>
        </div>
      </div>

      <div className="member member-3">
        <div className="member-img"></div>
        <div className="member-info">
          <h1 className="name">Project 3</h1>
          <h3 className="position">By Alexis</h3>
          <h4 className="about">
            Description here
          </h4>
          <a href="#contact" className="contact-member">
            <span>contact</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Members;
