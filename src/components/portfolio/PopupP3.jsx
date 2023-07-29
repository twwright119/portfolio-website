import React from "react";

const PopupP3 = (props3) => {
  return props3.trigger ? (
    <div className="popup">
      <div className="popup_inner">
        <button
          className="close_btn btn btn-primary"
          onClick={() => props3.setTrigger(false)}
        >
          Close
        </button>

        <div>
          <span className="scroll_item">Scroll Down</span>
        </div>

        <h5>All About</h5>
        <h2>YelpCamp</h2>
        <h3>Project Origin</h3>
        <p>
          This is a decently sized full CRUD app. This project originates from
          my coding bootcamp on Udemy by Colt Steele. This app demonstrates a
          full stack coding ability, as it works with frontend and backend
          development. It uses multiple Node.JS Express frameworks, and NoSQL,
          MongoDB to bring to life a camp review web app.
        </p>
        <h3>How This Project Works</h3>
        <h4>Front End</h4>
        <p>
          There is a lot of functionality behind this project. The basis of this
          project operates like Yelp. You have a register and a login, which
          gives you access to creating, reading, updating, and deleting
          campgrounds and reviews. It was built not for 100% functionality, but
          more to showcase my knowledge of being a full stack dev.
        </p>
        <br />
        <br />
        <p>
          The landing page is just simply a home page with an aesthetic
          background, and some links and buttons to bring you to specific pages.
          from here, if you want to login or register, you can, and if not, you
          can continue to the rest of the app.
        </p>
        <br />
        <br />
        <p>
          The rest of the pages on the app are self-explanatory. You can view
          all campgrounds which also displays a cluster map, utilizing the
          Mapbox API. You can then click on a specific campground to view its
          details. On here you also have a map showing a Long and Lat location.
          This page also displays the name of the campground, the pictures, the
          description, the cost, who it was submitted by, and the reviews. If
          you were to register/login, you can create a campground, update it, or
          delete it. You could also leave a review or delete a review.
        </p>
        <h4>Back End</h4>
        <p>
          This project utilizes MongoDB with Mongoose, a NoSQL database. All the
          information regarding the campground models, along with the user
          information is stored in my own database I created which I can access
          at any time. When the Data is sent to the database, it is assigned a
          unique ID which is placed in the model object. Each object has
          specific properties, which was defined on the model’s files, which was
          in turn later accessed via the route’s files.
        </p>
        <br />
        <br />
        <p>
          The user information was not only stored in the database, but was also
          stored in the cookies, which is how the app determines who can access
          certain CRUD functionality, and for what items, such as campgrounds
          and reviews.
        </p>

        <h4>Security</h4>
        <p>
          There are packages that were downloaded to the app which assist with
          Security. These packages were Passport, Joi, Helmet, and
          Sanitize-HTML. These assisted with not allowing brute force attacks on
          login, as well as preventing harmful code injections on any place
          where text could be inputted.
        </p>
        <h4>The Challenges I faced with this project</h4>
        <p>
          This project was very involved. It took a great deal of OOP along with
          organizational skills to keep the code manageable. Often, I would find
          my files becoming too long, and having to refactor the code, pull
          parts of it, make a new file, and place that code there. In turn this
          would break my app, I would then have to de-bug to figure where the
          issues were, and if I could keep my code refactored in this way.
        </p>
        <br />
        <br />
        <p>
          Also, since this project stems from a bootcamp which was made 2+ years
          ago, a lot of the packages and frameworks went through updates and no
          longer worked with the syntax from the bootcamp. I found myself
          reading lots of docs, going on stack overflow, and attempting
          different code. Trial and Error were the name of the game. Either way,
          I learn what it takes overcome the hurdles of developing an app and
          was able to work within the full spectrum of a Full Stack Dev
          skillset.
        </p>

        {props3.children}
      </div>
    </div>
  ) : (
    ""
  );
};

export default PopupP3;
