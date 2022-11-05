const closeBtn = document.querySelector(".close-btn");
const navBtn = document.querySelector(".nav-btn");
const sidebar = document.querySelector(".sidebar");
const navbar = document.querySelector(".nav");
const close = document.querySelectorAll(".close");



close.forEach(function(btn){
  btn.addEventListener("click", function(e){
    const styles = e.currentTarget.classList;
    if (styles.contains("close")){
      sidebar.classList.toggle("show-sidebar");
    }
  })
})






closeBtn.addEventListener("click", function(){
sidebar.classList.toggle("show-sidebar");
});

navBtn.addEventListener("click", function(){
    sidebar.classList.toggle("show-sidebar");
    });

    window.addEventListener("scroll", function () {
        if (window.pageYOffset > 80) {
          navbar.classList.add("navbar-fixed");
        } else {
          navbar.classList.remove("navbar-fixed");
        }
      });

      //select review elements

const img = document.querySelector(".carosel-img");
const text = document.querySelector(".review-description");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

//set current item

let currentItem = 0;

//load initial item for reviews

window.addEventListener("DOMContentLoaded", function(){
  
showPerson(currentItem);
})

function showPerson(person){
  const item = reviews[person];
  img.src = item.img;
  text.textContent = item.text;
}

//show next review

nextBtn.addEventListener("click", function(){
  currentItem++;
  if(currentItem > reviews.length - 1){
    currentItem = 0;
  }
  showPerson(currentItem);
})

// show previous review

prevBtn.addEventListener("click", function(){
  currentItem--;
  if(currentItem < 0) {
    currentItem = reviews.length - 1;}
    
  
  showPerson(currentItem);
});

const reviews = [{
  identity: 1,
  img: "../images/head1.jpg",
  text: "Couldn't recommend highly enough."
}, 

{
  identity: 2,
  img: "../images/head2.jpg",
  text: "5 star service. Simply the best. "
}, 

{
  identity: 3,
  img: "../images/head3.jpg",
  text: "The service was second to none."
}, 

{
  identity: 4,
  img: "../images/head4.jpg",
  text: "I book every wee. I won't go to anyone else"
}, 

{
  identity: 5,
   img: "../images/head5.jpg",
  text: "You are beautiful."
}, 
];


