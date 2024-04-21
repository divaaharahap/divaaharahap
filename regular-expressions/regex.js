//hanya Angka

let hanyaAngka = document.querySelector("#hanya-angka");
let validationTextHanyaAngka = document.querySelector("#hanya-angka-validation-text");

const REGULAR_EXPRESSION1 = /[0-9]/;

hanyaAngka.addEventListener("input", function() {
    validationTextHanyaAngka.innerHTML = REGULAR_EXPRESSION1.test(hanyaAngka.value) ? "Valid" : "Invalid";
});

// Mencocokkan kata yang berjumlah 5 karakter yang harus berisi huruf, angka dan karakter khusus
let limakarakter = document.querySelector("#karakter-5");
let validationTextKarakter = document.querySelector("#validation-text-karakter-5");

const REGULAR_EXPRESSION2 = /^(?=.*\d)(?=.*[\W])[\w\W]{5}$/;

limakarakter.addEventListener("input", function() {
    validationTextKarakter.innerHTML = REGULAR_EXPRESSION2.test(limakarakter.value) ? "Valid" : "Invalid";
});


// Mencocokkan Tanggal (Format YYYY-MM-DD)
let tanggal = document.querySelector("#format-tanggal");
let validationTanggal = document.querySelector("#format-tanggal-validation-text");

const REGULAR_EXPRESSION3 = /^\d{4}-\d{2}-\d{2}$/;

tanggal.addEventListener("input", function() {
    validationTanggal.innerHTML = REGULAR_EXPRESSION3.test(tanggal.value) ? "Valid" : "Invalid";

});

//Mencocokkan NIM yang harus Angka dan berjumlah 9
let NIM = document.querySelector("#NIM");
let validationNIM = document.querySelector("#NIM-validation-text");

const REGULAR_EXPRESSION4 = /^\d{9}$/;

NIM.addEventListener("input", function() {
    validationNIM.innerHTML = REGULAR_EXPRESSION4.test(NIM.value) ? "Valid" : "Invalid";

});

//Mencocokkan Email
let Email = document.querySelector("#email");
let validationEmail = document.querySelector("#email-validation-text");

const REGULAR_EXPRESSION5 =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

Email.addEventListener("input", function() {
    validationEmail.innerHTML = REGULAR_EXPRESSION5.test(Email.value) ? "Valid" : "Invalid";

});

