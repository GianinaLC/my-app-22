import { Task } from "../../models/task.class";
import PropTypes from 'prop-types';
import { useEffect } from "react";


const TaskComponent = ({ task }) => {

    useEffect(() => {
        console.log('tarea creada')
        return () => {
            console.log(`tarea: ${task.name} se va a desmontar`)
        }
    },[task])


    return (
        <div>
            <h2>
                Nombre: { task.name }
            </h2>
            <h3>
                Descripcion: { task.description }
            </h3>
            <h4>
                Level: { task.level }
            </h4>
            <h5>
                La tarea esta: { task.completed? 'COMPLETADA' : 'PENDIENTE'}
            </h5>
        </div>
    )
}

TaskComponent.propTypes = {
    task : PropTypes.instanceOf(Task)
}

export default TaskComponent;