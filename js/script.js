const encodeContainer = document.querySelector(".encode");
const decodeContainer = document.querySelector(".decode");
const send = document.getElementById("send");
const decode = document.getElementById("decode");
const sendBtn = document.querySelector(".send");
const retrieveBtn = document.querySelector(".retrieve");

const token = document.getElementById("token");

window.addEventListener("onload", showDefaults());

const radioBtn = document.querySelectorAll('input[name="send-receive"]');
radioBtn.forEach((btn) => {
  btn.addEventListener("change", showDefaults);
});

function showDefaults() {
  if (send.checked) {
    encodeContainer.style.display = "block";
    decodeContainer.style.display = "none";
    sendBtn.style.display = "block";
    retrieveBtn.style.display = "none";
  } else if (receive.checked) {
    encodeContainer.style.display = "none";
    decodeContainer.style.display = "block";
    sendBtn.style.display = "none";
    retrieveBtn.style.display = "block";
  }
}

function genrateToken() {
  return Math.floor(Math.random() * 10000 + 1);
}

const generatedtoken = [];

const saveBtn = document.querySelector(".send");
saveBtn.addEventListener("click", function (e) {
  e.preventDefault();
  token.value = genrateToken();
  generatedtoken.push(token.value);
});

const copyToken = document.querySelector(".copy-token");
copyToken.addEventListener("click", function () {
  let copyTokens = document.getElementById("token");
  copyTokens.select();
  copyTokens.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyTokens.value);
  alert("Copied the Token: " + copyTokens.value);
});

const copyTextData = document.querySelector(".copy-text");
copyTextData.addEventListener("click", function () {
  let copyTextDatas = document.getElementById("text-data2");
  copyTextDatas.select();
  copyTextDatas.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyTextDatas.value);
  alert("Copied the Text Data: " + copyTextDatas.value);
});
