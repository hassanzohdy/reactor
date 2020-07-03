import Globals from "reactor/globals";
import Is from "@flk/supportive-is";
import { Obj } from "reinforcements";

export default function MultiLingualFormatter({ column }) {
    const { value } = column;

    if (! value || ! Is.object(value)) return '';

    return Obj.get(value, Globals.localeCode);
}