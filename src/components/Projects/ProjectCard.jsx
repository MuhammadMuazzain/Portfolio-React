import React from 'react';
import styles from './ProjectCard.module.css';

const ProjectCard = ({ project, id }) => {
  return (
    <div key={id} className={styles.container}>
      <img src={`../../../assets/${project.imageSrc}`} alt={project.title} />
      <h3 className={styles.title}>{project.title}</h3>
      <p className={styles.description}>{project.description}</p>
      <ul className={styles.skills}>
        {project.skills.map((skill, skillId) => {
          return <li key={skillId}>{skill}</li>;
        })}
      </ul>
      <div className={styles.links}>
        <a href={project.demo} className={styles.link}>Demo</a>
        <a href={project.source} className={styles.link}>GitHub</a>
      </div>
    </div>
  );
};

export default ProjectCard;
