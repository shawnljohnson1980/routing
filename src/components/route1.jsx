import React from 'react'
import { navigate } from '@reach/router'


const One = () => {
    const two = e => {
        navigate("/route2")
    }
    const three = e => {
        navigate("/route3")
    }
    const four = e => {
        navigate("/route4")
    }
    return (
        <div className="wrapper">
            <div className="navabr navbar-dark">
                <button className="btn btn-info border border-rounded shadow mt-3" value="Two" onClick={two}>Second Page</button>
                <button className="btn btn-info border border-rounded shadow mt-3" value="Three" onClick={three}>Thrid Page Page</button>
                <button className="btn btn-info border border-rounded shadow mt-3" value="Two" onClick={four}>Fourth Page</button>
            </div>
            <div className="row mt-5">
                <div className="col">
                    <h1>I am route one</h1>
                </div>
            </div>
        </div >
    )
}
export default One;