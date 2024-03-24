import { useContext } from "react";

import pp from '../../../assets/no-pp.jpg'
import { AuthContext } from "../../../Provider/AuthProvider";

const TopPart = () => {
    const {user}=useContext(AuthContext)
    return (
        <div className="flex justify-between items-center p-2">
           <div> <h1 className="text-3xl font-bold">Task Board</h1></div>
            <div className="flex items-center border-2 border-pink-200 p-2">
            <div className="avatar">
                        <div className="w-9 mr-2 rounded-full ring-primary ring-offset-base-100 ring-offset-2">
                            {
                                user?.photoURL ?  <img src={user.photoURL} /> : <img src={pp} />
                            }

                        </div>
                    </div>
                <div>

                <h1 className="font-semibold">{user?.displayName}</h1>
                </div>
                
            </div>
        </div>
    );
};

export default TopPart;