import PropTypes from 'prop-types';
import { useEffect, useRef, useState } from 'react';
import { BsThreeDotsVertical } from "react-icons/bs";
import useAxios from '../../../hooks/useAxios';
import useAllTask from '../../../hooks/useAllTask';
import toast from 'react-hot-toast';
import EditTask from './EditTask';

const TaskCard = ({ taskInfo }) => {
    const [open, setOpen] = useState(false)
    const { refetch } = useAllTask()
    const myAxios = useAxios()
    const { _id, title, description, priority, assignee, taskStatus } = taskInfo || {}

    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);


    const handleDelete = async (id) => {

        console.log(id)
        const res = await myAxios.delete(`/deleteTask/${id}`)
        if (res.data.deletedCount > 0) {
            refetch()
            toast.success('Successfully Deleted')
            document.getElementById('my_modal_4').close()
        }

    }

    return (
        <div className='bg-gray-200 h-64 rounded justify-between flex flex-col   mt-2 px-2 py-3'>

            <div className='flex flex-col justify-between  h-full'>
                <div>
                    <div className='flex justify-between '>
                        <h1 className='font-semibold'>{title}</h1>
                        <p className='bg-blue-500 px-1 text-white rounded'>{priority}</p>
                    </div>
                    <h1 className='border-b   mt-3 border-gray-400 '></h1>
                    <h1 className='overflow-hidden mt-2'>{description.slice(0, 130)}.</h1>
                </div>

                <div className='mt-2 flex justify-between relative '>
                    <h1 className='font-semibold '>@{assignee}</h1>
                    <button onClick={() => setOpen(!open)} className='
                bg-blue-500 text-white text-lg rounded '><BsThreeDotsVertical /></button>

                    {
                        open && <div ref={dropdownRef} className='absolute  bg-slate-300 rounded px-3 right-6   top-5'>
                           <EditTask taskInfo={taskInfo}></EditTask>
                            <hr />

                            <button className="text-sm font-medium" onClick={() => document.getElementById('my_modal_11').showModal()}>Delete</button>
                            <dialog id="my_modal_11" className="modal">
                                <div className="bg-white  rounded-none border">
                                    <form method="dialog">
                                        <div className="flex items-center justify-between">
                                            <h1 className="p-1 font-bold">Create A Task</h1>
                                            <button className=" rounded-full border btn-xs ">✕</button>
                                        </div>
                                    </form>

                                    <div className="bg-gradient-to-r from-pink-200 to-blue-300 mt-2 p-5 ">
                                        <h1 className=''>Do You Wish To Delete Task</h1>
                                        <div className='flex mt-2 justify-between items-center'>
                                            <h1 className='mt-1  font-semibold'>{title}</h1>
                                            <div className='space-x-3'>
                                                <button onClick={() => handleDelete(_id)} className='text-sm bg-blue-700 text-white px-3 rounded'>Yes</button>
                                                <button onClick={() => document.getElementById('my_modal_4').close()} className='text-sm bg-blue-700 text-white px-3 rounded'>No</button>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </dialog>
                        </div>
                    }
                </div>
            </div>
            <div className=''>
                <h1 className='mt-3'>
                    <span className='bg-blue-500  text-white px-4 rounded p-[2px]'>{taskStatus}</span>
                </h1>
            </div>

        </div>
    );
};


TaskCard.propTypes = {
    taskInfo: PropTypes.object
}
export default TaskCard;