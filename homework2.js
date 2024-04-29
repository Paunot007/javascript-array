const todo = [
    "Service the car",
    "Change the burnt bulb",
    "Write the code",
    "Clean the room",
    "Buy groceries",
    "Prepare the stuffs for going out in 1st May",
    "Feed the cat",
];
console.log("todo" , todo);
//adding a new task
todo.push ("Refuel the scooter");
console.log("added a new todo", todo);
//Removing a todo from lists
const indexToRemove = 5;
todo.splice(indexToRemove, 1);
console.log("Task removed for 1st May it will rain", todo);
//Added a task from top
todo.unshift("Wash the car");
console.log("The car is Dirty" , todo);
//!!!Only Two tasks left not completed
console.log("The 2 tasks uncompleted", todo.slice(4 , 6));
//Lets remove last task usinp POP Method
todo.pop()
console.log("The scooter is filled with petrol" , todo);