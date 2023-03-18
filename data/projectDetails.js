/* eslint-disable indent */
import projectDetailsData from './data.js';

const projectsWrapper = document.querySelector('.project-details-wrapper');
const projects = document.querySelector('.project-container');
const showProjectsBtn = document.querySelectorAll('.show-project-btn');

function ShowSingleProjectModal() {
  projectsWrapper.style = 'visibility: visible';
}

const showProjectDetails = (project) => {
  // eslint-disable-next-line object-curly-newline
  const { name, techStack, description, image, url, github } = project;
  const projectCard = document.createElement('article');
  projectCard.classList.add('project-card');
  projectCard.innerHTML = `
        <div class="project-image">
          <img src="${image}" alt="${name}"/>
        </div>
        <section class="project-details">
          <h2>${name}</h2>
          <div class="tech-stack">
            <ul>
              ${techStack.map((tech) => `<li>${tech}</li>`).join('')}
            </ul>
          </div>
          <div class="project-desc">${description}</div>
          <div class="project-links">
            <a href="${url}" target="_blank" rel="noopener noreferrer">See Live</a>
            <a href="${github}" target="_blank" rel="noopener noreferrer">Source code 
            <img src="../assets/images/others/Github.gif" alt="github" width="30" height="30" style="background: #fff; border-radius: 50%"/></a>
        </div>
        </section>
    `;
  return projects.appendChild(projectCard);
};

showProjectsBtn.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    ShowSingleProjectModal(index);
    const data = projectDetailsData[index];
    showProjectDetails(data);
  });
});

const closeModal = document.getElementById('close-modal');
const projectImages = document.querySelectorAll('.project-image');
const projectDetails = document.querySelectorAll('.project-details');
const projectLinks = document.querySelectorAll('.project-links');

projectImages.forEach((image) => {
  image.addEventListener('click', () => {
    image.classList.toggle('show');
    projectDetails.classList.toggle('show');
    projectLinks.classList.toggle('show');
  });
});

function CloseModal() {
  projectsWrapper.style = 'visibility: hidden';
  projects.innerHTML = '';
}

closeModal?.addEventListener('click', CloseModal);

if (window) {
  window.addEventListener('click', (e) => {
    if (e.target === projectsWrapper) {
      CloseModal();
    }
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      CloseModal();
    }
  });
}
