import React, { Component } from "react";
import "./TopNav.css";

export default class TopNav extends Component {
  render() {
    return (
      <div className="TopNav-main">
        <div className="TopNav-icons">
          <i className="fa-brands fa-dribbble"></i>
          <i className="fa-brands fa-facebook-f"></i>
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-pinterest-p"></i>
        </div>
        <div className="TopNav-secondPart">
          <div  style={{display:'flex',marginRight:'70px'}}  className="TopNav-ADDRESS">
            <div>
              <i class="fa-sharp fa-solid fa-location-dot"></i>
            </div>
            <div>
              <a>203 Madison Ave, NY, USA</a>
              <strong>
                <p>ADDRESS</p>
              </strong>
            </div>
          </div>
          <div style={{display:'flex',marginRight:'70px'}} className="TopNav-TIMEING">
            <div>
              <i class="fa-regular fa-clock"></i>
            </div>
            <div>
              <a>Monday - Friday 9am - 6pm</a>
              <strong>
                <p>TIMEING</p>
              </strong>
            </div>
          </div>
          <div style={{display:'flex',marginRight:'100px'}} className="TopNav-MAIL TO US">
            <div>
              <i class="fa-regular fa-envelope"></i>
            </div>
            <div>
              <a>envato@gmail.com</a>
              <strong>
                <p>TIMEING</p>
              </strong>
            </div>
          </div>
          <div style={{marginRight:'70px'}} className="TopNav-CUBE">
            <i class="fa-solid fa-bars" style={{ color: "orangered" }}></i>
          </div>
        </div>
      </div>
    );
  }
}
