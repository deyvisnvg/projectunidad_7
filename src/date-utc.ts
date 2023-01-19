import moment from "moment";

export const dateFormatYMDTime = (fecha: string) => {
    const dateTime = moment(fecha).toDate();

    return dateTime;
}