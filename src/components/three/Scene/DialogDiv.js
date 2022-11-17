import React, {useRef, useState} from 'react'
import TypeWriter from "../../utils/typeWritter/TypeWritter";

import './DialogDiv.scss'
import dialog_icon from '../../../../src/assets/png/icons/msg.svg';
let indexText = 0;
const DialogDiv = () => {

    const dialogRef = useRef()
    const msg = [
        {
            text: "  Hi, my name is David Lichenko.\n\nI have big peepee and\n\nI write realy beautiful codes."
        },
        {
            text: " I’m a profesional in Java Script and\n\nloving Tonya, Mykolka and Stepashka.\n\nAlso I can study everything too fast,\n\n so you have to give me really cool tasks."
        },
        {
            text: " Otherwise I will leave you like\n\nI’ve left fuckers from Taburetka."
        },
    ]
    const [text,setText] = useState(msg[0].text)
    return (
        <div className="dialog__container "
             onClick={(e) => {
                 indexText += 1;
                 indexText = indexText % msg.length;
                 setText(msg[indexText].text)
             }}>
            <span className="border__both"></span>
            <div className="dialog__content">
                <div className="dialog__border__top">
                    <div className="speaker__name">
                        B-12
                    </div>
                    <img src={dialog_icon} alt="dialog_icon"/>
                </div>
                <div ref={dialogRef} className="speaker__text">
                    <TypeWriter text={text}/>
                </div>
            </div>
        </div>

    )
}

export default DialogDiv