(function(){
var imgURL = chrome.runtime.getURL("popout/Nish.jpg");
debugger;

var elements = document.getElementsByTagName("body");
var element = elements[0];
// element.style.backgroundImage.imgURL = url(imgURL);
// element.style.backgroundImage.imgURL = "url(chrome.runtime.getURL('popout/Nish.jpg'))";
// var element =document.getElementsByClassName("*");
// element.imgURL=imgURL;
// alert(imgURL);

// element.style.background = "#ff0000 url('https://www.onlinekhabar.com/wp-content/uploads/2019/01/resham-chaudhary-1.jpg') no-repeat right top";
element.style.background = "#00ff00 url('http://nishtech.be/nishtechlogo.png') no-repeat left top";
// document.body.style.backgroundImage="url('"+chrome.runtime.getURL("popout/Nish.jpg")+"') no-repeat right top";


})();