import React from 'react';
import SectionTitle from './SectionTitle';
import SectionText from './SectionText';
import Skills from './Skills';
import Contact from './Contact';
import ProjectTitle from './ProjectTitle';
import './App.css';
import store from './store.js'


function App() {

  return (
    <div className="App">
      <div className="cv-pdf">
        <main className="grid-template">
          <div className="contact">
             <Contact items={store.contactArr} />
          </div>
          <div className="col-one">
            <section>
              {/*<SectionTitle title="Alexandra Brinn Campbell"/>*/}
              <ProjectTitle title="Alexandra Brinn Campbell"/>
              <SectionText text={store.about}/>
            </section>
            <section>
              <SectionTitle title="Dev"/>
              <Skills skills={store.devSkills} />
            </section>
            <section>
              <SectionTitle title="UX & UI"/>
              <Skills skills={store.designSkills} />
            </section>
          </div>
          <div className="col-two">
            <section>
              <SectionTitle title="Projects"/>
              {store.projects.map(project => {
                return (<div className="project">
                  <ProjectTitle title={project.title} link={project.link}/>
                  <SectionText text={project.text}/>
                </div>)
              })}
            </section>
            <section>
              <SectionTitle title="Education"/>

            </section>
            <section>
              <SectionTitle title="Experience"/>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
