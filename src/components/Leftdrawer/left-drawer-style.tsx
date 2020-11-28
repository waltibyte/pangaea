import { makeStyles } from "@material-ui/core";

const drawerWidth = 350;

const LeftDrawerStyle = makeStyles(theme => ({
    list: {
        height: '100%',
        width: '100%',
        position: 'relative'
    },
    fullList: {
        width: 'auto',
    },
    drawerPaper: {
        width: drawerWidth,
        backgroundColor: '#F2F3F0',
        padding: 20
    },
    icon: {
        borderRadius: '50%',
        // backgroundColor: 'rgba(170, 220, 173, 0.15);',
        border: '1px solid rgba(0,0,0, 0.2)',
        fontSize: 14,
        color: 'rgba(0,0,0, 0.7)',
        cursor: 'pointer',
        transform: 'rotate(90deg)'
    },
    paymentPanel: {
        backgroundColor: '#ffffff',
        border: '1px solid rgb(0,0,0, 0.5)',
        padding: 4,
        borderRadius: 0
    },
    qInCart: {
        borderRadius: '5px',
        paddingLeft: 5,
        paddingRight: 5,
        paddingBottom: 1,
        fontSize: 10,
        backgroundColor: theme.palette.primary.main,
        color: '#ffffff'
    }
}));

export default LeftDrawerStyle;