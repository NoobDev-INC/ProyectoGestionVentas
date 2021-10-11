import React from 'react'
import 'styles/Landingpage.css'
export default function Index() {

    return (
        <div className="landing-container">
            <div className="landing-container-left">
                <div className="landing-left">
                    <div className="landing-text" >
                        <h1>Your package, your rule</h1>
                        <h5></h5>
                    </div>

                </div>
                <div className="landing-skew-left">
                </div>
            </div>
            <div className="landig-right">
                <img src="/landing.jpg"></img>

            </div>
        </div>
    )
}
