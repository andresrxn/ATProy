
import { CountUp } from "../counterup.js";

// const options = {
//     decimalPlaces: 0,
//     duration: 1.8,
//     separator: ",",
//     useGrouping: true,
//     useEasing: true,
//     smartEasingThreshold: 200,
//     smartEasingAmount: 200,

// };
let optionsObv = {
    threshold: 0.5
};

let observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const counter = entry.target;

        let demo = new CountUp(counter, counter.dataset.counter);
        if (!demo.error) {
            demo.start();
            observer.unobserve(counter)
        } else {
            console.error(stars.error, users.error);
        }
    });
}, optionsObv);


const counters = document.querySelectorAll('[data-counter]')
counters.forEach(counter => {

    observer.observe(counter);
});
