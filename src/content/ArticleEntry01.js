import React from "react";

import Hotdog from "../image/Hotdog.jpg"

import './ArticleEntry.css'

function ArticleEntry01(props)
{
    return (
        <div>
            <img className="mainpic" src={Hotdog} alt="Hotdog_pic" />
            <h3>{props.data.title}</h3>
            <h3>{props.data.summary}</h3>
            <h6>{props.data.date}</h6>
            <p>New York City is filled with varieties of street foods, but none are more familiar than a hot dog. And regardless of their relentless business aspiration and questionable pricing, I'm sure we can all agree that there are some yearnings for it now in search of a small bit of normalcy.</p>         
        </div>
    )
    
       
}

export default ArticleEntry01;