import React, { useState, useMemo, ChangeEvent } from 'react'
import TopBar from '../components/Appbar/appbar';
import { Box, Container, Paper, Toolbar, Typography } from '@material-ui/core';
import LayoutStyle from './layout-style';
import { Column, Item } from '@mui-treasury/components/flex';
import TemporaryDrawer from '../components/Leftdrawer/left-drawer'
import { useQuery } from '@apollo/client';
import PangeasProducts from '../components/Products/products'
import * as _gQl from '../graphql/graphql-queries'
import { addItemToCart, compareObjectForCartUpdate, removeItemFromCart, removeProductFromCart } from '../utilities';
import PangaeaSelectFilter from '../components/UI/pangaea-select-filter/select-filter'
import { CardProduct, Product } from '../model/api-model';
import useMediaQuery from '@material-ui/core/useMediaQuery';


const Layout = (props: any) => {
    const classes = LayoutStyle();
    const [drawerState, setDrawerState] = useState(false); // Drawer state for toggling the sidebar
    const [cartStorage, setCartStorage] = useState<Array<CardProduct>>([]); // State for storing cart, can use session storage or any other preferred storage here for a real world project
    const matches = useMediaQuery('(min-width:768px)');

    /**
     *  I used React Apollo client useQuery hook to process my query and make a call while capturing loading state, errors and retrieving the data
    */
    const { loading: currencyQueryLoading, error: currencyQueryError, data: currencyData } = useQuery(_gQl.GET_CURRENCY)
    let takenCurrency = currencyData?.currency[0];
    const [selectedCurrency, setSelectedCurrency] = useState(null);

    const { loading: productsQueryLoading, error: productsQueryError, data: productData, refetch, networkStatus } = useQuery(_gQl.GET_PRODUCTS,
        {
            skip: !takenCurrency,
            variables: { takenCurrency },
            notifyOnNetworkStatusChange: true
        });

    const totalQuantityInCart = cartStorage.reduce((initial, current) => initial + current.qty, 0);


    const toggleDrawer = (actionType: boolean) => (event: any) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setDrawerState(actionType);
    };


    // Method that handles filter, input action implemented but not done as it was not instructed
    const handleOnChange = (evt: ChangeEvent<HTMLInputElement>) => {
    }

    // Method that changes refreshes graphql api on currency select to get the updated currency
    const onCurrencySelected = (evt: ChangeEvent<HTMLInputElement>) => {
        console.log(evt.target.value)
        takenCurrency = evt.target.value;
        setSelectedCurrency(takenCurrency);
        refetch({ takenCurrency });
    }

    useMemo(() => {
        if (selectedCurrency && cartStorage.length > 0 && productData?.products.length > 0) {
            compareObjectForCartUpdate(cartStorage, productData?.products);
        }
    }, [selectedCurrency, productData?.products]);


    // Method that initiates adds to cart
    const addItem = (prod: Product) => {
        setDrawerState(true);
        addItemToCart(prod, cartStorage, setCartStorage);
    }

    // Method that initiates remove quantity if more than one or remove item from cart
    const deductItem = (prodId: any) => {
        removeItemFromCart(prodId, cartStorage, setCartStorage)
    }

    // Method that initiates remove product from cart
    const removeProdFromCart = (prodId: number) => {
        removeProductFromCart(prodId, cartStorage, setCartStorage);
    }

    return (
        <Box>
            {/* <Box className={classes.statusTop}>
                <Typography variant="caption">Due to a strain on courier services due to COVID-19 and increased customer demand, there is currently</Typography>
            </Box> */}
            <TopBar clicked={toggleDrawer} totalQuantityInCart={totalQuantityInCart} />
            <Toolbar />
            <Column>
                <Item>
                    <Paper className={classes.paperRoot} >
                        <Container className={matches ? classes.containerBox : classes.containerBoxMobile}>
                            <Column gap={1}>
                                <Item>
                                    <Typography variant="h4"> All Products </Typography>
                                </Item>
                                <Item>
                                    <Typography> A 360° Look Lumen </Typography>
                                </Item>
                            </Column>
                            <Box>
                                <PangaeaSelectFilter handleOnChange={handleOnChange} />
                            </Box>
                        </Container>

                    </Paper>
                </Item>
                <Item>
                    <PangeasProducts
                        productsQueryLoading={productsQueryLoading}
                        productData={productData}
                        currencyQueryLoading={currencyQueryLoading}
                        productsQueryError={productsQueryError}
                        networkStatus={networkStatus}
                        takenCurrency={selectedCurrency || takenCurrency}
                        addItem={addItem}
                    />
                </Item>
            </Column>
            <TemporaryDrawer
                clicked={toggleDrawer}
                productData={productData}
                cartStorage={cartStorage}
                removeCart={deductItem}
                addItem={addItem}
                setCartStorage={setCartStorage}
                selectedCurrency={selectedCurrency}
                takenCurrency={selectedCurrency || takenCurrency}
                drawerState={drawerState}
                currencyData={currencyData}
                onCurrencySelected={onCurrencySelected}
                removeProdFromCart={removeProdFromCart}
                totalQuantityInCart={totalQuantityInCart}
            />
        </Box>
    )
}

export default Layout;