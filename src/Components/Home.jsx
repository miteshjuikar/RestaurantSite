import React from "react";
import { Link } from "react-router-dom"

export default function Home( {handleChange} ) {
    return(
        <div className="mainDiv">
            <div className="welcome">
                <h2>Welcome To Restaurant</h2>
                <div>
                    <p>People eat with their eyes and we creates an easy way for </p>
                    <p>customers to order when they can see beautiful photos of your food</p>
                </div>
            </div>
            <div className="buttons">
                {/* <a href="/about">About</a>
                <a href="/menu">Menu</a>           */}
                <div className="buttonDiv" onClick={() => handleChange('about')} >About</div>
                <div className="buttonDiv" onClick={() => handleChange('menu')}>Menu</div>
            </div>
        </div>
    )
}


