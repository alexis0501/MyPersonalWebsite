import "./qualifications.css";
import {AiOutlineArrowRight} from 'react-icons/ai'

const handleAlert = () =>{
  alert("Hold shift and use mousewheel to scroll left/right 🙂")
}

const Qualifications = () => {
  return (
    <div>
      <span className="quali-text">My Qualifications <button onClick={handleAlert} className="qual-btn"><AiOutlineArrowRight/></button> </span>
      <div className="qualifications-container">
  
        <div className="qualification">
          <div className="content html"></div>
          <h1>html</h1>
        </div>  
        <div className="qualification">
          <div className="content css"></div>
          <h1>css</h1>
        </div>
        <div className="qualification">
          <div className="content javascript"></div>
          <h1>javascript</h1>
        </div>
        <div className="qualification">
          <div className="content python"></div>
          <h1>Python</h1>
        </div>
        <div className="qualification">
          <div className="content java"></div>
          <h1>Java</h1>
        </div>
        <div className="qualification">
          <div className="content bootstrap"></div>
          <h1>bootstrap</h1>
        </div>
        <div className="qualification">
          <div className="content react"></div>
          <h1>react</h1>
        </div>
        <div className="qualification">
          <div className="content flask"></div>
          <h1>flask</h1>
        </div>
        <div className="qualification">
          <div className="content mongoose"></div>
          <h1>mongoose</h1>
        </div>
        <div className="qualification">
          <div className="content nodejs"></div>
          <h1>nodejs</h1>
        </div>
        
        <div className="qualification">
          <div className="content mysql"></div>
          <h1>mysql</h1>
        </div>
        <div className="qualification">
          <div className="content mongodb"></div>
          <h1>mongodb</h1>
        </div>
        
        <div className="qualification">
          <div className="content aws"></div>
          <h1>AWS</h1>
        </div>
        <div className="qualification">
          <div className="content postman"></div>
          <h1>Postman</h1>
        </div>
        <div className="qualification">
          <div className="content sqlworkbench"></div>
          <h1>MySQLWorkbench</h1>
        </div>
        <div className="qualification">
          <div className="content sts"></div>
          <h1>Spring Tool Suite</h1>
        </div>
        <div className="qualification">
          <div className="content vscode"></div>
          <h1>vscode</h1>
        </div>
        <div className="qualification">
          <div className="content github"></div>
          <h1>github</h1>
        </div>
        <div className="qualification">
          <div className="content git"></div>
          <h1>git</h1>
        </div>

      </div>
    </div>
  );
};

export default Qualifications;
