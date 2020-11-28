import React, { useState, useMemo, ChangeEvent } from 'react'
import TopBar from '../components/Appbar/appbar';
import { Box, Container, Paper, Toolbar, Typography } from '@material-ui/core';
import LayoutStyle from './layout-style';
import { Column, Item } from '@mui-treasury/components/flex';
import TemporaryDrawer from '../components/Leftdrawer/left-drawer'
import { useQuery } from '@apollo/client';
import PangeasProducts from '../components/Products/products'
import * as _gQl from '../graphql/graphql-queries'
import PangaeaSelectFilter from '../components/UI/pangaea-select-filter/select-filter'

const Layout = (props: any) => {
    const classes = LayoutStyle();
    const [drawerState, setDrawerState] = useState(false); // Drawer state for toggling the sidebar
    const [cartStorage, setCartStorage] = useState<Array<any>>([]); // State for storing cart, can use session storage or any other preferred storage here for a real world project


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


    // Method that initiates adds to cart
    const addItem = (prod: any) => {
        setDrawerState(true);
    }

    // Method that initiates remove quantity if more than one or remove item from cart
    const deductItem = (prodId: any) => {
    }

    return (
        <Box>
            {/* <Box className={classes.statusTop}>
                <Typography variant="caption">Due to a strain on courier services due to COVID-19 and increased customer demand, there is currently</Typography>
            </Box> */}
            <TopBar clicked={toggleDrawer} />
            <Toolbar />
            <Column>
                <Item>
                    <Paper className={classes.paperRoot} >
                        <Container className={classes.containerBox}>
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
            />
        </Box>
    )
}

export default Layout;