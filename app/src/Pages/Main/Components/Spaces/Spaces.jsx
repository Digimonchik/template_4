import React from "react";
import Dots from "./Dots";

const Spaces = () => {
  return (
    <div className="spaces__container ">
      <Dots color="blue"></Dots>
      <Dots color="yellow"></Dots>
      <div className="spaces__header">Spaces</div>
      <div className="spaces__cards">
        <div className="spaces__card">
          <div className="spaces__card_header">Office Space</div>
          <div className="spaces__card_description">
            Your own private office with a flexible contract that adapts to your
            business.
          </div>
          <ul className="spaces__card_dots">
            <li className="spaces__card_dot yellow">Access 24/7</li>
            <li className="spaces__card_dot yellow">
              Fully furnished or just the space
            </li>
            <li className="spaces__card_dot yellow">
              Includes all the perks of a Coworking Membership
            </li>
          </ul>
          <div className="spaces__card_button">Learn More →</div>
        </div>

        <div className="spaces__card">
          <div className="spaces__card_header">Membership</div>
          <div className="spaces__card_description">
            Work at any of our +3000 coworking spaces worldwide
          </div>
          <ul className="spaces__card_dots">
            <li className="spaces__card_dot blue">
              Access during business hours
            </li>
            <li className="spaces__card_dot blue">
              Access to our agenda of networking events
            </li>
            <li className="spaces__card_dot blue">
              Join a community of like-minded professionals
            </li>
          </ul>
          <div className="spaces__card_button blue">Learn More →</div>
        </div>
        <div className="spaces__card">
          <div className="spaces__card_header">Private Desk</div>
          <div className="spaces__card_description">
            Your own private desk in a shared office, locker included, all with
            a flexible contract.
          </div>
          <ul className="spaces__card_dots">
            <li className="spaces__card_dot yellow">Access 24/7</li>
            <li className="spaces__card_dot yellow">
              Set your business address at qSpace
            </li>
            <li className="spaces__card_dot yellow">
              Free access to 1000+ coworking spaces worldwide
            </li>
          </ul>
          <div className="spaces__card_button yellow">Learn More →</div>
        </div>
        <div className="spaces__card">
          <div className="spaces__card_header">Meeting Room</div>
          <div className="spaces__card_description">
            On-demand meeting rooms and event spaces with all the services you
            need.
          </div>
          <ul className="spaces__card_dots">
            <li className="spaces__card_dot blue">
              Choose from variety of sizes and locations
            </li>
            <li className="spaces__card_dot blue">Discounts for members</li>
            <li className="spaces__card_dot blue">
              Catering and other services available
            </li>
          </ul>
          <div className="spaces__card_button blue ">Find a room →</div>
        </div>
      </div>
    </div>
  );
};

export default Spaces;
