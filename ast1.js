//On Clicking any button background color of body should changed respected to that button
// color and the value 
//after Background Color should be changing dynamically. 

//UI should be similarfunction 

const buttonone=document.getElementById('one')
const buttontwo=document.getElementById('two')
const buttonthree=document.getElementById('three')
const buttonfour=document.getElementById('four')


buttonone.style.backgroundColor=buttonone.textContent
buttontwo.style.backgroundColor=buttontwo.textContent
buttonthree.style.backgroundColor=buttonthree.textContent
buttonfour.style.backgroundColor=buttonfour.textContent

buttonone.addEventListener('click',function(){
  document.body.style.background=buttonone.textContent
  document.getElementById('colorname').style.color = buttonone.textContent
})
buttontwo.addEventListener('click',function(){
  document.body.style.background=buttontwo.textContent
  document.getElementById('colorname').style.color = buttontwo.textContent
})
buttonthree.addEventListener('click',function(){
  document.body.style.background=buttonthree.textContent
  document.getElementById('colorname').style.color = buttonthree.textContent
})
buttonfour.addEventListener('click',function(){
  document.body.style.background=buttonfour.textContent
  document.getElementById('colorname').style.color = buttonfour.textContent
})