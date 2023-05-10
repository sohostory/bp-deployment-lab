const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");

const button1Handler = () => alert("stop clicking on me!");
const button2Handler = () => alert("i said! stop clicking on me!");

button1.addEventListener("click", button1Handler);
button2.addEventListener("click", button2Handler);
