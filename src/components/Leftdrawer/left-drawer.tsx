import React, { memo } from 'react';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import { Column, Item, Row } from '@mui-treasury/components/flex';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import LeftDrawerStyle from './left-drawer-style'
import { Box, Paper, Typography } from '@material-ui/core';
import CurrencySelect from '../UI/pangea-currency-select/currency-select'
import PangaeaCartBox from '../Cartbox/pangaea-cart-box';

const TemporaryDrawer = React.forwardRef<HTMLDivElement, any>((props: any, ref) => {
    const {
        clicked,
        drawerState,
        cartStorage,
        addItem,
        removeCart,
        currencyData,
        onCurrencySelected,
        takenCurrency,
        totalQuantityInCart,
        removeProdFromCart
    } = props;
    const classes = LeftDrawerStyle();

    // Get the grand sum of all products added to the cart in respect to the quantity
    const total = cartStorage.reduce((initial: any, current: any) => initial + (current.qty * current.product.price), 0)

    const list = (
        <div
            className={classes.list}
            role="presentation"
            onKeyDown={clicked(true)}
        >
            <Column gap={1.2}>
                <Item>
                    <Row alignItems="center" width={'100%'}>
                        <Item width={'50%'}>
                            <ExpandMoreIcon className={classes.icon} onClick={clicked(false)} />
                        </Item>
                        <Item width={'50%'}>
                            <Row alignItems="center">
                                <Item>
                                    <Typography variant="subtitle2" style={{ fontSize: 10 }} color="textSecondary" align="center">YOUR CART</Typography>
                                </Item>
                                <Box component="span" className={classes.qInCart}>{totalQuantityInCart}</Box>
                            </Row>
                        </Item>
                    </Row>
                </Item>
                <Item mt={'-12px'}>
                    <CurrencySelect currencyData={currencyData} onCurrencySelected={onCurrencySelected} />
                </Item>
                <Item>
                    <PangaeaCartBox
                        cartStorage={cartStorage}
                        addItem={addItem}
                        takenCurrency={takenCurrency}
                        removeProdFromCart={removeProdFromCart}
                        removeCart={removeCart}
                    />
                </Item>
            </Column>
            <Box position="absolute" bottom={50} width="100%">
                <Column gap={1}>
                    <Item>
                        <Divider variant="fullWidth" />
                    </Item>
                    <Item>
                        <Row justifyContent="space-between">
                            <Item>
                                <Typography>Subtotal</Typography>
                            </Item>
                            <Item>
                                <Typography>{takenCurrency} {total}</Typography>
                            </Item>
                        </Row>
                    </Item>
                    <Item>
                        <Paper className={classes.paymentPanel}>
                            <Typography align="center" color="textSecondary">MAKE THIS A SUBSCRIPTION PAY (20%)</Typography>
                        </Paper>
                    </Item>
                    <Item width="100%">
                        <Button fullWidth={true} style={{ maxWidth: 334 }}>PROCEED TO CHECKOUT</Button>
                    </Item>
                </Column>

            </Box>
        </div>
    );

    return (
        <div ref={ref}>
            <React.Fragment>
                <Drawer anchor="right" classes={{ paper: classes.drawerPaper }} open={drawerState} onClose={clicked(false)}>
                    {list}
                </Drawer>
            </React.Fragment>
        </div>
    );
});

export default memo(TemporaryDrawer);
