

class Activity {
    constructor(id, title, description, imgUrl) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.imgUrl = imgUrl;
    }
}

class Repository {
    constructor() {
        this.activities = [];
        this.id = 0;
    }

    getAllActivities() {
        return this.activities;
    }

    createActivity(title, description, imgUrl) {
        const activity = new Activity(++this.id, title, description, imgUrl);
        this.activities.push(activity);
        return activity; // Devuelve la actividad creada
    }

    deleteActivity(id) {
        this.activities = this.activities.filter(act => act.id !== id);
    }
}

const repo = new Repository();

function buildActivity(act) {
    const card = document.createElement("div");
    card.className = "card";
    card.id = act.id;

    const titleTag = document.createElement("h3");
    titleTag.textContent = act.title;

    const descriptionTag = document.createElement("p");
    descriptionTag.innerText = act.description;

    const imgTag = document.createElement("img");
    imgTag.src = act.imgUrl;
    imgTag.alt = `imagen de ${act.title}`;

    card.appendChild(titleTag);
    card.appendChild(descriptionTag);
    card.appendChild(imgTag);

    // Agregar listener de clic para eliminar la tarjeta
    card.addEventListener("click", () => {
        repo.deleteActivity(act.id);
        buildActivities(); // Volver a construir las tarjetas después de eliminar una
    });

    return card;
}

function buildActivities() {
    const container = document.getElementById("activity-container");
    container.innerHTML = ""; // Limpiar el contenedor antes de agregar nuevas actividades
    const activities = repo.getAllActivities();
    const activitiesHTML = activities.map(buildActivity);

    activitiesHTML.forEach(element => {
        container.appendChild(element);
    });
}

function handleSubmit(event) {
    event.preventDefault();

    const titleInput = document.getElementById("activity-name");
    const descriptionInput = document.getElementById("activity-description");
    const imgUrlInput = document.getElementById("image-link");

    if (titleInput.value === "" || descriptionInput.value === "" || imgUrlInput.value === "") {
        alert("Debe completar todos los datos.");
        return;
    }

    repo.createActivity(titleInput.value, descriptionInput.value, imgUrlInput.value);
    buildActivities();

    // Limpiar los campos del formulario después de agregar la actividad
    titleInput.value = "";
    descriptionInput.value = "";
    imgUrlInput.value = "";
}

const submitButton = document.querySelector("#activity-form button");
submitButton.addEventListener("click", handleSubmit);
