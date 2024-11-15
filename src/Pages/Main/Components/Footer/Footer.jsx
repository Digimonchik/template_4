import React from "react";

const Footer = () => {
  return (
    <div className="footer__container">
      <div className="logo__container">
        <div className="logo__image">qSpace</div>
        <div className="logo__description">
          Revolutioning the way people and company works
        </div>
        <div className="logo__links_container">
          <div className="logo__links_link facebook"></div>
          <div className="logo__links_link instagram"></div>
          <div className="logo__links_link youtube"></div>
          <div className="logo__links_link twitter "></div>
          <div className="logo__links_link linkdin"></div>
        </div>
      </div>
      <div className="navigation__container">
        <ul className="navigation__group">
          <li className="navigation__header">Quick links</li>
          <li className="navigation__link">Home</li>
          <li className="navigation__link">Facilities</li>
          <li className="navigation__link">Spaces</li>
          <li className="navigation__link">Community</li>
          <li className="navigation__link">Contact</li>
        </ul>
        <ul className="navigation__group">
          <li className="navigation__header">Community</li>
          <li className="navigation__link">Events</li>
          <li className="navigation__link">Upcoming</li>
          <li className="navigation__link">Artickles</li>
          <li className="navigation__link">Magazine</li>
        </ul>
        <ul className="navigation__group mail">
          <li className="navigation__header">Subscribe to our newsletter</li>
          <li>email adress</li>
        </ul>
      </div>
      <div className="footer__bottom">©2021 qSpace. All rights reserved</div>
    </div>
  );
};

export default Footer;
