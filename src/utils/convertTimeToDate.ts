export const convertTimeToDate = (time: string): Date => {
    if (!time) return new Date();

    const [hour, minute] = time.split(":").map(Number);
    
    const date = new Date();
    date.setHours(hour, minute, 0);

    return date;
}

export const convertDateToTime = (dateString: string): string => {
    if (!dateString) return "";

    const date = new Date(dateString);

    return date.toTimeString().slice(0, 5);
}