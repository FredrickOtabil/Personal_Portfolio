import projectDetailsData from './data.js';

const projectWrapper = document.querySelector('.card-wrapper');
const projectContainer = document.createElement('div');

const projectDetails = (project) => {
  const { name, techStack } = project;
  const projectCard = document.createElement('article');
  projectCard.classList.add('card');
  projectCard.innerHTML = `
     <section class='content'>
       <h4 class='title'>${name}</h4>
       <ul>
         ${techStack.map((tech) => `<li>${tech}</li>`).join('')}
       </ul>
       <button class='show-project-btn'>See Project</button>
     </section>
 `;
  projectContainer.appendChild(projectCard);
  projectContainer.classList.add('card-container');
};

projectDetailsData?.map((project) => projectDetails(project));

projectWrapper?.appendChild(projectContainer);
