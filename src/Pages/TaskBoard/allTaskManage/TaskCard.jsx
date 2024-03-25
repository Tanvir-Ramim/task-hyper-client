import PropTypes from 'prop-types';

const TaskCard = ({taskInfo}) => {
    const { title, description,priority,assignee}= taskInfo || {}
    return (
        <div className='bg-white h-64  border border-yellow-700 mt-2'>
           <div>
            <h1 className='overflow-hidden'>{description}</h1>
           </div>
        </div>
    );
};
TaskCard.propTypes={
    taskInfo : PropTypes.object
}
export default TaskCard;