/*create a vanilla todo list
todo list need an input, storage, render, delete */


let input = prompt("what would you like to do? add todo, view list, delete todo, quit")

const todos = []
while (input !== 'quit' && input !== 'q') {
    if (input === 'list') {
        console.log('your list')
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i}: ${todos[i]}`)
        }
        console.log('End of the list')
    } else if (input === 'add todo') {
        const newTodo = prompt('what would you like to add?')
        todos.push(newTodo)
        console.log(`${newTodo} added to your list!`)

    } else if (input === 'delete') {
        const index = parseInt(prompt('Select an index to delete'))
        if (!Number.isNaN(index)) {
            const deleted = todos.splice(index, 1);
            console.log(`${deleted} has been removed`)
        } else {
            console.log('try another index')
        }
    }
    input = prompt('what would you like to do next, add another todo? list? delete? quit?')
}
console.log('you have quit, refresh if you would like to try again!')