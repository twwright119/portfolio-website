import React from "react";

const PopupP2 = (props2) => {
  return props2.trigger ? (
    <div className="popup">
      <div className="popup_inner">
        <button
          className="close_btn btn btn-primary"
          onClick={() => props2.setTrigger(false)}
        >
          Close
        </button>
        <div>
          <span className="scroll_item">Scroll Down</span>
        </div>
        <h5>All About</h5>
        <h2>The Score Keeper</h2>
        <h3>Project Origin</h3>
        <p>
          This was a really fun project, as I got the chance to be creative with
          my CSS and JavaScript. Again, my projects right now are originating
          from my coding bootcamp on Udemy with Colt Steele
        </p>
        <h3>How This Project Works</h3>
        <p>
          This is my score keeper app. It is a fun and physically appealing side
          project built primarily with HTML and JavaScript, with some CSS
          framework, Bulma. It could be used to keep track of a ping pong game,
          a card game or any game that tracks two players really. The HTML is
          simple, as it is a card with a picture, two name inputs, two h2's for
          the score an input for the max score, and three buttons, which add
          points to the respective player score and resets the score.
        </p>
        <br />
        <br />
        <p>
          The CSS framework, Bulma, just organizes the HTML and makes it look
          nicer, in a card format.
        </p>
        <br />
        <br />
        <p>The JavaScript file is broken down into three different sections:</p>
        <ul>
          <li>
            <span className="popup_li_span">1:</span> Defining the Variables
          </li>
          <li>
            <span className="popup_li_span">2:</span> Functions/App
            Functionality
          </li>
          <li>
            <span className="popup_li_span">3:</span> Creating the events to
            call the functions
          </li>
        </ul>
        <br />
        <p>
          This project had a major focus on manipulating the DOM, and selecting
          elements so that they could be called on later to append, change,
          delete, or reset later. During this project, I also had my first brush
          with Object Oriented Programming... at a small scale. Each of the
          players information or elements was selected within an object and was
          changed or appended by p1.___ or p2.____. Other than the player
          objects some constants were defined to have a "starter variable", such
          as the winning score, or the boolean value of isGameOver, which was
          set to false.
        </p>
        <br />
        <br />
        <p>
          Once all the variables were selected, I had to create the
          functionality. First, I mapped out how the app was supposed to
          function via pseudo code. I needed the name of the player to change to
          whatever value was inputted. I then needed to set the max score of the
          game/score tracker based off the value selected. I then needed to
          track the players scores when their "+1" button was selected and
          change the value respectively. And finally, I needed to add the
          functionality for the reset button.
        </p>
        <br />
        <br />
        <p>
          This was all accomplished by setting certain values to false at the
          start of the game, and then to true once a number was reached. I coded
          in some if statements for updating the score, and for when game over
          was true, which would do things like disable buttons and set certain
          colors to texts.
        </p>
        <br />
        <br />
        <p>
          Once all the functionality was there, I added event listeners to the
          inputs, and buttons. These events called on my functions respectively,
          which in turn applied class values, along with text values.
        </p>
        <h3>The Challenges I faced with this project</h3>
        <p>
          I really enjoyed my first brush with OOP. It was interesting to learn
          how to pull values from the objects I created and apply different
          functionality to them. It was a challenge trying to stay organized,
          but I accomplished this by using my pseudo code, and comments to keep
          track of where things should go. All in all, it was nice to see the
          code get refactored, which made it easier for myself and others to
          understand.
        </p>
        {props2.children}
      </div>
    </div>
  ) : (
    ""
  );
};

export default PopupP2;
