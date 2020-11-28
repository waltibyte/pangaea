import React, { forwardRef } from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Select, { SelectProps } from '@material-ui/core/Select';
import clsx from 'clsx';
import { Input } from '@material-ui/core';
import PangaeaCustomSelect from './pangaea-select-style';


const PangaeaSelect = forwardRef((props: SelectProps, ref) => {
    const classes = PangaeaCustomSelect();

    const iconComponent = (props: any) => {
        return (
            <ExpandMoreIcon className={clsx(props.className, classes.icon)} />
        )
    };

    // moves the menu below the select input
    const menuProps: any = {
        classes: {
            paper: classes.paper,
            list: classes.list
        },
        anchorOrigin: {
            vertical: "bottom",
            horizontal: "left"
        },
        transformOrigin: {
            vertical: "top",
            horizontal: "left"
        },
        getContentAnchorEl: null,
        // open: !props.open
    };

    return (
        <Select
            variant="standard"
            classes={{ root: classes.select }}
            MenuProps={menuProps}
            input={<Input />}
            {...props}
            IconComponent={iconComponent}
        >
            { props.children}
        </Select>
    );
})

PangaeaSelect.propTypes = {

};

export default PangaeaSelect;
