import React from 'react';
import { Grid } from '@material-ui/core';

export default function GridContainer(props) {
    return <Grid spacing={1} container {...props} />
}