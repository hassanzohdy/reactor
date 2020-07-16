import { translatedTitle, setDescription } from '../metadata';

export default function Helmet({ title, description }) {
    translatedTitle(title);
    setDescription(description);
    return '';
}