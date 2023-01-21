const addbtn = document.getElementById("increeswidth");
const decbtn = document.getElementById("dicreeswidth");
const dogimage = document.getElementById("dogimage");
const imagesize = document.getElementById("imagesize");

let defaltwidth = 55;

addbtn.addEventListener('click',function(){
    defaltwidth = defaltwidth + 5;
    dogimage.style.width = defaltwidth +'px'
    dogimage.style.height = defaltwidth +'px'
    imagesize.textcontent = defaltwidth +'px'

})
decbtn.addEventListener('click',function(){
    defaltwidth=defaltwidth - 5;
    dogimage.style.width=defaltwidth -'px'
    dogimage.style.height=defaltwidth -'px'
    imagesize.textcontent=defaltwidth -'px'

});



