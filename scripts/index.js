

class Activity {
cosntructor (id, title, descritpion, imgUrl){

this.id = id;
this.title = title;
this.description = description;
this.imgUrl = imgUrl
}
}

class Repository{
constructor(){
this.activities = [];
this.id = 0;

}

getAllActivities(){
return this.activities

}

createActivity(title, description, imgUrl){
this.id++;
const activity = new Activity(this.id, title, description, imgUrl)
this.activities.push(activity)

}

deleteActivity (id){

 this.activities =  this.activities.filter((activity)=> activity.id !== id)
 return this.activities;
}

}

const repository = new Repository ()

const repository2 = new Repository ()

console.log(repository, 'repository');

console.log(repository2, 'repository2');

repository.createActivity('estudiar', 'crear hábitos de mejora para aplicar lo aprendido en clase', "https://tse3.mm.bing.net/th?id=OIP.IOV_Nq1QZcoBz9QAoJbJMAHaEZ&pid=Api&P=0&h=180")

console.log(repository.getAllActivities());

repository.createActivity('Yoga','Es bueno para la salud mental y fisica',"https://www.drweil.com/wp-content/uploads/2016/12/health-wellness_balanced-living_exercise-fitness_lotus-pose_2716x1811_000097408705.jpg")

console.log(repository.getAllActivities())

console.log(repository.deleteActivity(1))