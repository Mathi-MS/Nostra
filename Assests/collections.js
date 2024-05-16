// sidebar 
var toggle = document.querySelector(".toggle")
var sidebar = document.querySelector(".sidebar")
var sideclose = document.querySelector(".sideclose")
toggle.addEventListener("click",function () {
    sidebar.style.marginLeft="0px"
})
sideclose.addEventListener("click",function () {
    sidebar.style.marginLeft="-100%"
})

//search
var searchinput = document.getElementById("searchinput")
var collectioncontainer = document.querySelector(".collections__rightboxes")
var collection = collectioncontainer.querySelectorAll(".collections__rightbox")
var notfound = collectioncontainer.querySelector("h3")


searchinput.addEventListener("keyup",function () {
    var searchvalue = searchinput.value.toUpperCase()
    for (let i = 0; i < collection.length; i++) {
        var collectionname = collection[i].querySelector("h2").textContent.toUpperCase()
        if (collectionname.indexOf(searchvalue)<0) {
            collection[i].style.display="none"
            notfound.style.display="block"
        }
        else{
            collection[i].style.display="block"
            notfound.style.display="none"
        }
    }
})