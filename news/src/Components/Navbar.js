import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
export default class Navbar extends Component {
    render() {
        return (
            <div>
                <nav>
                    <ul style={this.props.design}>
                        <li><Link style={this.props.design} className="navigate" to="/home">HOME</Link></li>
                        <li><Link style={this.props.design} className="navigate" to="/bus">Business</Link></li>
                        <li><Link style={this.props.design} className="navigate" to="/ent">Entertainment</Link></li>
                        <li><Link style={this.props.design} className="navigate" to="/hea">Health</Link></li>
                        <li><Link style={this.props.design} className="navigate" to="/sci">Science</Link></li>
                        <li><Link style={this.props.design} className="navigate" to="/spo">Sports</Link></li>
                        <li><Link style={this.props.design} className="navigate" to="/tech">Technology</Link></li>
                        <label htmlFor="dark" style={this.props.design}>
                            <input type="checkbox" onClick={this.props.mode} id="dark" /> ACTIVE DARK MODE
                        </label>
                    </ul>
                </nav>
            </div>
        )
    }
}