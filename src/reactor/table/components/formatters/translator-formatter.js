import { trans } from "reactor/localization";

export default function TranslatorFormatter({ column }) {
    const { value } = column;

    return value ? trans(value) : '';
}