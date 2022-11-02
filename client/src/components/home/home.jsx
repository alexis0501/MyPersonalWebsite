import './home.css';
import img from '../props/img2.jpg';
import Buttons from '../button/button';
import { BsMouse } from 'react-icons/bs';
import {FaGraduationCap} from 'react-icons/fa'

function Home() {
  return (
    <div id='home' className='container home-container'>
      <div className='logo'>
        <div className='hover-show'>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
        </div>

        <img src={img} alt='profile pic' />
      </div>

      <a href='#footer' className='scroll-down'>
        <hr />
        <h5>scroll down</h5>
        <BsMouse className='scroll' />
        <hr />
      </a>

      <h2>
        <span>About Me</span> <br />
        <p>
            I'm a full-stack web developer and a Coding Dojo graduate <FaGraduationCap/>
            who has a passion for creating web applications. I am trained in Python, Java 8 and MERN.
        </p>
      </h2>

      <Buttons />
    </div>
  );
}

export default Home;
