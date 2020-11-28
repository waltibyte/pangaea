import React from 'react';
import { Controller, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import { FormControl, MenuItem, Typography } from '@material-ui/core';
import PangaeaSelect from '../pangaea-select/pangaea-select'
import * as yup from 'yup';


const filterSchema = yup.object().shape({
    filter: yup.string(),
});

type FilterProps = {
    handleOnChange: any
}

const PangaeaSelectFilter = (props: FilterProps) => {
    const { handleOnChange } = props;
    // Use react form hook to manage form controls, although for smaller form or one input it can be done pretty basic
    const { control, watch } = useForm({
        resolver: yupResolver(filterSchema)
    });

    const getFiltered = watch('filter');


    return (
        <FormControl fullWidth={true}>
            <Controller
                as={
                    <PangaeaSelect
                        displayEmpty
                        disableUnderline
                        onChange={handleOnChange}
                        renderValue={
                            getFiltered !== undefined ?
                                getFiltered?.toString() !== '' ? undefined : () => <Typography color="textSecondary"> Filter </Typography> :
                                getFiltered === undefined ? () => <Typography> Filter </Typography> :
                                    undefined
                        }
                    >
                        <MenuItem value="20">20</MenuItem>
                        <MenuItem value="30">30</MenuItem>
                        <MenuItem value="40">40</MenuItem>

                    </PangaeaSelect>
                }
                name="filter"
                control={control}
                defaultValue=""
            />
        </FormControl>
    )
}

export default PangaeaSelectFilter;