import React, { useState, useEffect } from "react";
import { LEVELS } from "../../models/levels.enum";
import { Task } from '../../models/task.class'
import Taskform from "../pure/forms/taskForm";
import TaskComponent from "../pure/task";

const TaskListComponent = () => {

    const defaultTask1 = new Task('Example1', 'Default Description1', false, LEVELS.NORMAL);
    const defaultTask2 = new Task('Example2', 'Default Description2', true, LEVELS.URGENTE);
    const defaultTask3 = new Task('Example3', 'Default Description3', false, LEVELS.BLOCKING);




//estado del componente
    const [tasks, setTasks] = useState([defaultTask1,defaultTask2,defaultTask3])
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
            <div className="col-12">
                <div className="card">
                    <div className="card-header p-3">
                        <h5>Tus tareas:</h5>
                    </div>
                    <div className="card-body" data-mdb-perfect-scrollbar='true' style={{ position:'relative', height: '400px' }}>
                        <table>
                            <thead>
                                <tr>
                                    <th scope="col">Title</th>
                                    <th scope="col">Description</th>
                                    <th scope="col">Priority</th>
                                    <th scope="col">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tasks.map((task, index) => {
                                    return (
                                    
                                        <TaskComponent key={index} task={task}></TaskComponent>
                                    )
                                })}
                                  

                            </tbody>
                        </table>
                    </div>
                    <Taskform></Taskform>
                </div>
                
            </div>
            {/* TODO* aplicar un for/map para renderizar una lista */}
          {/*   <TaskComponent task={defaultTask}></TaskComponent>
 */}
        </div>
    )
}

export default TaskListComponent;