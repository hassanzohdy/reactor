export default function NumberFormatter({ column }) {
    return Number(column.value).toLocaleString();
}