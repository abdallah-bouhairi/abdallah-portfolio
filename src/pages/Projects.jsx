import { useEffect, useMemo, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import SectionTitle from '../components/SectionTitle';
import ProjectCard from '../components/ProjectCard';

import {
  fetchProjects,
  setFilter,
} from '../redux/projectsSlice';


export default function Projects() {

  const dispatch = useDispatch();

  const {
    items,
    status,
    error,
    filter,
  } = useSelector((state) => state.projects);


  const [search, setSearch] = useState('');


  // Fetch projects from GitHub API
  useEffect(() => {

    if (status === 'idle') {
      dispatch(fetchProjects());
    }

  }, [status, dispatch]);


  // Filter and search projects
  const visible = useMemo(() => {

    return items.filter((project) => {

      const matchesFilter =
        filter === 'all' ||
        (project.language || '').toLowerCase() === filter;


      const matchesSearch =
        project.name
          .toLowerCase()
          .includes(search.toLowerCase());


      return matchesFilter && matchesSearch;

    });

  }, [items, filter, search]);


  return (
    <section className="projects-page section-shell">

      <SectionTitle
        title="My Projects"
        text="Projects loaded from the GitHub public API."
      />


      {/* =========================================
          PROJECT TOOLBAR
      ========================================= */}

      <div className="project-toolbar">

        <div className="project-tabs compact">

          <button
            type="button"
            className={filter === 'all' ? 'active' : ''}
            onClick={() => dispatch(setFilter('all'))}
          >
            All
          </button>


          <button
            type="button"
            className={
              filter === 'javascript'
                ? 'active'
                : ''
            }
            onClick={() =>
              dispatch(setFilter('javascript'))
            }
          >
            JavaScript
          </button>


          <button
            type="button"
            className={
              filter === 'react'
                ? 'active'
                : ''
            }
            onClick={() =>
              dispatch(setFilter('react'))
            }
          >
            React
          </button>

        </div>


        {/* Search */}

        <input
          type="search"
          value={search}
          onChange={(event) =>
            setSearch(event.target.value)
          }
          placeholder="Search projects..."
          aria-label="Search projects"
        />

      </div>


      {/* =========================================
          LOADING
      ========================================= */}

      {status === 'loading' && (
        <div className="state">
          Loading projects…
        </div>
      )}


      {/* =========================================
          ERROR
      ========================================= */}

      {status === 'failed' && (
        <div className="state">
          {error || 'Unable to load projects.'}
        </div>
      )}


      {/* =========================================
          PROJECTS
      ========================================= */}

      {status === 'succeeded' && (
        <div className="video-project-grid">

          {visible.length > 0 ? (

            visible.map((project, index) => (

              <ProjectCard
                key={project.id}
                project={project}
                image={`/assets/project-${(index % 3) + 1}.jpg`}
              />

            ))

          ) : (

            <div className="state">
              No projects found.
            </div>

          )}

        </div>
      )}

    </section>
  );
}
