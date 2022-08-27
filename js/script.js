// Search Icon 
let searchOverlay = document.querySelector('.search_sect #overlay_search')
let searchIcon = document.querySelector('#searchIcon')
let FormSearch = document.querySelector('.search_sect form')
let inputSearch = document.querySelector('.search_sect input')
let buttonSearch = document.querySelector('.search_sect button')
let html = document.querySelector('html')

searchIcon.addEventListener('click',(e)=>{
  searchOverlay.classList.add('active')
  FormSearch.classList.remove('d-none')
  html.style.overflowY= "hidden";
  // console.log(html);
  searchOverlay.style.top = window.scrollY +"px";
  
})

searchOverlay.addEventListener('click',(e)=>{
  if(e.target !== inputSearch && e.target !== buttonSearch){
    searchOverlay.classList.remove('active')
    FormSearch.classList.add('d-none')
    html.style.overflowY = "scroll"
  }
})









// if(screenTop)
let bigNav = document.querySelector('.big_nav');
window.addEventListener('scroll',event=>{
  if(window.scrollY > 350){
    bigNav.classList.add('fixed-top')
  }else{
    bigNav.classList.remove('fixed-top')
  }
})




let awardLinks = document.querySelectorAll('.award-winning-company .links button');
let sections = document.querySelectorAll('.sections_All')

awardLinks.forEach(btn=>{
btn.addEventListener('click',()=>{
  awardLinks.forEach(ele=>{
    ele.classList.remove('active')
  })
  sections.forEach(sect=>{
    if(btn.dataset.link === sect.id){
      sections.forEach(se=>{se.classList.add('d-none')})
      sect.classList.add('d-block')
      sect.classList.remove('d-none')
    }
  })
  // console.log(btn.dataset.link);
  btn.classList.add('active')
})
});


let scrollTop = document.querySelector('.scrollTop');
window.onscroll = function (){
  if(this.scrollY >= 500){
    scrollTop.classList.add("active");
  }
  else{
    scrollTop.classList.remove("active");
  }
}
scrollTop.onclick = function (){
  window.scrollTo({
    top:0,
    behavior:"smooth"
  });
}

// window.onresize = function(){
//   window.location.reload()
// }

AOS.init();
