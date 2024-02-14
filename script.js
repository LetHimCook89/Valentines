import confetti from "https://cdn.skypack.dev/canvas-confetti";
// confetti();

window.addEventListener("DOMContentLoaded", () => {
  const rows = document.querySelectorAll(".row");
  const yes = document.querySelector("#yes");
  const no = document.querySelector("#no");
  const red = document.querySelectorAll(".red");
  const display = document.querySelector("#q");

  const audio = new Audio("audio.mp3");
  audio.loop = true;
  console.log(audio.volume);
  audio.volume = 0.5;
  console.log(audio.defaultPlaybackRate);

  for (let i = 0; i < rows.length; i++) {
    rows[i].style.animationName = "None";
  }

  yes.addEventListener("click", () => {
    audio.play();
    confetti();
    no.style.transform = `translate(0px, 0px)`;
    for (let i = 0; i < red.length; i++) {
      red[i].style.animationName = "red";
      red[i].style.animationFillMode = "forwards";
    }
    for (let i = 0; i < rows.length; i++) {
      let className = rows[i].classList[1];
      rows[i].style.animationName = className;
      rows[i].style.animationFillMode = "forwards";
    }
    let txt = display.innerText;
    let i = txt.length;
    let txt1 = "Meet You Tomorrow at 6:00 PM, Baby Girl !!! 😉😘";
    let i1 = 0;
    function typeWriter() {
      if (i >= 0) {
        txt = txt.slice(0, i);
        display.innerText = txt;
        i--;
        setTimeout(typeWriter, 150);
      } else {
        if (i1 < txt1.length) {
          display.innerHTML += txt1.charAt(i1);
          i1++;
          setTimeout(typeWriter, 150);
        }
      }
    }
    typeWriter();
    // let txt1 = "Meet You Tomorrow at 6:00 PM, Baby Girl!!! 😉 😘";
    // let i1 = 0;
    // function writer() {
    //   if (i < txt1.length) {
    //     display.innerText += txt1.charAt(i1);
    //     i1++;
    //     setTimeout(writer, 100);
    //   }
    // }
    // writer();
    // display.innerText = "Meet You Tomorrow at 6:00 PM, Baby Girl!!! 😉 😘";
    yes.style.display = "none";
    no.style.display = "none";
  });
  no.addEventListener("mouseover", () => {
    let left = Math.floor(Math.random() * 1201) - 700 + "px";
    let top = Math.floor(Math.random() * 701) - 650 + "px";
    no.style.transform = `translate(${left}, ${top})`;
    setTimeout(() => {
      no.style.transform = `translate(0px, 0px)`;
    }, 5000);
  });
});
