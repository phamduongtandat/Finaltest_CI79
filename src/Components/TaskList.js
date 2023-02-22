import React, { useContext } from 'react'
import { Context } from '../App';
import TaskItem from './TaskItem';

function TaskList() {
    const { tasks } = useContext(Context)
    return (
        <div style={{ marginLeft: '35%', }}>
            <ul className="list-unstyled" >
                {tasks.map((task, i) => (
                    <TaskItem job={task} key={i} />
                ))}
            </ul>
        </div>
    )
}

export default TaskList
