// start varaibles
let country_Name = document.querySelector(".country_Name");
let pop_li_a = document.querySelectorAll(".pop li a");
let country_pop = document.querySelector(".country_pop");
let left_Arrow = document.querySelector(".left_arrow"); 
let right_Arrow = document.querySelector(".right_arrow"); 
let img_slider_one = document.querySelector(".img_slider_one");
let img_slider_two = document.querySelector(".img_slider_two");
let navBar_Section = document.querySelector(".nav_bar_section");
// end variables


// start navbar fixed
window.onscroll = () => {
    if(window.scrollY > 150) {
        navBar_Section.classList.add("fixed")
    } else {
        navBar_Section.classList.remove("fixed")
   }
}

// end navbar fixed

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


// start fetch data form json file
let Url = '../JsonFile/products.json';
let products_view = document.querySelector(".products_view");
let image_pro = [];
let result = [];
async function getData() {
    let res = await fetch(Url);
    let Data = await res.json();
    return Data
}
getData().then(data => {
    data.forEach(product => {
        result += `<div class="product col-lg-2">
        <div class="over_product">
          <span class="heart"><i class="fa-regular fa-heart"></i></span>
          <span class="view"><i class="fa-solid fa-binoculars"></i></span>
          <div class="add_To_Cart">
            <span><i class="fa-solid fa-cart-plus"></i>ADD TO CART</span>
          </div>
        </div>
        <div class="img_product">
        <img data-id = ${product.id}  class = "imag_pro" src = "${product.src[0].src1}">
         ${
            (() => {
                if(product.hasOwnProperty("save")) {
                        return  `<span class= "save" >${product.save}</span>`
                } else {
                    return "";
                }
            })()
        }
        </div>
        <h4 class="product_name">${product.name}</h4>
        <h5 class="product_price"><span class="price_sale"><del>${product.pricesale}</del></span>${product.price}</h5>  
        ${
            (() => {
            if(product.hasOwnProperty("color")) {
             
                
                for(const [key,value] of Object.entries(product.color)) {
                
                    return `<span class= "color" style='background-color:${value}'></span>`
               }  
            } else {
                return "";
                }
            })()
        }
      </div>`
    })  
    products_view.innerHTML += result;
})

    document.body.addEventListener("mouseover",(e) => {
        getData().then(data => {
            data.forEach(pro => {
                if(e.target.dataset.id == pro.id) {
                    e.target.src = pro.src[1].src2;
                    e.target.addEventListener("mouseout",() => {
                        e.target.src = pro.src[0].src1;
                    })
                }
            })
        })
        
    })




// // end fetch data form json file

//start reviews section
let icon_Left_Side = document.querySelector(".icon_left_side");
let icon_Right_Side = document.querySelector(".icon_right_side");
let member_One = document.querySelector(".member_one")
icon_Right_Side.addEventListener("click",() => {
    member_One.classList.add("disable")
    
})
icon_Left_Side.addEventListener("click",() => {
    member_One.classList.remove("disable")
    
})
// end reviews section
