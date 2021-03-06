import React, { useState } from "react";
import { useSwipeable, Swipeable } from "react-swipeable";
import Project from "../components/Project";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/fontawesome";

const StyledIcon = styled(FontAwesomeIcon)`
  color: darkgray;
  background-color: black;
  width: 50px;
  cursor: pointer;
  border-radius: 50%;
  &:hover {
    box-shadow: 0px 0px 5px 5px rgba(0, 0, 0, 0.3);
  }
  @media only screen and (max-width: 600px) {
    /* width: 35px !important; */
    margin: 0 1em;
  }
`;

const projectsCarousel = ({ projects }) => {
  let [currentProject, setCurrentProject] = useState(0);
  let [grab, setGrab] = useState(false);

  const getProject = (direction) => {
    let nextProject = currentProject;
    if (direction === "left" && currentProject !== 0) {
      nextProject--;
      setCurrentProject(nextProject);
    }
    if (direction === "right" && currentProject !== projects.length - 1) {
      nextProject++;
      setCurrentProject(nextProject);
    }
  };

  const handlers = useSwipeable({
    onSwiping: () => setGrab(true),
    onSwiped: () => setGrab(false),
    onSwipedLeft: () => getProject("left"),
    onSwipedRight: () => getProject("right"),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <div className={grab ? "container mousedown" : "container"} {...handlers}>
      <div className='chevron-left' onClick={() => getProject("left")}>
        <StyledIcon icon={["fas", "chevron-circle-left"]} />
      </div>
      <div className='project'>
        {projects.map(
          (project, index) =>
            index === currentProject && (
              <Project project={project} key={index} />
            )
        )}
      </div>
      <div className='chevron-right' onClick={() => getProject("right")}>
        <StyledIcon icon={["fas", "chevron-circle-right"]} />
      </div>

      <style jsx>{`
        .container {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 2em;
          cursor: grab;
        }
        .mousedown {
          cursor: grabbing;
        }
        @media only screen and (max-width: 600px) {
          .container {
            flex-wrap: wrap;
            width: 75%;
          }
          .container .chevron-left {
            order: 1;
          }
          .container .chevron-right {
            order: 2;
          }
          .container .project {
            order: 3;
          }
        }
      `}</style>
    </div>
  );
};

export default projectsCarousel;
