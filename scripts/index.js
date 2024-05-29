import { Repository } from './repository.js';

const repo = new Repository();

function createActivityCard(activity) {
  const { title, description, imgUrl } = activity;
  
  const titleElement = document.createElement('h3');
  titleElement.innerHTML = title;

  const descriptionElement = document.createElement('p');
  descriptionElement.innerHTML = description;

  const imageElement = document.createElement('img');
  imageElement.src = imgUrl;

  const cardContainer = document.createElement('div');
  cardContainer.classList.add('activity-card');
  cardContainer.appendChild(titleElement);
  cardContainer.appendChild(descriptionElement);
  cardContainer.appendChild(imageElement);

  return cardContainer;
}

function refreshActivityContainer() {
  const activityContainer = document.getElementById('activity-container');
  activityContainer.innerHTML = '';

  const activities = repo.getAllActivities();
  const activityCards = activities.map(createActivityCard);

  activityCards.forEach(card => {
    activityContainer.appendChild(card);
  });
}

function addActivityHandler(event) {
  event.preventDefault();

  const titleInput = document.getElementById('activity-name');
  const descriptionInput = document.getElementById('activity-description');
  const imgUrlInput = document.getElementById('image-link');

  const title = titleInput.value.trim();
  const description = descriptionInput.value.trim();
  const imgUrl = imgUrlInput.value.trim();

  if (!title || !description || !imgUrl) {
    alert('Por favor complete todos los campos.');
    return;
  }

  const newActivity = { title, description, imgUrl };
  repo.addActivity(newActivity);
  refreshActivityContainer();

  titleInput.value = '';
  descriptionInput.value = '';
  imgUrlInput.value = '';
}

const addButton = document.querySelector('button[type="submit"]');
addButton.addEventListener('click', addActivityHandler);

function deleteActivityHandler(event) {
  const cardToDelete = event.target.closest('.activity-card');
  if (!cardToDelete) return;

  const index = Array.from(cardToDelete.parentNode.children).indexOf(cardToDelete);
  repo.activities.splice(index, 1);
  cardToDelete.remove();
}

document.getElementById('activity-container').addEventListener('click', deleteActivityHandler);
