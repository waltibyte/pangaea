import { makeStyles } from "@material-ui/core";

const LayoutStyle = makeStyles(theme => ({
    paperRoot: {
        width: '100%',
        minHeight: '250px',
        backgroundColor: '#fcfcfa',
        borderRadius: 'none',
        display: 'flex',
        alignItems: 'center',
        // paddingLeft: '4rem',
        // paddingRight: '4rem',
    },
    containerBox: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    containerBoxMobile: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
    },
    statusTop: {
        width: '100%',
        height: 25,
        background: '#4B5548',
        display: 'flex',
        alignItems: 'center',
        color: '#ffffff',
        padding: '0 15px'
    }
}));

export default LayoutStyle;