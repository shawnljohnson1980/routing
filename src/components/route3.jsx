import React from 'react'
import { navigate } from '@reach/router'


const Three = () => {
    const one = e => {
        navigate("/")
    }
    const two = e => {
        navigate("/route2")
    }
    const four = e => {
        navigate("/route4")
    }
    return (
        <div className="wrapper">
            <div className="navabr navbar-dark">
                <button className="btn btn-info border border-rounded shadow mt-3" value="Two" onClick={one}>Home Page</button>
                <button className="btn btn-info border border-rounded shadow mt-3" value="Three" onClick={two}>Second Page Page</button>
                <button className="btn btn-info border border-rounded shadow mt-3" value="Two" onClick={four}>Fourth Page</button>
            </div>
            <div className="row mt-5">
                <div className="col">
                    <h1>I am route Three</h1>
                </div>
            </div>
        </div >
    )
}
export default Three;