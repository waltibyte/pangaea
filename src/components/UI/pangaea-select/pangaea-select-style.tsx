import { fade, makeStyles } from '@material-ui/core';


const PangaeaCustomSelect = makeStyles((theme) => ({
    select: {
        minWidth: 200,
        background: '#fcfcfa',
        fontWeight: 200,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: 'rgba(0,0,0, 0.1)',
        paddingLeft: 24,
        paddingTop: 16.69,
        paddingBottom: 16.69,
        "&:focus": {
            boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 0.06rem`,
            borderColor: 'rgba(0,0,0, 0.1)',
        },
        "&.Mui-error": {
            boxShadow: `${fade(theme.palette.error.main, 0.25)} 0 0 0 0.2rem`,
            borderColor: theme.palette.error.main,
            backgroundColor: theme.palette.error.light,
        }
    },
    icon: {
        color: `#666666 !important`,
        right: 25,
        transition: theme.transitions.create(["transform"], {
            duration: theme.transitions.duration.short
        }),
        position: 'absolute',
        userSelect: 'none',
        pointerEvents: 'none',
    },
    paper: {
        borderRadius: 2,
    },
    list: {
        paddingTop: 0,
        paddingBottom: 0,
        background: '#ffffff',
        "& li": {
            fontWeight: theme.typography.fontWeightLight,
            paddingTop: 10,
            paddingBottom: 10,
        },
        "& li:hover": {
            background: `rgba(0, 0, 0, 0.04)`
        },
        "& li.Mui-selected": {
            background: `rgba(0, 0, 0, 0.08)`
            // background: `${theme.palette.primary.main}`
        },
        "& li.Mui-selected:hover": {
            background: `rgba(0, 0, 0, 0.04)`
            // background: `${theme.palette.primary.main}`
        }
    }
}));

export default PangaeaCustomSelect;