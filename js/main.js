// Lazy loading
let Lazy = (elements,className)=>{
  let ovs = new IntersectionObserver((entrys)=>{
    entrys.map(entry =>{
      if (entry.isIntersecting){
        entry.target.classList.add(className);
      }
      if (!entry.isIntersecting){
        entry.target.classList.remove(className);
      }
    })
  });
  ovs.observe(elements);
}
// Lazy block-1
{
    let block =document.querySelector(".img-layer");
  Lazy(block,"xh")
  let elements = document.querySelectorAll('.element');
  elements.forEach(element =>{
    Lazy(element,'wipe');
  })
}
{
 
  let elements = document.querySelectorAll('.e');
  elements.forEach(element =>{
    Lazy(element,'e-wipe');
  })
}
// Lazy block-2
{
  let elements = document.querySelectorAll('.chanGio');
  elements.forEach(element =>{
    Lazy(element,'chanGio-wipe');
  })
}
{
  let elements = document.querySelectorAll('.main-item');
  elements.forEach(element =>{
    Lazy(element,'main-item-wipe');
  })
}
{
  let elements = document.querySelectorAll('.intro');
  elements.forEach(element =>{
    Lazy(element,'intro-wipe');
  })
}
{
 
  let elements = document.querySelectorAll('.img-block-3');
  elements.forEach(element =>{
    Lazy(element,'img-block-3-wipe');
  })
}
//block-4
{
 
  let elements = document.querySelectorAll('.title-block-4');
  elements.forEach(element =>{
    Lazy(element,'title-block-4-wipe');
  })
}


// render link to page 

const length = document.querySelectorAll('.block').length;
var slide_item = '';
for (let i =1 ; i<=length ; i++ ){
  slide_item += `<div class="item-slide">
  <input type="radio" class="nextsilde ip+${i}"  name ='check' data-index=${i}>
  </div>`
}
document.querySelector('.slide').innerHTML = slide_item;
var tiep = document.querySelectorAll(".nextsilde");
tiep.forEach(el=>{
  el.onclick=()=>{
    window.location.href="#" + el.dataset.index;
  }
})
const xh = ()=>{
  let info = document.querySelector('.info')
  info.classList.add('test')

}
 // wipe menu
 let menu = document.querySelector('.menu');
 menu.onclick =()=>{
   let item_menu = document.querySelector('.layer-menu')
   item_menu.classList.add('menu-wipe');
 }
 let close_menu= document.querySelector(".icon-close");
 close_menu.onclick =()=>{
   let item_menu = document.querySelector('.layer-menu')
   item_menu.classList.remove('menu-wipe')
 }
 // slide for block-1
  let a = 0;
        let check=0;
        let next = document.querySelector('.next');
        next.onclick = ()=>{
            let img = document.querySelector('.e-1');
            if (a==-200) check=1;
            if (check == 1){
                a+=100;
                if (a==0) check =0;
            }
            else if (check==0){
                a-=100;
            }
            img.style.marginLeft = a + '%';
        }  
  var time= 10000 ; 
  setInterval(()=>{
            let img = document.querySelector('.e-1');
            if (a==-200) check=1;
            if (check == 1){
                a+=100;
                if (a==0) check =0;
            }
            else if (check==0){
                a-=100;
            }
            img.style.marginLeft = a + '%';
  },time) 

// form
let inputs = document.querySelectorAll('input');
let form = document.querySelector('.submit');
let form_1 = document.querySelector('.form-1');
form.onclick =(e)=>{
  e.preventDefault();
  
  let check =true;
  inputs.forEach(input =>{
    if (input.value == ""){
      check= false;
    }
  })
  if (check){
    let span = document.querySelector(' .form span');
      console.log(span)
      span.style.color='green';
      span.innerText= "Đặt bàn thành công";
      setTimeout(()=>{
        form_1.style.display='none';
        inputs.forEach(input=>{
          input.value='';
          span.innerText='';
        })
      },2000)

      
  }
  else {
    let span = document.querySelector(' .form span');
      console.log(span)
      span.style.color='red';
      span.innerText= "Vui lòng nhập đầy đủ";
  }
}
let close_form = document.querySelector('.close-form');
close_form.onclick=()=>{
  form_1.style.display='none';
  inputs.forEach(input=>{
    input.value='';
  })
}
let bts = document.querySelectorAll('.bt');
bts.forEach(bt=>{
  bt.onclick =()=>{
    form_1.style.display='flex';
  }
})

let item = document.querySelector(".footer h4");
let ovs_2 = new IntersectionObserver((entrys)=>{
  entrys.map(entry =>{
    if (entry.isIntersecting){
      for  ( let i =0 ; i< tiep.length ;  i++){
        el = tiep[i];
        if (el.dataset.index == entry.target.dataset.index){
          el.checked = true;
        }
      }
      switch (entry.target.dataset.index){
        case '1':
          
          item.innerHTML ='Trang Chủ';
          break;
        case '2' :
          item.innerHTML ='Nguyên Liệu';
          break;
        case '3' :
            item.innerHTML ='Nguyên Liệu';
            break;
        case '4':
          item.innerHTML ='Nhà Hàng';
          break;
      }
    }
  })
});
let blocker = document.querySelectorAll('.t');
blocker.forEach((block)=>{
  ovs_2.observe(block)
})

