import React from 'react';
import styles from './projects.module.scss';
import Project from '../../components/project';

const Projectspage = () => {
    return (
      <div className={styles.Projects}>
        <h1>Somethings I've built</h1>
        <section>
            <Project title='Dizcuzzion' repoUrl="https://" siteUrl="https://" stack={['Algolia', 'PHP', 'Wordpress']}>
                Building a custom multisite compatible WordPress plugin to build
                global search with Algolia
            </Project>
            <Project title='Dizcuzzion' repoUrl="https://" siteUrl="https://" stack={['Algolia', 'PHP', 'Wordpress']}>
                Building a custom multisite compatible WordPress plugin to build
                global search with Algolia
            </Project>
            <Project title='Dizcuzzion' repoUrl="https://" siteUrl="https://" stack={['Algolia', 'PHP', 'Wordpress']}>
                Building a custom multisite compatible WordPress plugin to build
                global search with Algolia
            </Project>
            <Project title='Dizcuzzion' repoUrl="https://" siteUrl="https://" stack={['Algolia', 'PHP', 'Wordpress']}>
                Building a custom multisite compatible WordPress plugin to build
                global search with Algolia
            </Project>
            <Project title='Dizcuzzion' repoUrl="https://" siteUrl="https://" stack={['Algolia', 'PHP', 'Wordpress']}>
                Building a custom multisite compatible WordPress plugin to build
                global search with Algolia
            </Project>
            <Project title='Dizcuzzion' repoUrl="https://" siteUrl="https://" stack={['Algolia', 'PHP', 'Wordpress']}>
                Building a custom multisite compatible WordPress plugin to build
                global search with Algolia
            </Project>
        </section>
      </div>
    );
}

export default Projectspage;