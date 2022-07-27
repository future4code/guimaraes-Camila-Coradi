import app from './app';
import UserController from './controller/UserController';

const userController = new UserController()

app.post('/createUser', userController.createUser);

app.get('/all', userController.getAllUsers);

app.delete('/:id', userController.deleteUser)

app.get('/test', (req, res) => {
    res.status(200).send("Servidor em pé!");
});
