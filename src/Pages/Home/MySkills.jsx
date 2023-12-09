import { useState } from "react";
import data from "../../data/index.json";
import { animated, useSpring } from "react-spring";

export default function MySkills() {

  const [animate, setAnimate] = useState(false);

// const spring = animate
// const useSpring = useSpring()
  


  return (
    <section className="skills--section" id="mySkills">
      <div className="portfolio--container">
        <p className="section--title">My Skills</p>
        <h2 className="skills--section--heading">My Expertise</h2>
      </div>
      <div className="skills--section--container">
        {data?.skills?.map((item, index) => (
          <div key={index} className="skills--section--card">
            <div className="skills--section--img">
              <img src={item.src} alt="Product Chain" />
            </div>
            <div className="skills--section--card--content">
              <h3 className="skills--section--title">{item.title}</h3>
              <p className="skills--section--description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="exp-icon-container">
        <div
          className="exp-icon-div"
          style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)" }}
        >
          <img className="html" src="./img/html.png" alt="" />
          <img className="css" src="./img/css.png" alt="" />
          <img className="react" src="./img/react.png" alt="" />
          <img className="javascript" src="./img/javascript.png" alt="" />
          <img className="tailwind" src="./img/tailwind.png" alt="" />
          <img className="node" src="./img/node.png" alt="" />
          <img className="chakra" src="./img/chakra.png" alt="" />
        </div>
      </div>
    </section>
  );
}
