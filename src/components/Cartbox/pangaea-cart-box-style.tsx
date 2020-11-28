import { makeStyles } from '@material-ui/core';


const PangaeaCartBoxStyle = makeStyles((theme) => ({
    paperRoot: {
        position: 'relative',
        backgroundColor: '#ffffff',
        '& .icon-x': {
            position: 'absolute',
            top: 2,
            right: 5
        }
    },
    firstNormalBtn: {
        backgroundColor: '#ffffff',
        height: 24,
        boxSizing: 'border-box',
        borderRight: 0,
        borderTop: '1px solid rgba(0,0,0, 0.2)',
        borderLeft: '1px solid rgba(0,0,0, 0.2)',
        borderBottom: '1px solid rgba(0,0,0, 0.2)'
    },
    spanBox: {
        paddingBottom: 0.6,
        borderTop: '1px solid rgba(0,0,0, 0.2)',
        borderBottom: '1px solid rgba(0,0,0, 0.2)',
    },
    secNormalBtn: {
        backgroundColor: '#ffffff',
        height: 24,
        boxSizing: 'border-box',
        borderLeft: 0,
        borderTop: '1px solid rgba(0,0,0, 0.2)',
        borderRight: '1px solid rgba(0,0,0, 0.2)',
        borderBottom: '1px solid rgba(0,0,0, 0.2)'
    },
    cartBox: {
        overflowY: 'auto',
        maxHeight: '65vh',
        '&::-webkit-scrollbar': {
            width: '0.4em'
        },
        '&::-webkit-scrollbar-track': {
            boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
            webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)'
        },
        '&::-webkit-scrollbar-thumb': {
            backgroundColor: 'rgba(0,0,0,.1)',
            outline: '1px solid slategrey'
        }
    }
}));

export default PangaeaCartBoxStyle;