const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const wordDiv = document.querySelector("#word");
const wordP = document.querySelector("#wordP");
const wordBtn = document.querySelector("#wordBtn");

const baseURL = "http://18.220.250.73";

const button1Handler = () => {
  alert("stop clicking on me!");
};
const button2Handler = () => {
  alert("i said! stop clicking on me!");
};

const getWord = () => {
  axios.get(`${baseURL}/word`).then((res) => {
    const data = res.data;
    wordP.textContent = data;
  });
};

button1.addEventListener("click", button1Handler);
button2.addEventListener("click", button2Handler);
wordBtn.addEventListener("click", getWord);
