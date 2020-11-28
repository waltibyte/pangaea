import React from 'react';
import { Avatar, Box, Button, Grid, Paper, Typography } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Column, Item } from '@mui-treasury/components/flex';
import { useDynamicAvatarStyles } from '@mui-treasury/styles/avatar/dynamic';
import ProductStyle from './product-style';
import { Product } from '../../model/api-model';

const PangeasProducts = (props: any) => {
    const {
        productsQueryLoading,
        productData,
        currencyQueryLoading,
        productsQueryError,
        takenCurrency,
        addItem,
        networkStatus
    } = props;
    const avatarStyles = useDynamicAvatarStyles({ size: 180 });
    const avatarStylesMobile = useDynamicAvatarStyles({ size: 100 });
    const matches = useMediaQuery('(min-width:768px)');
    const classes = ProductStyle();

    return (
        <Paper className={classes.contentPage}>
            <Box className="internal-page">
                <Grid container direction="row">
                    {
                        (!currencyQueryLoading && !productsQueryLoading && !productsQueryError) && networkStatus ?
                            productData?.products.map((prod: Product, index: number) => (
                                <Grid key={index} item xs={matches ? 4 : 6}>
                                    <Column alignItems="center" gap={1} mt={1} mb={10}>
                                        <Item>
                                            <Avatar classes={matches ? avatarStyles : avatarStylesMobile} variant="square" src={prod.image_url} />
                                        </Item>
                                        <Item>
                                            <Typography align="center" color="textSecondary">{prod.title}</Typography>
                                        </Item>
                                        <Item>
                                            <Typography align="center">{takenCurrency} {prod.price}</Typography>
                                        </Item>
                                        <Item>
                                            <Button onClick={() => addItem(prod)}>Add to Cart</Button>
                                        </Item>
                                    </Column>
                                </Grid>
                            ))
                            :
                            productsQueryError ?
                                <Box display="flex" justifyContent="center" alignItems="center" style={{ width: '100%'}}>
                                    <Column>
                                        <Item>
                                            <Typography> Sorry the currency is not available at the moment.</Typography>
                                        </Item>
                                        <Item>
                                            <Typography> Kindly select another currently.</Typography>
                                        </Item>
                                    </Column>
                                </Box>
                                :
                                Array.from(Array(10).keys()).map((prod: any, index: number) => (
                                    <Grid key={index} item xs={4}>
                                        <Column alignItems="center" gap={1}>
                                            <Item>
                                                <Skeleton variant="circle" width={180} height={180} />
                                            </Item>
                                            <Item>
                                                <Skeleton variant="rect" width={200} />
                                            </Item>
                                            <Item>
                                                <Skeleton variant="rect" width={100} />
                                            </Item>
                                            <Item>
                                                <Skeleton variant="rect" width={150} />
                                            </Item>
                                        </Column>
                                    </Grid>
                                ))

                    }
                </Grid>
            </Box>
        </Paper>
    )
}

export default React.memo(PangeasProducts);