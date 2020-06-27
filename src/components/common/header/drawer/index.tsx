import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import "./index.scss";
import { useHistory  } from "react-router-dom";

// material UI components
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import IconButton from '@material-ui/core/IconButton';


const drawerWidth = 240;
const { forwardRef, useImperativeHandle } = React;
const useStyles = makeStyles(() => ({
    drawerPaper: {
        width: drawerWidth,
    },
}));

const Sidebar = forwardRef((props, ref) => {
    const history = useHistory();
    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    const classes = useStyles();

    useImperativeHandle(ref, () => ({

        handleDrawerOpen() {
            setOpen(true);
        }

    }));

    const handleDrawerClose = () => {
        setOpen(false);
    };
    
    const openProductList = () => {
        history.push('/product');
    }

    return (
        <div className="drawerWraper">
            <Drawer
                className="drawer"
                variant="persistent"
                anchor="left"
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className="drawerHeader">
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </div>
                <Divider />
                <List>
                    <ListItem button>
                        <ListItemText primary="Product" onClick={openProductList}>Product</ListItemText>
                    </ListItem>
                </List>
                <Divider />
                <List>
                    {['All mail', 'Trash', 'Spam'].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </div>
    )
});

export default Sidebar;