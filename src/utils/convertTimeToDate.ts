export const convertTimeToDate = (time: string): Date => {
    if (!time) return new Date();

    const [hour, minute] = time.split(":").map(Number);
    
    const date = new Date();
    date.setHours(hour, minute, 0);

    return date;
}