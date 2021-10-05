import React, { Component } from 'react'
import spin from './spin.gif'
import './Spinner.css'
export default class Spinner extends Component {
    render() {
        return (
            <div className="cen">
                <img className="spinner" src={spin} alt="Not Avaliable"/>
            </div>
        )
    }
}
