import React from 'react'
import './Skills.scss'
import Robotscene from '../../three/models/Robotscene'
import skillbar_data from './skillbar_data'
const Skills = () => {

    const SkillBars = () => {
        const elements = skillbar_data.map((item,index) => {
            return (
                <div  key={index}   className={'skill_box item_skill_' + item.name}>
                    <div className="skill_name">{item.name}</div>
                    <div  className="skill">
                        <div className="skill_progress" style={{width: item.progress * 20 +'%'}}></div>
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