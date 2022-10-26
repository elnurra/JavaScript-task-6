const emails = [];
const firstEmail = "elnur@code.edu.az";
const secondEmail = "ceyhun@gmail.com";
const thirdEmail = "ali@outlook.com";
const forthEmail = "nicat@email.ru";
const fifthEmail = "aydan@asoiu.edu.az";
emails.push(firstEmail, secondEmail, thirdEmail, forthEmail, fifthEmail);
// localStorage.setItem(firstEmail, "123");
// localStorage.setItem(secondEmail, "1234565yamate");
// localStorage.setItem(thirdEmail, "ali1234");
// localStorage.setItem(forthEmail, "niko1985");
// localStorage.setItem(fifthEmail, "aydan2004");

const form = document.addEventListener("submit", (e) => {
  e.preventDefault();
});

const passwords = [];
const firstPassword = "123";
const secondPassword = "1234";
const thirdPassword = "12345";
const fourthPassword = "123456";
const fifthPassword = "1234567";
passwords.push(
  firstPassword,
  secondPassword,
  thirdPassword,
  fourthPassword,
  fifthPassword
);
console.log(emails);
console.log(passwords);

const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const pEmail = document.querySelector(".email");
const pPassword = document.querySelector(".password");
const btn = document.querySelector(".submit");
const checkbox = [];
let condition = false;

let email;
let password;
btn.addEventListener("click", () => {
  for (let i = 0; i < emails.length; i++) {
    if (emails[i] === emailInput.value) {
      for (let j = 0; j < passwords.length; j++) {
        if (passwords[j] === passwordInput.value) {
          alert("Xos geldiniz");
          email = emails[i];
          password = passwords[j];
          checkbox.push(password);
          condition = true;
          break;
        } else {
          condition = false;
        }
      }
    }
  }
  if (condition) {
    const interval = setInterval(() => {
      emailInput.style.display = "none";
      passwordInput.style.display = "none";
      pEmail.style.display = "block";
      pEmail.innerText = `${email}`;
      pPassword.style.display = "block";
      pPassword.innerText = `${password}`;
      btn.style.display = "none";
      localStorage.setItem(emailInput.value, passwordInput.value);
      console.log(localStorage.getItem(emailInput.value));
    }, 1000);
  } else {
    alert("Parol yada login sehvdi");
  }
});

const interval = setInterval(() => {
  if (localStorage.getItem("elnur@code.edu.az")) {
    emailInput.style.display = "none";
    passwordInput.style.display = "none";
    pEmail.style.display = "block";
    pEmail.innerText = `elnur@code.edu.az`;
    pPassword.style.display = "block";
    pPassword.innerText = `${localStorage.getItem("elnur@code.edu.az")}`;
    btn.style.display = "none";
  }
  if (localStorage.getItem("ceyhun@gmail.com")) {
    emailInput.style.display = "none";
    passwordInput.style.display = "none";
    pEmail.style.display = "block";
    pEmail.innerText = `ceyhun@gmail.com`;
    pPassword.style.display = "block";
    pPassword.innerText = `${localStorage.getItem("ceyhun@gmail.com")}`;
    btn.style.display = "none";
  }
  if (localStorage.getItem("ali@outlook.com")) {
    emailInput.style.display = "none";
    passwordInput.style.display = "none";
    pEmail.style.display = "block";
    pEmail.innerText = `ali@outlook.com`;
    pPassword.style.display = "block";
    pPassword.innerText = `${localStorage.getItem("ali@outlook.com")}`;
    btn.style.display = "none";
  }
  if (localStorage.getItem("nicat@email.ru")) {
    emailInput.style.display = "none";
    passwordInput.style.display = "none";
    pEmail.style.display = "block";
    pEmail.innerText = `nicat@email.ru`;
    pPassword.style.display = "block";
    pPassword.innerText = `${localStorage.getItem("nicat@email.ru")}`;
    btn.style.display = "none";
  }
  if (localStorage.getItem("aydan@asoiu.edu.az")) {
    emailInput.style.display = "none";
    passwordInput.style.display = "none";
    pEmail.style.display = "block";
    pEmail.innerText = `aydan@asoiu.edu.az`;
    pPassword.style.display = "block";
    pPassword.innerText = `${localStorage.getItem("aydan@asoiu.edu.az")}`;
    btn.style.display = "none";
  }
}, 0);
