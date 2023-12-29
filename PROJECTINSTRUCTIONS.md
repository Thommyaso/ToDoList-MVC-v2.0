1. Each task is ment to be a task model.
2. Task models need to use same view and controllers to make sure each task renders the same
3. So there will be 1 task view and 1 task controller but each task will have its own model:

    Task Model, (go do this)
    Task Model, (go do that)
    Task Model, (king in the castle)
    task Model  (uauauiua)*/

4. there will be a separate view for whole list. that updates the list when new element is added or one of the elements is deleted.
5. there will be 3 separate models (not counting ones that will be created for each specyfic task):

    - 1 for the list, // it will be connected to view representing the list
    - 1 for a task,   // it will be connected to 1 view and 1 controller that represents all tasks
    - 1 for a textarea data

6. Task Collection Model will have a property:

    this.properties = {
        tasks: [Task Model (go do this), 'Task Model (go do that),Task Model (king in the castle), Task Model (uauauiua)]
    }

    each time list view will be rendering list it will be calling task view to render task models

7. Task model will have one property to its key 'task' for example:

        this.properties = {
            task: 'go do this'
        }
