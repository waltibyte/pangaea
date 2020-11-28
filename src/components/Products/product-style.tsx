import { makeStyles } from "@material-ui/core";

const ProductStyle = makeStyles(theme => ({
    contentPage: {
        backgroundColor: '#E2E6E3',
        width: '100%',
        '& .internal-page': {
            padding: '4.2rem 0',
        }
    }
}));

export default ProductStyle;