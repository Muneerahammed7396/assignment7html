var headings=document.querySelectorAll('h1');
console.log(headings)
var button =document.querySelector('button');

button.addEventListener('click',function(){
for (i=0;i<headings.length;i++){
    headings[i].textcontent ='newheadings'
}  
});