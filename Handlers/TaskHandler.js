class TaskHandler {
    static tasks = [
      { id: 1, title: 'Task 1', description: 'Description 1', status: 'pending' },
      { id: 2, title: 'Task 2', description: 'Description 2', status: 'completed' }
    ];
  
    static getAllTasks(req, res) {
      res.json(TaskHandler.tasks);
    }
  
    static addTask(req, res) {
      const { title, description } = req.body;
      if (!title || !description) {
        return res.status(400).json({ error: 'Title and description are required' });
      }
      const newTask = {
        id: TaskHandler.tasks.length + 1,
        title,
        description,
        status: 'pending'
      };
      TaskHandler.tasks.push(newTask);
      res.status(201).json(newTask);
    }
  
    static deleteTask(req, res) {
      const { id } = req.params;
      const index = TaskHandler.tasks.findIndex(task => task.id == id);
      if (index === -1) {
        return res.status(404).json({ error: 'Task not found' });
      }
      TaskHandler.tasks.splice(index, 1);
      res.json({ message: 'Task deleted successfully' });
    }

    static updateTask(req, res) {
        const { id } = req.params;
        const { title, description, status } = req.body;
        const task = TaskHandler.tasks.find(task => task.id == id);
        if (!task) {
          return res.status(404).json({ error: 'Task not found' });
        }
        if (title) task.title = title;
        if (description) task.description = description;
        if (status) task.status = status;
        res.json(task);
      }
  }
  
  export default TaskHandler;
  