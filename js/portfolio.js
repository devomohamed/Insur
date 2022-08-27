let links = document.querySelectorAll('.portfolio .container .top-links ul li')
let boxes = document.querySelector('.portfolio .container .bottom-images')

let myData =[
  {
    category:'All',
    count:9,
    images:[1,2,3,4,5,6,7,8],
  },
  {
    category:'Strategy',
    count:0,
    images:[3,5,8,6],
  },
  {
    category:'Business',
    count:0,
    images:[4,6,8,7],
  },
  {
    category:'Insurance',
    count:0,
    images:[3,8,1,6],
  },
  {
    category:'Polices',
    count:0,
    images:[8,4,1,7],
  }
]

window.onload = function(){
  boxes.innerHTML = boxData(myData,'All')
  console.log();
  links[0].classList.add('active')
}

links.forEach(li=>{
  li.addEventListener('click',()=>{
    links.forEach(ele=>{ele.classList.remove('active')})
    li.classList.add('active')
    boxes.innerHTML = boxData(myData,li.innerHTML)
  })
})

let boxData = (data,link)=>{
  let FilterData = data.filter(catego=> {
    return catego.category == link
  })
  let sections = ``
  FilterData[0].images.forEach(imgNumber=>{
    sections += `<div class="col-lg-4 col-md-6 col-sm-12">
    <div class="box position-relative">
    <img src="images/portfolio/portfolio-1-${imgNumber}.jpg" />
    <div class="txt position-absolute  zIndex-2">
          <span class="text-uppercase">${FilterData[0].category}</span>
          <a href="#"><h2>Insurance policy</h2></a>
        </div>
  </div>
    </div>`
  })
  return sections
}