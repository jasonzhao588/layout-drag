export default function drag(el, binding) {
  el.onmousedown = e => {
    //算出鼠标相对元素的位置
    let disX = e.clientX - el.offsetLeft;
    let disY = e.clientY - el.offsetTop;
    let left = 0;
    let top = 0;
    document.onmousemove = e => {
      //用鼠标的位置减去鼠标相对元素的位置，得到元素的位置
      left = e.clientX - disX;
      top = e.clientY - disY;
      if (left <= 0) {
        left = 0
      }
      if (top <= 0) {
        top = 0
      }
      binding.value.set(left, top);
      //移动当前元素
      el.style.left = left + "px";
      el.style.top = top + "px";
    };
    document.onmouseup = () => {
      //鼠标弹起来的时候不再移动
      document.onmousemove = null;
      //预防鼠标弹起来后还会循环（即预防鼠标放上去的时候还会移动）
      document.onmouseup = null;
      binding.value.stop(left, top, el);
    };
  };
}