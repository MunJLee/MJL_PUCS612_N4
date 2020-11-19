import React from "react";
import { Route, Switch } from 'react-router-dom';

import entryData from '../content/articles.json'


import ArticleList from './ArticleList'
import ArticleEntry01 from '../content/ArticleEntry01'
import ArticleEntry02 from '../content/ArticleEntry02'
import ArticleEntry03 from '../content/ArticleEntry03'


const entries = entryData;


class Main extends React.Component
{
    
    render()
    {
        return (
            <Switch>
                <Route exact path="/"><ArticleList alldata={entries} /></Route>
                <Route path="/article_01"><ArticleEntry01 data={entries[0]} /></Route>
                <Route path="/article_02"><ArticleEntry02 data={entries[1]} /></Route>
                <Route path="/article_03"><ArticleEntry03 data={entries[2]} /></Route>
            </Switch>
        )

    }
}

export default Main;