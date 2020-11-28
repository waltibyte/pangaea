import { makeStyles } from "@material-ui/core";

const AppBarStyle = makeStyles(theme => ({
    root: {
        backgroundColor: '#fcfcfa',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        backgroundColor: '#fcfcfa',
        borderBottom: '1px solid rgb(0,0,0, 0.1)'
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    toolbarRoot: {
        justifyContent: 'space-between',
        paddingLeft: 16,
        paddingRight: 16
    },
    badge: {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
      },
}));

export default AppBarStyle;
