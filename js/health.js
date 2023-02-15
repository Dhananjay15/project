// let flag=0;
// function controller(x){
//     flag =flag+x;
//     slideshow(flag);
// }
// slideshow(flag);
// function slideshow(num){
//     let slide=document.getElementsByClassName('i');
//     if(num == slide.length){
//         flag=0;
//         num=0;
//     }
//     for(let y of slide){
//         y.style.display="none";
//     }
//     slide[num].style.display="block";
// }

let flag = 0;
function controller(x) {
  flag = flag + x;
  slideshow(flag);
}

slideshow(flag);

function slideshow(num) {
  let slide = document.getElementsByClassName("i");
  if (num === slide.length - 1) {
    document.getElementsByClassName("arrow next")[0].style.display = "none";
  } 
//   else if(num === slide[0]){
//     document.getElementsByClassName("arrow prev")[0].style.display = "none";
//   }
    else {
    document.getElementsByClassName("arrow next")[0].style.display = "block";
  }
  if (num === slide.length) {
    flag = 0;
    num = 0;
  }
  for (let y of slide) {
    y.style.display = "none";
  }
  slide[num].style.display = "block";
}
