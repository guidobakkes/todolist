//Problem: User interaction doesn't provide desired results.
//Solution: Add interactivity so the user can manage daily tasks.

//Add a new task
var addTask = function() {
    //When the button is pressed
    //Create a new list item with text from #new-task:
        //input (checkbox)
        //label
        //input (text)
        //button.edit
        //button.delete
        //each elements, needs modified and appended
}

//Edit an existing task
var editTask = function() {
    //When the edit button is pressed
        //if the class of the parent is .editMode
            //Switch from .editMode
            //Label text become the input's value
        //else
            //Switch to .editMode
            //Input value becomes the label's text

        //toggle .editMode on the parent
}

//Delete an existing task
var deleteTask = function() {
    //When the delete button is pressed
        //remove the parent list item from the ul
}

//Mark a task as complete
var taskCompleted = function() {
    //When the checkbox is checked
        //append the task list item to the #completed-tasks
}

//Mark a task as incomplete
var taskIncomplete = function() {
    //When the checkbox is unchecked
        //append the task list item to the #incomplete-tasks
}
