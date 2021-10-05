import React, { Component } from 'react'
import './Newsitem.css'
export default class Newsitem extends Component {
    a=this.props.publishedAt
    render() {
        return (
            <div className="card" style={this.props.design}>
                <img src={this.props.url} alt="Unable To Load"/>
                <h4>{this.props.title}</h4>
                <p>{this.props.desc}</p>
                <small>By {this.props.author==null?"Unknown":this.props.author} on {new Date(this.a).toGMTString()}</small>
                <br /><a className="read" href={this.props.newsurl}>Read More</a>
            </div>
        )
    }
}