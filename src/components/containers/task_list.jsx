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
    
    function completeTask(task) {
        console.log('complete this task:', task);
        const index = tasks.indexOf(task);
        //lista temporal
        const tempTasks = [...tasks ]
        tempTasks[index].completed = !tempTasks[index].completed
        //actualizamos el estado del componente (con la nueva lista actualizada), actualiza la tarea y se actualiza el icono
        //el estado es inmutable, entonces le generamos un nuevo valor
        setTasks(tempTasks);
    }

    function deleteTask(task) {
        console.log('Delete this task:', task);
        const index = tasks.indexOf(task);
        const tempTasks = [...tasks];
        tempTasks.splice(index, 1);
        setTasks(tempTasks);
    }

     function addTask(task) {
        console.log('Add this task:', task);
        const index = tasks.indexOf(task);
        const tempTasks = [...tasks];
        tempTasks.push(task);
        setTasks(tempTasks);
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
                                    
                                        <TaskComponent key={index} task={task} complete={completeTask}
                                        remove={deleteTask}></TaskComponent>
                                    )
                                })}
                                  

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <Taskform add={addTask}></Taskform>

            {/* TODO* aplicar un for/map para renderizar una lista */}
          {/*   <TaskComponent task={defaultTask}></TaskComponent>
 */}
        </div>
    )
}

export default TaskListComponent;