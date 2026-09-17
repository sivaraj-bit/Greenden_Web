const mobileBtn = document.getElementById("mobile-btn");
const mobileMenu = document.getElementById("mobile");
const closeBtn = document.getElementById("close-btn");

// Open menu
mobileBtn.addEventListener("click", function () {
    mobileMenu.classList.remove("hidden");
});

// Close menu
closeBtn.addEventListener("click", function () {
    mobileMenu.classList.add("hidden");
});

//filter products

const productsContainer = document.getElementById("product-container")
const search = document.getElementById("search")
const productList = productsContainer.querySelectorAll("div")


search.addEventListener("keyup",function(){
    const enteredVAlue = event.target.value.toUpperCase()

    for(count=0;count<productList.length;count=count+1)
    {
        const productName = productList[count].querySelector("h3").textContent

        if(productName.toUpperCase().indexOf(enteredVAlue)<0)
        {
            productList[count].style.display="none"
        }
        else
        {
            productList[count].style.display="block"
        
        }
    }





})
