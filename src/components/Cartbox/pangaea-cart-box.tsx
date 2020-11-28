import PropTypes from "prop-types";
import React from 'react';
import { Avatar, Paper, Typography } from '@material-ui/core';
import { Column, Item, Row } from '@mui-treasury/components/flex';
import { X } from 'react-feather';
import { useDynamicAvatarStyles } from '@mui-treasury/styles/avatar/dynamic';
import PangaeaCartBoxStyle from './pangaea-cart-box-style';

type CartBoxProps = {
    cartStorage: Array<any>,
    addItem: any,
    removeProdFromCart: any,
    removeCart: any,
    takenCurrency: any,
    total: any
}

const PangaeaCartBox = (props: CartBoxProps) => {
    const {cartStorage, addItem, removeProdFromCart, removeCart, takenCurrency} = props;
    const avatarStyles = useDynamicAvatarStyles({ size: 30 });
    const classes = PangaeaCartBoxStyle();

    return (
        <Column className={classes.cartBox}>
        {
            cartStorage.map((res: any, index: any) => {
                const { id, qty, product: { title, image_url, price } } = res; // Destruction all the variable needed for easier use and maintainable
                const productPrice = price * qty; // Get the total sum of a product by quantity
                return (
                    <Item mb={1} key={index}>
                        <Paper className={classes.paperRoot}>
                            <X className="icon-x" size={10} style={{ cursor: 'pointer' }} onClick={() => removeProdFromCart(id)} />
                            <Column gap={1} px={1.5}>
                                <Item>
                                    <Typography variant="body2"> {title} </Typography>
                                </Item>
                                <Item alignSelf="flex-end" pr={4}>
                                    <Avatar classes={avatarStyles} src={image_url} />
                                </Item>
                                <Item>
                                    <Row alignItems="center" width="100%">
                                        <Item width="50%">
                                            <Row gap={0} alignItems="center">
                                                <Item>
                                                    <button className={classes.firstNormalBtn} onClick={() => removeCart(id)}>-</button>
                                                </Item>
                                                <Item>
                                                    <span className={classes.spanBox}>{qty}</span>
                                                </Item>
                                                <Item>
                                                    <button className={classes.secNormalBtn} onClick={() => addItem(res)}>+</button>
                                                </Item>
                                            </Row>
                                        </Item>
                                        <Item width="50%"> {takenCurrency} {productPrice} </Item>
                                    </Row>
                                </Item>
                            </Column>
                        </Paper>
                    </Item>
                )
            })
        }
    </Column>
    );
};

PangaeaCartBox.propTypes = {
  addItem: PropTypes.func,
  cartStorage: PropTypes.any,
  removeProdFromCart: PropTypes.any,
  removeCart: PropTypes.func,
  takenCurrency: PropTypes.any,
  total: PropTypes.any
}

export default PangaeaCartBox;
