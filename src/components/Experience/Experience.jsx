import React from 'react'
// import styles from './Experience.module.css'
import skills from '../../data/skills.json'


const Experience = () => {
  return (
    <section id='experience'>
        <h2>Experience</h2>
        <div>
            <div>
                {
                skills.map((skill,id)=>{
                    return <div key={id}>
                        <div>
                            <img src=
                            {`../../../assets/skills/${skill.imageSrc}`}
                            // {`/skills/${skill.imageSrc}`} 
                            alt={skill.title}></img>
                            </div>
                    </div>
                })}
            </div>
            <ul></ul>
        </div>
    </section>
  )
}

export default Experience