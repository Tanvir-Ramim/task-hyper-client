import PropTypes from 'prop-types';
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';


const PrivateRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext)
    const location=useLocation()

    if(loading){
        return     <Skeleton count={10} />
    }
    if(user && !loading){
        return children
   }
    return <Navigate state={{from:location}} replace to='/login'></Navigate>
};

PrivateRoute.propTypes ={
    children : PropTypes.node
}
export default PrivateRoute;