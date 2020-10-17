import React, { Component } from 'react';
import styles from './experiences.module.scss';

class Experiences extends Component{
    state = {
        show: 0
    }

    renderContent = () => {
        const { show } = this.state;
        if(show === 0){
            return (
              <div className={styles.experience}>
                <header>
                  <h3>
                    Frontend developer <span>@IjatTechnologies</span>
                  </h3>
                  <p>February 2020 - Present</p>
                </header>
                <div className={styles.text}>
                  <ul>
                    <li>
                      <i className="fas fa-play"></i>
                      <p>
                        Writing modern, and performant code for client projects
                        and company projects
                      </p>
                    </li>
                    <li>
                      <i className="fas fa-play"></i>
                      <p>
                        Working with varieties of Languages, libraries,
                        platforms and frameworks e.g HTML, CSS(Sass), Bootstrap 4,
                        Javascript, Reactjs, Redux etc
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            );
        } else if (show === 1) {
            return (
              <div className={styles.experience}>
                <header>
                  <h3>Freelance Frontend developer</h3>
                  <p>July 2020 - Present</p>
                </header>
                <div className={styles.text}>
                  <ul>
                    <li>
                      <i className="fas fa-play"></i>
                      <p>
                        I'm a parttime freelancer and I also collaborate with my friends on side projects.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            );
        }
    }

    render() {
        const { show } = this.state;
        
        return (
          <div className={styles.Experience}>
            <nav className={styles.sidebar}>
              <div className={styles.line} />
              <div>
                <p
                  className={show === 0 ? styles.active : null}
                  onClick={() => this.setState({ show: 0 })}
                >
                  Ijat
                </p>
                <p
                  className={show === 1 ? styles.active : null}
                  onClick={() => this.setState({ show: 1 })}
                >
                  Freelancing
                </p>
              </div>
            </nav>
            <div className={styles.content}>{this.renderContent()}</div>
          </div>
        );
    };
};

export default Experiences;