// let navbar = document.querySelector('.header .navlist');
// window.addEventListener ("scroll", function() {
//     header.classList.toggle ("sticky", window.scroll > 100);
// });

// document.querySelector('#menu-btn').onclick = () =>{
//    navbar.classList.toggle('active');
//    userBox.classList.remove('active');
// }

// window.onscroll = () =>{
//    navbar.classList.remove('active');

//    if(window.scrollY > 60){
//       document.querySelector('.header').classList.add('active');
//    }else{
//       document.querySelector('.header').classList.remove('active');
//    }
// }

// window.onscroll = () => {
//     menu.classList.remove('bx-x');
//     navlist.classList.remove('open');
// };

const header = document.querySelector("header");
window.addEventListener ("scroll", function() {
    header.classList.toggle ("sticky", window.scroll > 100);
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('open');
};
