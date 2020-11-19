import React from "react";

import Onigiri from "../image/Onigiri.jpeg"

import './ArticleEntry.css'

function ArticleEntry02(props)
{
    return (
        <div>
            <img className="mainpic" src={Onigiri} alt="Onigiri_pic" />
            <h3>{props.data.title}</h3>
            <h3>{props.data.summary}</h3>
            <h6>{props.data.date}</h6>
            <p>Onigiri is a japanese riceball, meant to be portable and eaten while in travel. It may look simple, but it has delicious garnishes inside! Also, have you you noticed that red stuff next to it? That's a sour fruit pickle called Umeboshi, whichi goes very well with onigiri.  </p>   
        </div>
    )
    
       
}

export default ArticleEntry02;