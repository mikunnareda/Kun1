const spinner = document.querySelector(".spinner");

let degrees = 0;

const spin = () => {
  console.log("spin!");
  degrees += 1;
  spinner.style.transform = `rotate(${degrees}deg)`;
}

const spinIntervalId = setInterval(spin, 30);
