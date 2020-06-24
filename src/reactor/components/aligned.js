import React from 'react';
import { Typography } from '@material-ui/core';

export const TextCenter = props => <Typography component="div" align="center" {...props} />
export const TextLeft = props => <Typography component="div" align="left" {...props} />
export const TextRight = props => <Typography component="div" align="right" {...props} />
export const TextJustify = props => <Typography component="div" align="justify" {...props} />