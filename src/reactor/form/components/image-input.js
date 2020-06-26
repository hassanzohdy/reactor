import React from 'react';
import FileInput from './file-input';
import StaticButton from './static-button';
import { styled, IconButton } from '@material-ui/core';
import RemoveIcon from '@material-ui/icons/DeleteForever';
import Tooltip from '../../components/tooltip';
import { red, grey } from '@material-ui/core/colors';
import ColoredIcon from '../../components/colored-icon';

const imagePlaceholder = 'https://complianz.io/wp-content/uploads/2019/03/placeholder-300x202.jpg';

const Image = styled('img')(({ theme }) => ({
    width: theme.spacing(20),
    height: theme.spacing(20),
}));

const ImageButton = styled(StaticButton)({
    border: '1px solid ' + grey[200],
});

export default function ImageInput(props) {
    const [selectedImage, selectImage] = React.useState(imagePlaceholder);

    const fileInput = React.useRef();

    const onFileSelection = e => {
        selectImage(URL.createObjectURL(e.target.files[0]));
    };

    const ImageComponent = function (componentProps) {
        return (
            <>
                <ImageButton {...componentProps}>
                    <Image src={selectedImage} />
                </ImageButton>
                {
                    selectedImage != imagePlaceholder && props.required !== true &&
                    <Tooltip title="Remove">
                        <IconButton onClick={unselectImage}>
                            <ColoredIcon icon={RemoveIcon} color={red[400]} />
                        </IconButton>
                    </Tooltip>
                }
            </>
        );
    }

    const unselectImage = e => {
        fileInput.current.value = '';
        selectImage(imagePlaceholder)
    };

    return (
        <FileInput accept=".jpg,.png,.webp,.gif,.ico,.jpeg" {...props} inputRef={fileInput} onChange={onFileSelection} buttonComponent={ImageComponent} />
    )
}