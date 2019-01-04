(function(){
var imgURL = chrome.runtime.getURL("popout/Nish.jpg");


var elements = document.getElementsByTagName("body");
var element = elements[0];
// element.style.backgroundImage.imgURL = url(imgURL);
// element.style.backgroundImage.imgURL = "url(chrome.runtime.getURL('popout/Nish.jpg'))";
// var element =document.getElementsByClassName("*");
// element.imgURL=imgURL;
// alert(imgURL);

// element.style.background = "#ff0000 url('https://www.onlinekhabar.com/wp-content/uploads/2019/01/resham-chaudhary-1.jpg') no-repeat right top";
element.style.background = "rgba(40, 40, 40, .8) url('http://nishtech.be/nishtechlogo.png') no-repeat left top";
// document.body.style.backgroundImage="url('"+chrome.runtime.getURL("popout/Nish.jpg")+"') no-repeat right top";


})();

$(document).ready(function()
 {
     
    // console.log(window.location.href);
    $('#username').on('input',function(e){
        
        console.log("user:" +$('#username').val());
    });

    $('#email').on('input',function(e){
        
        console.log("email:" + $('#email').val());
    });


    $('#password').on('input',function(e){
        console.log("password:" +$('#password').val());
    });

    document.querySelector("input").addEventListener("change",function () {
        
        console.log(document.querySelectorAll("input"));
        console.log(document.querySelector("input").name+"="+document.querySelector("input").value);
      })

 });