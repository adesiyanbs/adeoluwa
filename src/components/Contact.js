import React from 'react'
import '../styles/contact.css'
import git from '../img/git.png'
import twitter from '../img/twitter.png'


function Contact() {
    return (
        <div>
            <section className="cnt">
                <div className="cnt_container">
                    <div className="cnt_text">
                        <h1>Let's <span className="work">Work</span></h1>
                        <p>I'm currently open to any freelancing work available,
                        to get in touch send a mail and we'll begin work!
                    </p>
                    </div>
                    <div className="socials">
                        <a href="https://github.com/adesiyanbs"><img src={git} alt="github profile"/></a> &nbsp;
                        <a href="https://twitter.com/commodore_ade"><img src={twitter} alt=" twitter account"/></a>
                    </div>
                    <a className="hello" href="mailto:minneade@gmail.com">Mail me!</a>
                </div>
            </section>
            <section className="footer">
                <div className="foot-cnt">
                    <h4>Copyright 2021 by Ade</h4>
                </div>
            </section>
        </div>
    )
}

export default Contact
