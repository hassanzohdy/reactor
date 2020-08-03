import React from 'react';
import FileInput from './FileInput';
import StaticButton from './StaticButton';
import { styled } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';

const imagePlaceholder = 'https://lunawood.com/wp-content/uploads/2018/02/placeholder-image.png';

const Image = styled('img')(({theme}) => ({
    width: theme.spacing(15),
    height: theme.spacing(15),
}));

const ImageButton = styled(StaticButton)({
    background: grey[200],    
});

const acceptedExtensions = [
    'jpg', 'jpeg', 'png', 'gif', 'webp', 'bmp', 'ico'
];

export default function ImageInput(props) {
    const [selectedImage, selectImage] = React.useState(props.value || imagePlaceholder);

    const ButtonComponent = componentProps => {
        return <ImageButton {...componentProps}>
            <Image src={selectedImage} />
        </ImageButton>
    };

    const onFileSelection = e => {
        selectImage(URL.createObjectURL(e.target.files[0]));        
    };

    return <FileInput accept={acceptedExtensions} {...props} onChange={onFileSelection} buttonComponent={ButtonComponent} />
}