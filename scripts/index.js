class Activity {
    constructor(name, description, imageLink) {
      this.name = name;
      this.description = description;
      this.imageLink = imageLink;
    }
    
    createCard() {
      // Create a new card
      let card = document.createElement('div');
      card.classList.add('card');
      
      // Add image to the card
      let img = document.createElement('img');
      img.src = this.imageLink;
      img.alt = "Card Image";
      img.addEventListener('click', () => {
        alert("You have selected " + this.name);
      });
      card.appendChild(img);
      
      // Add activity information to the card
      let cardContent = document.createElement('div');
      cardContent.classList.add('card-content');
      
      let title = document.createElement('h3');
      title.textContent = this.name;
      cardContent.appendChild(title);
      
      let description = document.createElement('p');
      description.textContent = this.description;
      cardContent.appendChild(description);
      
      card.appendChild(cardContent);
      
      // Add the card to the activity container
      let activityContainer = document.getElementById('activity-container');
      activityContainer.appendChild(card);
    }
  }
  
  document.getElementById('activity-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    
    // Capture form field values
    let activityName = document.getElementById('activity-name').value;
    let activityDescription = document.getElementById('activity-description').value;
    let imageLink = document.getElementById('image-link').value;
    
    // Create a new activity instance
    let newActivity = new Activity(activityName, activityDescription, imageLink);
    
    // Create and append card for the activity
    newActivity.createCard();
  });



// class Activity {
//     constructor(id, title, description, imgUrl) {
//       this.id = id;
//       this.title = title;
//       this.description = description;
//       this.imgUrl = imgUrl;
//     }
//   }
  
//   class Repository {
//     constructor() {
//       this.activities = [];
//       this.id = 0;
//     }
  
//     getAllActivities() {
//       return this.activities;
//     }
  
//     createActivity(title, description, imgUrl) {
//       this.id++;
//       const activity = new Activity(this.id, title, description, imgUrl);
//       this.activities.push(activity);
//     }
  
//     deleteActivity(id) {
//       this.activities = this.activities.filter((activity) => activity.id !== id);
//       return this.activities;
//     }
//   }
  
//   const repository = new Repository();
  
//   const repository2 = new Repository();
  
//   console.log(repository, 'repository');
//   console.log(repository2, 'repository2');
  
//   repository.createActivity('estudiar', 'crear hábitos de mejora para aplicar lo aprendido en clase', "https://tse3.mm.bing.net/th?id=OIP.IOV_Nq1QZcoBz9QAoJbJMAHaEZ&pid=Api&P=0&h=180");
  
//   console.log(repository.getAllActivities());
  
//   repository.createActivity('Yoga','Es bueno para la salud mental y física',"https://www.drweil.com/wp-content/uploads/2016/12/health-wellness_balanced-living_exercise-fitness_lotus-pose_2716x1811_000097408705.jpg");
  
//   console.log(repository.getAllActivities());
  
//   console.log(repository.deleteActivity(1));
  
//   module.exports = { Activity, Repository };
  

// class Activity {
//     constructor(id, title, description, imgUrl) {
//       this.id = id;
//       this.title = title;
//       this.description = description;
//       this.imgUrl = imgUrl;
//     }
//   }
  
//   class Repository {
//     constructor() {
//       this.activities = [];
//       this.id = 0;
//     }
  
//     getAllActivities() {
//       return this.activities;
//     }
  
//     createActivity(title, description, imgUrl) {
//       this.id++;
//       const activity = new Activity(this.id, title, description, imgUrl);
//       this.activities.push(activity);
//     }
  
//     deleteActivity(id) {
//       this.activities = this.activities.filter((activity) => activity.id !== id);
//       return this.activities;
//     }
//   }
  
//   const repository = new Repository();
  
//   const repository2 = new Repository();
  
//   console.log(repository, 'repository');
//   console.log(repository2, 'repository2');
  
//   repository.createActivity('estudiar', 'crear hábitos de mejora para aplicar lo aprendido en clase', "https://tse3.mm.bing.net/th?id=OIP.IOV_Nq1QZcoBz9QAoJbJMAHaEZ&pid=Api&P=0&h=180");
  
//   console.log(repository.getAllActivities());
  
//   repository.createActivity('Yoga','Es bueno para la salud mental y física',"https://www.drweil.com/wp-content/uploads/2016/12/health-wellness_balanced-living_exercise-fitness_lotus-pose_2716x1811_000097408705.jpg");
  
//   console.log(repository.getAllActivities());
  
//   console.log(repository.deleteActivity(1));
  
//   module.exports = { Activity, Repository };
