import { Router } from 'express';
import TaskHandler from '../Handlers/TaskHandler.js';

const router = Router();

router.get('/tasks', TaskHandler.getAllTasks);
router.post('/tasks', TaskHandler.addTask);
router.put('/tasks/:id', TaskHandler.updateTask);
router.delete('/tasks/:id', TaskHandler.deleteTask);

export default router;
