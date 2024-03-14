console.log("hello");
//regex cho email
const regexEmail =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
// nut submit tren form email
const submitBtn = document.getElementById("submit");
//truong input form email
const emailInput = document.getElementById("email");
// message hien thi
const message = document.getElementById("message");
// The div chua form sign in 
const divSubcribe = document.querySelector(".subcribe");
//div chua thong tin CV
const divInfo = document.querySelector(".display-info");
// Danh sach cac element trong muc job-info
const elements = document.querySelectorAll(".element");

//them event cho nut submit
submitBtn.addEventListener("click", onSubmitBtnClick);

//Them cac hanh dong logic cho cac element
for (let i = 0; i < elements.length; i++) {
  const elementBtn = elements[i].querySelector(".element-btn");
  const elementInfo = elements[i].querySelector(".element-info");
  //them hanh dong hover cho element
  elements[i].addEventListener("mouseover", (addclass) => {
    elements[i].classList.add("hover");
    if (!elements[i].classList.contains("active")) {
      elementBtn.classList.remove("d-none");
    }
  });
  // them hanh dong un-hover cho element
  elements[i].addEventListener("mouseout", (removeclass) => {
    elements[i].classList.remove("hover");
    if (!elements[i].classList.contains("active")) {
      elementBtn.classList.add("d-none");
    }
  });
  // them hanh dong cho nut "VIEW MORE" cua cac element
  elementBtn.addEventListener("click", (hell) => {
    if (!elements[i].classList.contains("active")) {
        // hiem thi thong tin ra neu dang bi an
      elementInfo.classList.remove("d-none");
      elements[i].classList.add("active");
      elementBtn.innerHTML =
        '<i class="fa-solid fa-caret-up mr-2"></i>' + "<span> View Less</span>";
    } else {
        //an thong tin di neu dang hien thi
      elementInfo.classList.add("d-none");
      elements[i].classList.remove("active");
      elementBtn.innerHTML =
        '<i class="fa-solid fa-caret-down mr-2"></i>' +
        "<span> View More</span>";
    }
  });
}

function onSubmitBtnClick() {
  let email = String(emailInput.value);
    //neu nguoi dung nhap vao thong tin sai format se hien thi loi
  if (!email.toLowerCase().match(regexEmail)) {
    displayMessage("Input does not match email format", true);
    return;
  }
  console.log("success");
  displayInformation();
}
//hien thị message cho hanh dong sign in
function displayMessage(message, error = false) {
  this.message.textContent = message;
  if (error) {
    this.message.style.color = "red";
  }
}
//hien thi thong tin CV
function displayInformation() {
  divSubcribe.classList.toggle("d-none");
  divInfo.classList.toggle("d-none");
}
