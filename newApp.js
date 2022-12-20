
let input = prompt('hello welcome to vanilla JS todo list app! currently you can "add todo" or "list" to view a list of your todos! currently your list will just consist of examples.');

const todos = [{ text: 'ex: Study', completed: false }, { text: 'ex: buy fish tank', completed: false }];

while (input !== 'quit' && input !== 'q') {
    if (input === 'add todo') {
        const newTodo = prompt('add a todo!');
        todos.push({ text: newTodo, completed: false });
        console.log(`${newTodo} has been added to your list!`);
    } else if (input === 'list') {
        console.log('Todo list:');
        for (let i = 0; i < todos.length; i++) {
            console.log(`  ${i}. ${todos[i].text}${todos[i].completed ? ' (completed)' : ''} `);
        }
    } else if (input === 'complete') {
        const index = parseInt(prompt('select an index number to mark as complete'));
        if (index >= 0 && index < todos.length) {
            todos[index].completed = true;
            console.log(`Todo at index ${index} has been marked as complete.`);
        } else {
            console.log('Invalid index');
        }
    } else if (input === 'delete') {
        const index = parseInt(prompt('select an index number to delete'));
        if (index >= 0 && index < todos.length) {
            const deleted = todos.splice(index, 1)[0];
            console.log(`${deleted.text} has been removed`);
        } else {
            console.log('Invalid index');
        }
    }
    input = prompt('What would you like to do now? add todo? list? complete? delete? quit?');
}
console.log('you have quite, refresh the screen if you would like to play again');


/* commands
add todo
list
completed
delete
quit or q
*/
