import React from 'react'
import { navigate } from '@reach/router'


const Two = () => {
    const one = e => {
        navigate("/")
    }
    const three = () => {
        navigate("/route3")
    }
    const four = () => {
        navigate("/route4")
    }
    return (
        <div className="wrapper">
            <div className="navabr navbar-dark">
                <button className="btn btn-info border border-rounded shadow mt-3" value="Two" onClick={one}>Home Page</button>
                <button className="btn btn-info border border-rounded shadow mt-3" value="Three" onClick={three}>Thrid Page Page</button>
                <button className="btn btn-info border border-rounded shadow mt-3" value="Two" onClick={four}>Fourth Page</button>
            </div>
            <div className="row mt-5">
                <div className="col">
                    <h1>I am route Two</h1>
                </div>
            </div>
        </div >
    )
}
export default Two;