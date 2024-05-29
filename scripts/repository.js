export class Repository {
    constructor() {
      this.activities = [];
    }
  
    addActivity(activity) {
      this.activities.push(activity);
    }
  
    getAllActivities() {
      return this.activities;
    }
  }
  