import { useParams } from "react-router-dom"

const TaskDetailPage = () => {
    const { id } = useParams()
    //** toma el id de la url
    
    return (
        <div>
            <h1>Detalle de la tarea - {id}</h1>
        </div>
    )
}

export default TaskDetailPage