import { useParams } from "react-router-dom"

const TaskDetailPage = ({task}) => {
    const { id } = useParams()
    //** toma el id de la url
    
    return (
        <div>
            <h1>Detalle de la tarea - {id}</h1>
            <h2>{task.name}</h2>
            <h3>{task.description }</h3>
        </div>
    )
}

export default TaskDetailPage