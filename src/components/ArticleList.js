import React from "react";
import { Link } from 'react-router-dom';


class ArticleList extends React.Component
{
    render()
    {
        const listing = this.props.alldata.map(item =>
            <div key={item.id}>
                <img src={item.picture} alt="food_pics" />
                <Link to={item.detail}><h1>{item.title}</h1></Link>
                <h6>{item.date}</h6>
                <p>{item.summary}</p>
            </div>
            );

        return <div>{listing}</div>
               
    }

}

export default ArticleList;