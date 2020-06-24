import React from 'react';
import { styled } from '@material-ui/core';


const MyButton = (props) => {
    const {className, children} = props;
    
    return <button className={className} children={children} />
};


// export const Div = props => <div style={{border: '1px solid red'}} {...props} />

export const TestButton = styled(MyButton)(props => {
    console.log(props);
    
    return {
        background: props.eating ? 'red': 'orange',
        color: 'white',
    }
})

export const Div = styled('div')(({ theme }) => {
    return {
        border: '1px solid red',
        margin: theme.spacing(10)
    }
});