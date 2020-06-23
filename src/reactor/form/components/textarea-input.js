import withInputType from '../utils/withInputType';

const TextAreaInput = withInputType('email', {
    rows: 8,
    multiline: true,
}); 

export default TextAreaInput;