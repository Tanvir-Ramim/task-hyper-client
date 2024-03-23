
import { createBrowserRouter } from 'react-router-dom';
import LayOut from '../Layout/LayOut';
import HomePage from '../Pages/HomePage/HomePage';

const Routers = createBrowserRouter([
    {
         path : '/',
         element : <LayOut></LayOut>,
         children : [
            {
                index : true,
                element : <HomePage></HomePage>
            }
         ]
    }
])

export default Routers;