import React from "react";

const PopupP1 = (props1) => {
  return props1.trigger ? (
    <div className="popup">
      <div className="popup_inner">
        <button
          className="close_btn btn btn-primary"
          onClick={() => props1.setTrigger(false)}
        >
          Close
        </button>

        <div>
          <span className="scroll_item">Scroll Down</span>
        </div>

        <h5>All About</h5>
        <h2>The Wright Colors</h2>

        <h3>Project Origin</h3>
        <p>
          This is my coding project that I made while enrolled in a Udemy course
          by Colt Steele. It was a fun challenge, and was my first real brush
          with JavaScript, in a way that I had to use critical thinking in order
          to accomplish the goal.
          <br />
          <br />
          It was not a complete copy though, I made lots of Changes, such as
          text color changed based off background color darkness, adding the
          equivalent hex-code, and adding three separate color pickers for
          variety.
        </p>
        <h3>How This Project Works</h3>
        <p>
          Ok so, it is a very simple project with a simple UI. On the page load,
          there are three areas that load with a random background number. This
          background is added by using Math.random, flooring it and multiplying
          it by 255. This was generated 3 times and then inputted into a string
          of RGB values, which was then applied to the background as the random
          color.
          <br />
          <br />
          Then, you have three buttons in each section/area. When clicked the
          button calls the function to make a new color, which is then applied
          background once again. At the same time, the values for the RGB are
          then passed through a function to extract the numbers, which are added
          up and compared to a minimum threshold to set the lighter color for
          the text, if it is lower, if it is higher than the threshold, it stays
          as is.
          <br />
          <br />
          Lastly, the same numbers used to generate the RGB values are
          individually passed through a function which strings it to a base of
          16, makes the length to 2 values, and adds it to "0". These numbers
          are concatenated, which then returns a hex value. This value is then
          displayed at the bottom.
        </p>
        <h3>The Challenges I faced with this project</h3>
        <p>
          The project contained simple functions involving Math.floor and
          Math.random, to obtain numbers that were later used as the inputs for
          the rgb values. I also utilized some basic if-else functions and event
          listeners. These were the easy parts. The hardest part was when I
          tried to change the text color, based off of the color, rgb value,
          returned to me. At first the value for the rgb was immediately
          returned as a string, but I later returned it as an object, which was
          easier to manipulate, and extract for the rgb and hex functions.
          <br />
          <br />
          In order to change the color of the text based off of the darkness of
          the rgb, I had to first understand how my function returned values.
          Meaning were they in an array? object? string? integer? Well, I found
          out that my function was returning an object with number as strings.
          Once I understood this, I was able to pass through another function
          which converted the object to an array, and parseInt those items to
          make them integers. At this point, I then was able to loop over the
          array to find the total. The total was then compared a hardcoded
          "threshold" value which was used as the parameter for my if-else
          statement, to determine when and if the text color was changed
          <br />
          <br />
          Once I understood that how a function was returning information to me,
          I was able to adjust accordingly! I learned a lot coding this project,
          as it forced me to be organized, use critical thinking, and a lot of
          problem solving/debugging.
        </p>

        {props1.children}
      </div>
    </div>
  ) : (
    ""
  );
};

export default PopupP1;
