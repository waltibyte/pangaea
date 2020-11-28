import { createMuiTheme } from "@material-ui/core/styles";

// Theme instance for application.
const pagaemTheme = createMuiTheme({
    palette: {
        primary: {
            light: '#778173',
            main: '#4B5548',
            dark: '#232c21',
            contrastText: '#fff',
        },
        secondary: {
            light: '#7889ee',
            main: '#425cbb',
            dark: '#00338a',
            contrastText: '#000',
        },
        background: {
            default: "#E5E5E5;"
        },
        text: {
            secondary: '#666666'
        }
    },
    typography: {
        fontFamily: 'SpaceGrotesk',
        body1: {
            fontFamily: 'SpaceGrotesk',
            fontSize: '14px'
        },
        body2: {
            fontFamily: 'SpaceGrotesk',
            fontSize: '14px'
        },
    },
    shape: {
        borderRadius: 0,
    },
    spacing: 8,
    props: {
        MuiButton: {
            disableRipple: false,
            disableElevation: true,
            variant: 'contained',
            color: 'primary',
        },
        MuiPaper: {
            elevation: 0,
        }
    }
});

pagaemTheme.overrides = {
    MuiButton: {
        root: {
            textTransform: 'none',
            padding: '10px 20px',
            outline: 'none !important'
        },
        fullWidth: {
            maxWidth: '300px'
        }
    },
    MuiPaper: {
        rounded: {
            borderRadius: 5
        }
    },

}

export default pagaemTheme;