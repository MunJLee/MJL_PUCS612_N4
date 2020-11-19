import React from "react";
import { Link } from 'react-router-dom';


class Navi extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            posts: [],
            isLoading: false
        }
    }

    componentDidMount()
    {
        this.tick = setInterval(() => {
            fetch('https://www.reddit.com/r/news/hot.json')
            .then(response => response.json())
            .then(data => this.setState({ posts: data.data.children, isReady: true }));
        }, 5000);
    }


    componentWillUnmount() 
    {
        clearInterval(this.tick);
    }


    render()
    {
        return(
            <div>
                <div>
                    <Link to="/"><h2>Home</h2></Link>
                </div>
                <div>
                    <h3>Reddit News Feeds</h3>
                    <ul>
                    {
                        this.state.posts.slice(0, 4).map((item) => {
                            return <li>{item.data.title}</li>
                        })

                    }                        
                    </ul>


                </div>
            </div>

        );
    }

}

export default Navi;