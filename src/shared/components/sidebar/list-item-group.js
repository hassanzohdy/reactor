import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import SidebarListItem from './list-item';
import List from '@material-ui/core/List';

export default function SidebarListItemGroup(props) {
    let { text, icon, items, nestedItemClass } = props;
    const [open, setOpen] = React.useState(false);

    console.log(nestedItemClass);


    let itemsList = items.map((item, index) => {
        return (
            <SidebarListItem
                nestedItemClass={nestedItemClass}
                key={index}
                route={item.route}
                text={item.text}
                icon={item.icon}
            />
        )
    });

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <>
            <ListItem button onClick={handleClick}>
                <ListItemIcon>
                    {React.createElement(icon)}
                </ListItemIcon>
                <ListItemText primary={text} />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    {itemsList}
                </List>
            </Collapse>
        </>
    );
}