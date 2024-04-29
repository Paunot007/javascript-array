const todo =[
    "Print the Photos in folder PhotosForPrint",
    "Prepare the photos for delivery",
    "Prepare the camcorder for recording a wedding",
];
console.log("Todo list for a photographer", todo);
//added a new task
todo.push("Prepare a photoshoot for prom students in Gardenia Palace" , todo);
console.log("new task list for a prom" , todo);
//added a urgent task
todo.unshift("In8Hours Photoshoot for a cars in Skopje" , todo);
console.log("New Urgent Task" , todo);