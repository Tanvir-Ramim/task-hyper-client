import PropTypes from 'prop-types';
import { BsThreeDotsVertical } from "react-icons/bs";

const TaskCard = ({taskInfo}) => {
    const { title, description,priority,assignee , taskStatus}= taskInfo || {}
    return (
        <div className='bg-gray-200 h-64 rounded justify-between flex flex-col   mt-2 px-2 py-3'>
           <div className='flex flex-col justify-between  h-full'>
            <div>
            <div className='flex justify-between '>
                <h1 className='font-semibold'>{title}</h1>
                <p className='bg-blue-500 px-1 text-white rounded'>{priority}</p>
            </div>
             <h1 className='border-b   mt-3 border-gray-400 '></h1>
            <h1 className='overflow-hidden mt-2'>{description.slice(0,130)}.</h1>
            </div>
            
            <div className='mt-2 flex justify-between '>
                <h1 className='font-semibold '>@{assignee}</h1>
                <button className='cla
                bg-blue-500 text-white text-lg rounded '><BsThreeDotsVertical /></button>
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
TaskCard.propTypes={
    taskInfo : PropTypes.object
}
export default TaskCard;