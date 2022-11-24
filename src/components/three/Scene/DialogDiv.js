import React, {useRef, useState} from 'react'
import TypeWriter from "../../utils/typeWritter/TypeWritter";


import './DialogDiv.scss'
import dialog_icon from '../../../../src/assets/png/icons/msg.svg';
let indexText = 0;
const DialogDiv = (props) => {
    const dialogRef = useRef()
    const msg = [
        {
            name: "Unknown",
            text: "  Hi, my name is B-12."
        },
        {
            name: "B-12",
            text: "  I don't know where I am, but I know who place me here. The guy whose name is David."
        },
        {
            name: "B-12",
            text: "  I know that he's frontend/developer and he's able to do such things as he did to me."
        },
        {
            name: "B-12",
            text: "  WOW!"
        },
        {
            name: "B-12",
            text: "  Sorry...It was unexpected..."
        },
        {
            name: "B-12",
            text: "  So I know that he can make really good websites and he's passionate with coding"
        },
        {
            name: "B-12",
            text: "  Please find this guy and help me to get out of here!"
        },
    ]
    const [text,setText] = useState(msg[0].text)
    return (
        <div className="dialog__container "
             onClick={(e) =>
             {
                 indexText += 1;
                 if (indexText >= msg.length) return null
                 indexText = indexText % msg.length;
                 setText(msg[indexText].text)
                 props.Count(indexText)

             }
             }
        >
            <span className="border__both"></span>
            <div className="dialog__content">
                <div className="dialog__border__top">
                    <div className="speaker__name">
                        { msg[indexText].name }
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