const img1 = document.querySelector("#img_1");

const btn_img1 = document.querySelector("#gf__img1");
const btn_img2 = document.querySelector("#gf__img2");
const btn_img3 = document.querySelector("#gf__img3");
const btn_img4 = document.querySelector("#gf__img4");
const btn_img5 = document.querySelector("#gf__img5");
const btn_img6 = document.querySelector("#gf__img6");

function change1() {
  img1.setAttribute("src", "../img/Galeria/1.jpg");
}
function change2() {
  img1.setAttribute("src", "../img/Galeria/2.jpg");
}
function change3() {
  img1.setAttribute("src", "../img/Galeria/3.jpg");
}
function change4() {
  img1.setAttribute("src", "../img/Galeria/4.jpg");
}
function change5() {
  img1.setAttribute("src", "../img/Galeria/5.jpg");
}
function change6() {
  img1.setAttribute("src", "../img/Galeria/6.jpg");
}

btn_img1.addEventListener("click", change1);
btn_img2.addEventListener("click", change2);
btn_img3.addEventListener("click", change3);
btn_img4.addEventListener("click", change4);
btn_img5.addEventListener("click", change5);
btn_img6.addEventListener("click", change6);
