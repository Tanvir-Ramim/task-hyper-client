import PropTypes from 'prop-types';
import TaskCard from './TaskCard';

const TasksManage = ({filterData}) => {
     console.log(filterData)

    return (
        <div className='p-1 '>
            {
                filterData?.map((task)=><TaskCard key={task._id} taskInfo={task}></TaskCard>)
            }
        </div>
    );
};

TasksManage.propTypes={
    filterData : PropTypes.array
}
export default TasksManage;