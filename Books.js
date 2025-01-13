let showDetails = document.querySelectorAll('.details')
let nextBtn = document.querySelector('.next')
let formDiv = document.querySelector('.formDiv')
let formBtn = document.querySelector('.no-form')
let form = document.querySelector('form')
let selectedBook = document.querySelector('.selectedBook')
const nameBook = document.querySelectorAll('.name')
const priceBook = document.querySelectorAll('.price')
let namespan = document.querySelector('.namespan')
let pricespan = document.querySelector('.pricespan')
const closeSelect = document.querySelector('button.close')


function showSelect(ele , id){
   if(ele.checked == true){
    namespan.innerText = 'اسم الكتاب :' + nameBook[id].innerText
        pricespan.innerText = 'سعر الكتاب :' + priceBook[id].innerText
    
   }else{
    namespan.innerText = '';
    pricespan.innerText = '' ;
}
}

    function toggleDetails(id){
      
  showDetails[id].classList.toggle('details')
    }

 
nextBtn.onclick = ()=>{
    formDiv.style.display='block'
    window.scrollTo({
        top : 0 ,
        behavior:"smooth"
    })
}
formBtn.onclick = ()=>{
    formDiv.style.display='none'
}

form.addEventListener('submit' , (event)=>{
event.preventDefault();
let inputName = document.querySelector('.inputName')  ;


if(!/^[\u0600-\u06FF\s]+$/.test(inputName.value)){
    alert('يرجى ادخال الاسم باللغة العربية')
  
}else{
selectedBook.style.display = 'block' ;
formDiv.style.display='none' ;
}
})

closeSelect.onclick = function(){
    selectedBook.style.display = 'none' ;
}