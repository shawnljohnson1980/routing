import React from 'react'
import { navigate } from '@reach/router'


const Four = () => {
    const one = e => {
        navigate("/")
    }
    const two = e => {
        navigate("/route2")
    }
    const three = e => {
        navigate("/route3")
    }
    return (
        <div className="wrapper">
            <div className="navabr navbar-dark">
                <button className="btn btn-info border border-rounded shadow mt-3" value="Two" onClick={one}>Home Page</button>
                <button className="btn btn-info border border-rounded shadow mt-3" value="Three" onClick={two}>Second Page</button>
                <button className="btn btn-info border border-rounded shadow mt-3" value="Two" onClick={three}>Third Page</button>
            </div>
            <div className="row mt-5">
                <div className="col">
                    <h1>I am route Four</h1>
                </div>
            </div>
        </div >
    )
}
export default Four;