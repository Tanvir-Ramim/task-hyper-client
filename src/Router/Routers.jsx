
import { createBrowserRouter } from 'react-router-dom';
import LayOut from '../Layout/LayOut';
import HomePage from '../Pages/HomePage/HomePage';
import TaskBoard from '../Pages/TaskBoard/TaskBoard';
import Login from '../Pages/login/Login';
import Register from '../Pages/register/Register';
import PrivateRoute from './PrivateRoute';

const Routers = createBrowserRouter([
    {
         path : '/',
         element : <LayOut></LayOut>,
         children : [
            {
                index : true,
                element : <HomePage></HomePage>
            },
            {
                path : 'taskBoard',
                element : <PrivateRoute>
                    <TaskBoard></TaskBoard>
                </PrivateRoute>
            },
            {
                path : 'login',
                element : <Login></Login>
            },
            {
                 path : 'register',
                 element : <Register></Register>
            }
         ]
    }
])

export default Routers;