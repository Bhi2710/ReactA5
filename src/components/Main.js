import React from 'react';

const Main = (props) => {
    return(
        <div className="Main">
          <div className="MovieContainer">
            <div className="LeftContainer">
              <div className="Tittle">
                <div className="Tittle_image">
                  <img src={props.movie_img} alt="" />
                </div>
                <div className="Tittle_text">
                  <span>{props.movie_name}</span>
                  <p>{props.year}, {props.Director}</p>
                  <div className="Tittle_text_time">
                    <input type="submit" value={props.time} />
                    <span>{props.type}</span>
                  </div>
                </div>
              </div>
              <div className="middle">
                <p>{props.description}</p>
              </div>
              <div className="footer">
                <img src={props.icon_share} alt="share" />
                <img src={props.icon_heart} alt="share" />
                <img src={props.icon_sms} alt="share" />
              </div>
            </div>
            <div className="RightContainer">
              <img src={props.movie_img} alt="" /> 
            </div>
          </div>
        </div>
    )
}
export default Main;