export function calculateTimeRemaining(targetDate) {
    const currentDate = new Date();
    const timeRemaining = targetDate - currentDate;

    if (timeRemaining <= 0) {
        return {
            hours: 0,
            mins: 0,
            secs: 0,
        };
    }

    const hours = Math.floor(timeRemaining / (1000 * 60 * 60));
    const mins = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    return {
        hours,
        mins,
        secs,
    };
}