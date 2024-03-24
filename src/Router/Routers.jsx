
import { createBrowserRouter } from 'react-router-dom';
import LayOut from '../Layout/LayOut';
import HomePage from '../Pages/HomePage/HomePage';
import TaskBoard from '../Pages/TaskBoard/TaskBoard';

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
                element : <TaskBoard></TaskBoard>
            }
         ]
    }
])

export default Routers;