import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { Home, Settings, Task } from '@mui/icons-material';
import { useNavigate } from "react-router-dom";

const getIcon = (icon) => {
    switch (icon) {
        case 'HOME':
            return (<Home />)
        case 'TASKS':
            return (<Task />)
        case 'SETTINGS':
            return (<Settings />)
        default: 
            return(<Home/>)
    }
}

const MenuListItem = ({ list }) => {
    const navigateTo = useNavigate()

    return (
        <List>
            {
                list.map(({ text, path, icon }, index) => {
                    {
                        <ListItem key={index} button onClick={navigateTo(path)}>
                            <ListItemIcon>
                                {getIcon(icon)}
                            </ListItemIcon>
                            <ListItemText primary={text} />

                        </ListItem>
                }
                })
            }
        </List>
    )
}

export default MenuListItem;