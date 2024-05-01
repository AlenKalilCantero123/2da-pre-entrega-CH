// console.log("estamos ejecutandoJS en nuestra web")
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
    }

    getAllActivities() {
        return this.activities;
    }

    createActivity(id, title, description, imgUrl) {
        const newActivity = new Activity(id, title, description, imgUrl);
        this.activities.push(newActivity);
    }

    // Método extra-credit: eliminar actividad por ID
    deleteActivity(id) {
        this.activities = this.activities.filter(activity => activity.id !== id);
    }
}
