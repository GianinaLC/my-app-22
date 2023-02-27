import React, { useRef } from "react";
import PropTypes from 'prop-types'
import { LEVELS } from "../../../models/levels.enum";
import { Task } from "../../../models/task.class";

const Taskform = ({ add, length }) => {
    const nameRef = useRef('')
    const descriptionRef = useRef('')
    const levelRef = useRef(LEVELS.NORMAL)


    function addTask(e) {
        e.preventDefault();
        const newTask = new Task(
            nameRef.current.value,
            descriptionRef.current.value,
            false,
            levelRef.current.value
        )
        /* add esta en el padre -tasklist*/
        add(newTask);
    }

    const normalStyle = {
        color: 'blue',
        fontWeight: '400px'
    }

    const urgentStyle = {
        color: 'yellow',
        fontWeight: '400px'
    }

    const blockingStyle = {
        color: 'tomato',
        fontWeight: '400px'
    }

    return (
        <form onSubmit={addTask} className='d-flex justify-content-center align-items-center mb-4'>
            <div className='form-outline flex-fill'>
                <input ref={nameRef} id='inputName' type='text' className='form-control form-control-lg' required autoFocus placeholder="Task Name" />

                <input ref={descriptionRef} id='inputDescription' type='text' className='form-control form-control-lg' required placeholder="Task Description" />

                <select ref={levelRef} defaultValue={LEVELS.NORMAL} id='selectLevel' className='form-control form-control-lg'>
                    <option style={normalStyle} value={LEVELS.NORMAL}> 
                        Normal
                    </option>
                    <option style={urgentStyle} value={LEVELS.URGENTE}> 
                        Urgente
                    </option>
                    <option style={blockingStyle} value={LEVELS.BLOCKING}> 
                        Blocking
                    </option>
                </select>
            <button type="submit" className='btn btn-success btn-lg ms-2' >{ length > 0 ? 'Add task' : 'Create your first task'}</button>
            </div>
        </form>
    )
}
Taskform.propTypes = {
    add: PropTypes.func.isRequired,
    length: PropTypes.number.isRequired
}

export default Taskform;