// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const body = document.querySelector("body");

const handleResize = () => {
    if (window.innerWidth > 1000) {
        body.style.backgroundColor = "darksalmon";
    } else if (window.innerWidth < 500) {
        body.style.backgroundColor = "slateblue";
    } else {
        body.style.backgroundColor = "palevioletred";
    }
};

window.addEventListener("resize", handleResize);
