import { makeStyles } from "@material-ui/core";
import Globals from "reactor/globals";
import { SIDEBAR_ITEM_COLOR, HEADER_BAR_BACKGROUND_COLOR } from "shared/style";

const drawerWidth = 240;
const useLayoutClasses = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    grow: {
        flexGrow: 1,
    },
    appBar: {
        backgroundColor: HEADER_BAR_BACKGROUND_COLOR,
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
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        // [Globals.marginLeft]: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        [Globals.marginLeft]: 0,
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
        color: SIDEBAR_ITEM_COLOR,
        fontWe: 'bold',
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