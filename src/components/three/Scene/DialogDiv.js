import React, {useRef, useState} from 'react'

import './DialogDiv.scss'
import dialog_icon from '../../../../src/assets/png/icons/msg.svg';
const DialogDiv = () => {
    return (
        <div className="dialog__container "
             onClick={(e) => {
                 console.log(e)
             }}>
            <span className="border__both"></span>
            <div className="dialog__content">
                <div className="dialog__border__top">
                    <div className="speaker__name">
                        B-12
                    </div>
                    <img src={dialog_icon} alt="dialog_icon"/>
                </div>
                <div className="speaker__text" style={{ pointerEvents: 'auto' }}>
                    Hi, my name is David Lichenko.
                    I have big peepee and
                    I write realy beautiful codes.
                    I’m a profesional in Java Script and
                    loving Tonya, Mykolka and Stepashka.
                </div>
            </div>
        </div>

    )
}

export default DialogDiv