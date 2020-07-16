import { makeStyles } from "@material-ui/core";
import Globals from "reactor/globals";
import styleSettings from "./style-settings";
    
const drawerWidth = styleSettings.get('dashboard.sidebar.width', 240);
const useLayoutClasses = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    textCenter: {
        textAlign: 'center',
    },
    positionRelative: {
        position: 'relative',
    },
    grow: {
        flexGrow: 1,
    },
     appBar: {
        backgroundColor: styleSettings.get('dashboard.header.backgroundColor'),
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton() {
        return {
            flip: false, // disable auto switching
            [Globals.marginRight]: theme.spacing(2),
        };
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    contentShift() {
        return {
            transition: theme.transitions.create(['margin', 'width'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
            [Globals.marginLeft]: drawerWidth,
        };
    },
    sidebar: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    sidebarNestedItem: {
        paddingLeft: theme.spacing(4),
    },
    sidebarListItemIcon: {
        minWidth: theme.spacing(5),
    },
    sidebarActiveColor: {
        color: styleSettings.get('dashboard.sidebar.sidebarItemColor', '#333'),
        fontWe: 'bold',
    },
    bold: {
        fontWeight: 'bold',
    },
    modalTitle: {
        margin: 0,
        padding: theme.spacing(2),
    },
    modalTitleCloseBtn: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },
    // Themes
    darkTheme: {
        background: '#333',
        color: '#FFF',
        '&:hover': {
            background: '#222',
        },
        '&:disabled': {
            background: '#555',
            color: '#eee',
        },
    },
}));

export default useLayoutClasses;