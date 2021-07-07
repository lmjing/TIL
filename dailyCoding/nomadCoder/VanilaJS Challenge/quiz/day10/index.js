const clockTitle = document.querySelector(".js-clock");
const christmas = new Date(2021, 11, 25);

const timer = function () {
    const now = new Date();
    let diff = christmas - now;

    const diffDay = Math.ceil(diff / (1000 * 60 * 60 * 24));
    const diffHour = Math.ceil((diff / (1000 * 60 * 60)) % 24);
    const diffMinute = Math.ceil((diff / (1000 * 60)) % 60);
    const diffSecond = Math.ceil((diff / 1000) % 60);

    const hour = String(diffHour).padStart(2, "0");
    const minute = String(diffMinute).padStart(2, "0");
    const second = String(diffSecond).padStart(2, "0");

    clockTitle.innerText = `${diffDay}d ${hour}h ${minute}m ${second}s`;
};

setInterval(timer, 1000);
