import React from 'react';
import { AppBar, Box, Toolbar, Typography, Badge, Hidden } from '@material-ui/core';
import AppBarStyle from './appbar-style';
import { Row, Item } from '@mui-treasury/components/flex';
import { ShoppingCart } from 'react-feather';

type TProps = {
    clicked: any,
    totalQuantityInCart: any
}

const TopBar = (props: TProps) => {
    const { clicked, totalQuantityInCart } = props;

    const classes = AppBarStyle();

    return (
        <Box className={classes.root}>
            <AppBar position="fixed" color="inherit" elevation={0} className={classes.appBar} >
                <Toolbar disableGutters classes={{ root: classes.toolbarRoot }}>
                    <Row gap={2}>
                        <Item mr={6}>
                            <Typography style={{ marginRight: 20, letterSpacing: 20 }}>LUMIN</Typography>
                        </Item>
                        <Hidden mdDown>
                            <Item>
                                <Typography>Shop</Typography>
                            </Item>
                        </Hidden>
                        <Hidden mdDown>
                            <Item>
                                <Typography>Learn</Typography>
                            </Item>
                        </Hidden>
                    </Row>
                    <Row gap={2} alignItems="center">
                        <Hidden mdDown>
                            <Item>
                                <Typography>Accounts</Typography>
                            </Item>
                        </Hidden>
                        <Item>
                            <Badge
                                badgeContent={totalQuantityInCart}
                                style={{ cursor: 'pointer ' }}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                onClick={clicked(true)}
                                color="primary">
                                <ShoppingCart size={18} />
                            </Badge>
                        </Item>
                    </Row>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default TopBar;