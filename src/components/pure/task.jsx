import { Task } from "../../models/task.class";
import PropTypes from 'prop-types';
import { useEffect } from "react";
import '../../styles/task.scss'
import { LEVELS } from "../../models/levels.enum";

const TaskComponent = ({ task, complete, remove }) => {

    useEffect(() => {
        console.log('tarea creada')
        return () => {
            console.log(`tarea: ${task.name} se va a desmontar`)
        }
    },[task])

/* function returna a Badge dependiendo del lvl */
    function taskLevelBadge() {
        switch (task.level) {
            case LEVELS.NORMAL:
                return (<h6 className="mb-0">
                    <span className="badge bg-primary">{task.level}</span>
                </h6>)
            
            case LEVELS.URGENTE:
                return (<h6 className="mb-0">
                    <span className="badge bg-warning">{task.level}</span>
                </h6>)
            
            case LEVELS.BLOCKING:
                return (<h6 className="mb-0">
                    <span className="badge bg-danger">{task.level}</span>
                </h6>)
            default:
                break;
        }
    }

//es mas depurable si hacemos esta parte en una funcion
    function taskCompletedIcon() {
        if (task.completed) {
            return(<i onClick={() => complete(task)} className="bi-toggle-on task-action" style={{color: 'green'}}></i>) 
        } else {
            return(<i onClick={() => complete(task)}  className="bi-toggle-off task-action" style={{color: 'grey'}}></i>) 
        }
    }


    return (
        <tr className="fw-normal">
            <th>
                <span className="ms-2">{ task.name }</span>
            </th>
            <td  className="align-middle">
                <span>{ task.description }</span>
            </td>
            <td className="align-middle">
                {/* TODO: sustituir por un badge */}
                {/* <span>{ task.level }</span> */}
                {taskLevelBadge()}
            </td>
            <td className="align-middle">
                {/* retorna icono segun si esta completa o no */}
                {taskCompletedIcon()}

                {/* {task.completed ? (<i className="bi-toggle-on" style={{color: 'green'}}></i>) : (<i className="bi-toggle-off" style={{color: 'grey'}}></i>)  } */}


                {/* TODO: sustituir por un iconos */}
                {/*  <span> {task.completed ? 'Completed' : 'Pending'}</span> */}
                <i className="bi-trash task-action"
                    style={{ color: 'tomato', fontSize: '20px' }}
                    onClick={() => remove(task)}></i>

            </td>
        </tr>
    )
}
//controla el tipo de datos que vamos a obtener
//al ser requerido, si no se lo pasamos tira error
TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task).isRequired,
    complete: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired
}

export default TaskComponent;