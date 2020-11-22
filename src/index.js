import _ from "lodash";
import { printMe } from "./print.js";

function component() {
  var element = document.createElement("div");
  var btn = document.createElement("button");

  element.innerHTML = _.join(["Hello", "webpack"], " ");

  btn.innerHTML = "Click me and check the console!";
  btn.onclick = printMe; // onclick 事件绑定原始的 printMe 函数上

  element.appendChild(btn);

  return element;
}
let element = component(); // 存储 element，以在 print.js 修改时重新渲染
document.body.appendChild(element);

console.log("=hellor==1");
// printMe('render')
// document.querySelector("body").innerHTML = "Hello World!";

if (module.hot) {
  module.hot.accept("./print.js", function (...arg) {
    console.log("update printMe module!", arg);
    document.removeChild(element);
    element = component();
    element = component();
    document.body.appendChild(element);
  });
}
