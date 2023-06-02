
// add more here

var soemthing1 = document.getElementById("pc1");
var soemthing2 = document.getElementById("pc2");


soemthing1.addEventListener("click", btn1);
soemthing2.addEventListener("click", btn2);





function btn1() {

    console.log("s", soemthing1.id)
    localStorage.setItem("ide", soemthing1.id); 
    window.open("./item.html")
} 

function btn2() {
    console.log("s", soemthing2.id)
    localStorage.setItem("ide", soemthing2.id);
    window.open("./item.html")
}

























// console.log("s", soemthing2.id)
// localStorage.setItem("ide", soemthing2.id);

// function myFunction2(param) {
//     // console.log("kor ban")
//     // alert ("Hello World!");
    

//     // window.scrollTo(0, document.querySelector(".line").offsetTop);
//     // window.open("./item.html")
//     // document.getElementById("pcImg").addEventListener("click", document.getElementById("cpu").innerHTML = "Hello World!"); 
//     console.log(param)
// } 


// addEventListener(element)

// document.getElementById("about").innerHTML = "Hello World!";

// document.getElementById("about").addEventListener("click", console.log("miss me")); 

// function openNewURLInTheSameWindow(targetURL) {
//     var a = document.createElement('a');
//     a.href = targetURL;
//     fireClickEvent(a);
// }