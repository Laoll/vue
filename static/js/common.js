/**
 * Created by Administrator on 2016/9/27.
 */

+(function(win, doc){
  // 设置字体大小
  function setFontSize(){
    var width = doc.documentElement.clientWidth;
    if(width <= 750){
      //(宽度 / 设计宽度) * 100
      doc.documentElement.style.fontSize = (width / 750) * 100 + "px";
    } else {
      doc.documentElement.style.fontSize = 100 + "px";
    }
  }

  var evt = "onorientationchange" in win ? "orientationchange" : "resize";
  var timer = null;
  // 设置屏幕旋转或屏幕大小重置
  win.addEventListener(evt, function(){
    clearTimeout(timer);
    timer = setTimeout(setFontSize, 300);
  }, false);
  // 重载页面时判断是否是缓存，如果是则执行setFontSize函数
  win.addEventListener("pageshow", function(event){
    if(event.persisted){
      clearTimeout(timer);
      setTimeout(setFontSize, 300);
    }
  }, false);

  setFontSize();
})(window, document);
