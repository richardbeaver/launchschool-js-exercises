/* eslint-disable */

// Task List

// We were asked to implement a task list and the following functionality:

// adding a new task
// completing a given number of existing tasks
// displaying the task list

// We decided to keep things simple and model the tasks as strings. Completing
// a task for us simply means deleting the string from the array of tasks.

// Experimenting with our code reveals that it doesn't work exactly as we
// expected. Find the problem and fix it.

let todos = ['wash car', 'exercise', 'buy groceries', 'balance budget',
             'call plumber', 'feed fido', 'get gas',  'organize closet'];

function addTask(task) {
  if (todos.includes(task)) {
    console.log('That task is already on the list.');
  } else {
    todos.push(task);
  }
}

function completeTasks(n = 1) {
  let tasksComplete = 0;

  while (todos.length > 0 && tasksComplete < n) {
    console.log(`${todos[0]} complete!`);
    delete todos[0];
    tasksComplete++;
  }

  if (todos.length === 0) {
    console.log('All tasks complete!');
  } else {
    console.log(`${tasksComplete} tasks completed; ${todos.length} remaining.`);
  }
}

function displayTaskList() {

  console.log(`ToDo list (${todos.length} tasks):`);
  console.log('---------------------');

  for (let idx = 0; idx < todos.length; idx++) {
    console.log(`-- ${todos[idx]}`);
  }
}

// Utilizing our task manager

addTask('oil change');
addTask('dentist');
addTask('homework');

completeTasks(3);
displayTaskList();

//

/*

In the `completeTasks` function, we use the statement `delete todos[0];` to
remove the first todo in the todo list. However, the `delete` operator is used
to remove properties from objects. When used on an array element, it
leaves an empty item in its place. Trying to access this index will return
`undefined`, which is why we see `undefined` tasks being completed and
`undefined` being printed when displaying the list.

We should replace this line with `todos.splice(0, 1)` or `todos.shift()`,
which will completely remove the first element from the `todos` array, update
the `length` value, and shifts all subsequent values down one index.

*/
