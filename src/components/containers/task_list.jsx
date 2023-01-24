import React, { useState, useEffect } from "react";
import { LEVELS } from "../../models/levels.enum";
import { Task } from '../../models/task.class'
import TaskComponent from "../pure/task";

const TaskListComponent = () => {

    const defaultTask = new Task('Example', 'Default Description', false, LEVELS.NORMAL);

//estado del componente
    const [tasks, setTasks] = useState([defaultTask])
    const [loading, setLoading] = useState(true)

//control del ciclo de vida del componente
    useEffect(() => {
        console.log('modificacion de tareas')
        setLoading(false)
        //cuando desaparezca el componente sale lo que hay en return
        return () => {
              console.log('se va a desmontar')
        }
    },[tasks])
    
    const changeCompleted = (id) => {
        console.log('TODO cambiar estado de una tarea')
    }

    return (
        <div>
            <div>
                <h1>Tus tareas:</h1>
            </div>
            {/* TODO aplicar un for/map para renderizar una lista */}
            <TaskComponent task={defaultTask}></TaskComponent>

        </div>
    )
}

export default TaskListComponent;