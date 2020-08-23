import React, { Component } from 'react'
import './Animation.css'

export default class Animation extends Component {
    render() {
        return (
            <>
            <div className="img-1">
                <div className="con-translate">
                    <div className="square-3"></div>
                </div>
            </div>
            <div>
                <div className="img-2">
                    <div className="square-1"></div>
                </div>
            </div>
            <div className="img-3">
                <div className="square-2"></div>
            </div>
</>
        )
    }
}
