1. TaskCollectionModel will store a collection of all TaskModels inside properties.tasks. For example:

    properties = {
        tasks: [{TaskModel}, {TaskModel}, {TaskModel}]
    }

2. Each TaskModel will contain properties.text value. For example:

    properies = {
        task: 'go do this'
    }

3. There will be no TaskController since it would not be able to use "delete" method on it's level to remove it's TaskModel. Those directions will have to be passed to taskCollectionController.

4. TaskModel will not require to have a TaskObserver set up, since it will never be modified only created or deleted.

5. TaskView will be generated for each task Model upon rendering of all tasks.

6. TaskView will be responsible for communicating with TaskCollectionController to remove it's model from the collection upon pressing delete button, this will also trigger removal of event listener for that button to avoid memory leaks.

7. Form will have its own model, view and controller. When new task is submitted, formView will communicate with taskCollectionController to add new task, which will add new TaskModel to taskCollectionModel and trigger taskCollectionView to reload all tasks.
