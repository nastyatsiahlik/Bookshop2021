function slide(){
  const sliderLine=document.querySelector(".slider-line");
  const sliderElements=Array.from(document.querySelectorAll((".el_b")));
  const leftArrow=document.querySelector(".arrow_left");
  const rightArrow=document.querySelector(".arrow_right");
  const padding=parseFloat(window.getComputedStyle(sliderElements[0]).paddingRight)*2;
  const elementWidth=parseFloat(window.getComputedStyle(sliderElements[0]).width);
  const sliderLineWidth=parseFloat(window.getComputedStyle(sliderLine).width);
  const visibleItemsNumber=Math.floor(sliderLineWidth/(padding+elementWidth));
  let index=0;

  let moveSliderLine=()=>sliderLine.style.left=`${-1*index*(padding+elementWidth)}px`;

  if(leftArrow && rightArrow){
    leftArrow.addEventListener("click",()=>{
      index--;
      index=(index<0)?sliderElements.length-visibleItemsNumber:index;
      moveSliderLine()
    });
    
    rightArrow.addEventListener("click",()=>{
      index++;
      index=(index>sliderElements.length-visibleItemsNumber)?0:index;
      moveSliderLine()
    });
  }
}
slide();