import PropTypes from 'prop-types';
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext)
    const location=useLocation()

    if(loading){
        return <div>Loading ..</div>
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