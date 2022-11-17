import React from 'react'
import './Greetings.scss'

const Greetings = () => {

    return (
        <section className="wrapper">
            <header className="main-header">
                <div className="layers">
                    <div className="layer__header" data-scroll  data-scroll-speed="-7">
                        <div className="layer__caption" >David Lichenko</div>
                        <div className="layer__tittle">Web Designer, Developer</div>
                    </div>
                    <div className="layer layer__base" data-scroll data-scroll-speed="-7"></div>
                    <div className="layer layer__middle"></div>
                </div>
            </header>
        </section>
    )
}

export default Greetings