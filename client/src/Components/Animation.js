import React, { useRef, useEffect } from "react";
import "../styles/AnimatedElement.css"; // Don't forget to create a CSS file with your animation styles

const Animation = () => {
  const elementRef = useRef(null);

  const handleClick = (e) => {
    e.preventDefault();

    if (elementRef.current) {
      console.log("element", elementRef.current.classList);

      // removing the class
      elementRef.current.classList.remove("run-animation");

      // triggering reflow
      void elementRef.current.offsetWidth;

      // and re-adding the class
      elementRef.current.classList.add("run-animation");
    }
  };

  useEffect(() => {
    if (elementRef.current) {
      elementRef.current.addEventListener("click", handleClick, false);
    }

    return () => {
      if (elementRef.current) {
        elementRef.current.removeEventListener("click", handleClick, false);
      }
    };
  }, []);

  return (
    <div
      id="animate"
      ref={elementRef}
      className="your-initial-css-class run-animation"
    >
     
      <div className="wrapper run-animation" id="animate">
        <div className="logo">
          <span className="marvel">marvel</span>
          <span className="studios">studios</span>
        </div>
      </div>
      <div className="images"></div>
    </div>
  );
};

export default Animation;
