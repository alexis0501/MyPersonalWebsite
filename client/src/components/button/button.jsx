import "./button.css";

function Buttons() {
  return (
    <div className="container button-container">
      <a href="#about" className="btn pri">
        Learn more
      </a>
      <a href="https://drive.google.com/file/d/1v9IxlCPxqXAqH08n6YJjuaiOv4qrPTcV/view?usp=share_link" target={"_blank"} rel="noreferrer" className="btn sec">
        Resume
      </a>
    </div>
  );
}

export default Buttons;
