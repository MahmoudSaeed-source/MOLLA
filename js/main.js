// start varaibles
let country_Name = document.querySelector(".country_Name");
let pop_li_a = document.querySelectorAll(".pop li a");
let country_pop = document.querySelector(".country_pop");
let left_Arrow = document.querySelector(".left_arrow"); 
let right_Arrow = document.querySelector(".right_arrow"); 
let img_slider_one = document.querySelector(".img_slider_one");
let img_slider_two = document.querySelector(".img_slider_two");
// end variables

// start chooes country form pop
chooes_country()
function chooes_country() {
    pop_li_a.forEach(country => {
        country.addEventListener("click",(e) => {
            country_Name.innerHTML = e.target.innerHTML;
        })
    })
}
// end chooes country form pop


// start chang hero section images

chang_Images_Hero_right()
chang_Images_Hero_left()
function chang_Images_Hero_left() {
    left_Arrow.addEventListener("click",() => {
        img_slider_one.classList.add("disable");
        img_slider_one.classList.remove("active");
        img_slider_two.classList.remove("disable");
        img_slider_two.add("active")
       
    })
}
function chang_Images_Hero_right() {
    right_Arrow.addEventListener("click",() => {
        img_slider_two.classList.add("disable");
        img_slider_two.classList.remove("active");
        img_slider_one.classList.remove("disable");
        img_slider_on.classList.add("active")
       
    })
}
// end chang hero section images