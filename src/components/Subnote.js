import React from 'react'
import '../styles/subnote.css'
import PC from '../img/pcs.png'

function Subnote() {
    return (
        <div>
            <section className="sub">
                <div className="sub_container">
                    <div className="left">
                        <p>A web designer, developer and User <br /> Interface Designer,
                    who bases his <br /> work on <span className="one">minimalism</span> and yet <span className="two">creative</span> <br /> and
                    interesting User Interface. <br /> Based in Abuja, Nigeria.</p>
                    </div>
                    <div className="right">
                        <img src={PC} alt="https://illlustrations.co/" />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Subnote