const encodeContainer = document.querySelector(".encode");
const decodeContainer = document.querySelector(".decode");
const send = document.getElementById("send");
const decode = document.getElementById("decode");
const sendBtn = document.querySelector(".send");
const retrieveBtn = document.querySelector(".retrieve");
const textData = document.getElementById("text");
const fileData = document.getElementById("file");
const token3 = document.querySelector(".token3");
const fileType = document.querySelector(".file-type");

const token = document.getElementById("token");
const saveFile = document.querySelector(".save-file-option");

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
    fileType.style.display = "block";
  } else if (receive.checked) {
    encodeContainer.style.display = "none";
    decodeContainer.style.display = "block";
    sendBtn.style.display = "none";
    retrieveBtn.style.display = "block";
    fileType.style.display = "none";
    token3.style.display = "none";
  }
}
const radioBtnFileType = document.querySelectorAll('input[name="data-type"]');
radioBtnFileType.forEach((btn) => {
  btn.addEventListener("change", function () {
    if (textData.checked) {
      document.querySelector(".file-option").style.display = "none";
      encodeContainer.style.display = "block";
      token3.style.display = "none";
    } else if (fileData.checked) {
      document.querySelector(".file-option").style.display = "block";
      encodeContainer.style.display = "none";
      decodeContainer.style.display = "none";
      token3.style.display = "block";
    }
  });
});

function genrateToken() {
  return Math.floor(Math.random() * 10000 + 1);
}

const tokenGene = [];

const saveBtn = document.querySelector(".send");
saveBtn.addEventListener("click", function (e) {
  e.preventDefault();
  token.value = genrateToken();
  token3.value = genrateToken();
  tokenGene.push(token.value);
});

const copyBtn = document.querySelector(".fa-data");
copyBtn.addEventListener("click", function () {
  let copyText = document.getElementById("text-data");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyText.value);
  alert("Copied the text: " + copyText.value);
});
