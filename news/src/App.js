import './App.css';
import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
export default class App extends Component 
{
  constructor()
  {
    super();
    this.state=
    {
      design:{backgroundColor:"white",
              color:"black"},
              progress:0
    };
  }
  mode=()=>
    {
        if(this.state.design.backgroundColor==="white")
        {
            this.setState({design:{backgroundColor:"rgb(65, 64, 64)",
                            color:"rgba(245, 245, 245, 0.815)"}})
        }
        else
        {
            this.setState({design:{backgroundColor:"white",
                            color:"black"}})
        }
    }
    prog=(p)=>{
        this.setState({progress:p})
    }
  render()
   {
    return (
      <div>
        <Router>
        <LoadingBar
        height='3px'
        color='#f11946'
        progress={this.state.progress}/>
          <Navbar prog={this.prog} mode={this.mode} design={this.state.design}/>
          <Switch>
            <Route path="/home">
              <News prog={this.prog} design={this.state.design} key="general" pagesize="6" country="in" category="general"/>
              </Route>
            <Route path="/bus">
              <News prog={this.prog} design={this.state.design} key="business" pagesize="6" country="in" category="business"/>
              </Route>
            <Route path="/ent">
              <News prog={this.prog} design={this.state.design} key="entertainment" pagesize="6" country="in" category="entertainment"/>
              </Route>
            <Route path="/hea">
              <News prog={this.prog} design={this.state.design} key="health" pagesize="6" country="in" category="health"/>
              </Route>
            <Route path="/sci">
              <News prog={this.prog} design={this.state.design} key="science" pagesize="6" country="in" category="science"/>
              </Route>
            <Route path="/spo">
              <News prog={this.prog} design={this.state.design} key="sports" pagesize="6" country="in" category="sports"/>
              </Route>
            <Route path="/tech">
              <News prog={this.prog} design={this.state.design} key="technology" pagesize="6" country="in" category="technology"/>
              </Route>
          </Switch>
        </Router>
      </div>
    )
  }
}