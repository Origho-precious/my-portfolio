import React from 'react';
import styles from './resume.module.scss';
import resume from '../../assets/Resume.docx';
import Experiences from '../../components/experiences';
import Education from '../../components/education';

const Resume = () => {
    return (
      <div className={styles.Resume}>
        <section className={styles.intro}>
          <header>
            <h1>Overview</h1>
            <a href={resume} download>
              Download Resume
            </a>
          </header>
          <p>
            Hello! I'm Origho Precious, a Frontend developer based in
            Portharcourt, Rivers State, Nigeria. I enjoy creating the frontend
            of things that live on the internet, whether that be websites,
            applications, or anything in between. I keep learning new frontend
            technologies to improve my skillset and build more pixel-perfect,
            and performant web apps.
          </p>
          <p>Here are a few technologies I work with:</p>
          <ul>
            <li>
              <i className="fas fa-play"></i> <p>HTML & CSS(Sass)</p>
            </li>
            <li>
              <i className="fas fa-play"></i>
              <p>Bootstrap</p>
            </li>
            <li>
              <i className="fas fa-play"></i>
              <p>Javascript</p>
            </li>
            <li>
              <i className="fas fa-play"></i>
              <p>Reactjs and Redux</p>
            </li>
            <li>
              <i className="fas fa-play"></i>
              <p>Firebase</p>
            </li>
            <li>
              <i className="fas fa-play"></i>
              <p>Nextjs</p>
            </li>
            <li>
              <i className="fas fa-play"></i>
              <p>Jest & Enzyme</p>
            </li>
            <li>
              <i className="fas fa-play"></i>
              <p>Apollo Client</p>
            </li>
          </ul>
        </section>
        <section className={styles.experiences}>
            <h1>Experiences</h1>
            <Experiences/>
        </section>
        <section className={styles.education}>
            <h1>Education</h1>
            <Education/>
        </section>
      </div>
    );
};

export default Resume;