export default function drag(el, binding) {
  el.onmousedown = e => {
    let disX = e.clientX - el.offsetLeft;
    let disY = e.clientY - el.offsetTop;
    let left = 0;
    let top = 0;
    document.onmousemove = e => {
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
      document.onmousemove = null;
      document.onmouseup = null;
      binding.value.stop(left, top, el);
    };
  };
}