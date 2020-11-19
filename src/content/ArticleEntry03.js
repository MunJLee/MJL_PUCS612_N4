import React from "react";

import KobeBeef from "../image/KobeBeef.jpg"

import './ArticleEntry.css'

function ArticleEntry03(props)
{
    return (
        <div>
            <img className="mainpic" src={KobeBeef} alt="KobeBeef_pic" />
            <h3>{props.data.title}</h3>
            <h3>{props.data.summary}</h3>
            <h6>{props.data.date}</h6>
            <p>Kobe beef is a famous japanese brand of beef - kinda like the angus beef. It is rich in flavor due to its high fat content. High quality kobe beef comes with price to match it. You even get a nifty certification of quality when you do manage to buy it!</p> 
        </div>
    )
    
       
}

export default ArticleEntry03;