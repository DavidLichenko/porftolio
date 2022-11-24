import React, { useRef, useEffect } from 'react'
import './Skills.scss'
import Robotscene from '../../three/models/Robotscene'
import skillbar_data from './skillbar_data'
const Skills = () => {
    const SkillBars = () => {
        // const Rating = (cnt) => {
        //     const parentRef = useRef()
        //     console.log(parentRef)
            // const parent = parentRef.current
            // const child = document.createElement("div");
            // let dataChildren = [];
            // let countChildren = 5;
            // // parent.className = "skill_progress_boxes"
            // child.className = "skill_box_rating"
            //
            // parent.innerHTML = '<div class="skill_box_rating filled"></div>'.repeat(cnt);
            // // if(cnt < countChildren) {
            // //
            // // }
            // // while (countFillChildren < cnt) {
            // //     child.className = "skill_box_rating filled"
            // //     dataChildren.push(child)
            // //     countFillChildren++
            // // }
            // // while (dataChildren.length !== 5) {
            // //     dataChildren.push(child)
            // // }
            // // if (countFillChildren < 5) {
            // //     dataChildren.push(child)
            // //     child.className = "skill_box_rating"
            // //     countFillChildren++
            // // }
            // console.log(parent)
            // return (
            //     <div ref={parentRef} className="skill_progress_boxes"></div>
            // )
        // }
        const elements = skillbar_data.map((item,index) => {
            // Rating (item.progress)
            return (
                <div  key={index}   className={'skill_container item_skill_' + item.name}>
                    <div className="skill_name">{item.name}</div>
                    <div className="skill">
                        <div  className="skill_progress">
                            { item.parentSkill }
                            <span className="skill_value">{ item.exp }</span>
                        </div>
                    </div>
                </div>

            )
        })
        return (
            elements
        )
    }


    return (
        <section className="skills__section">
            <div className="sills_leftSide">
                <Robotscene/>
            </div>
            <div className="section_right skills_rightSide">
                <SkillBars />
                {/*<div className="item_skill_JavaScript">*/}
                {/*    <div className="skill_name">JavaScript</div>*/}
                {/*    <div className="skill">asdasdasd</div>*/}
                {/*</div>*/}
                {/*<div className="item_skill_React">*/}
                {/*    <div className="skill_name">React</div>*/}
                {/*    <div className="skill">asdasdasd</div>*/}
                {/*</div>*/}
                {/*<div className="item_skill_Blender">*/}
                {/*    <div className="skill_name">Blender</div>*/}
                {/*    <div className="skill">asdasdasd</div>*/}
                {/*</div>*/}
                {/*<div className="item_skill_ThreeJS">*/}
                {/*    <div className="skill_name">ThreeJS/Fiber Three</div>*/}
                {/*    <div className="skill">asdasdsad</div>*/}
                {/*</div>*/}
            </div>
        </section>
    )
}

export default Skills