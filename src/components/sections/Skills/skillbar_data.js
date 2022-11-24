const filledSkills = (count) => {
    const parent = document.createElement("div")
    parent.innerHTML = `<div class="skill_box_rating filled"></div>`.repeat(count)
    parent.innerHTML += `<div class="skill_box_rating"></div>`.repeat( 5 - count)
    return <div className="skill_progress_boxes" dangerouslySetInnerHTML={{ __html: parent.innerHTML }}></div>
}
const skillbar_data = [
    {
        name:'JavaScript',
        progress:5,
        exp: '2 years',
        parentSkill: filledSkills(5)
    },
    {
        name:'React',
        progress:3,
        exp: '7 month',
        parentSkill: filledSkills(3)
    },
    {
        name:'ThreeJS/Fiber Three',
        progress:4,
        exp: '1.5 years',
        parentSkill: filledSkills(4)
    },
    {
        name:'Blender',
        progress:2,
        exp: '1 year',
        parentSkill: filledSkills(2)

    }
]
export default skillbar_data