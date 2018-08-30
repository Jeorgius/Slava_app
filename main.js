window.onload = function () {
  let d = document,
  c = d.getElementById("Clacking"),
  init = d.getElementById("init"),
  r = d.getElementById("Result");

  c.onclick = () => {
  	r.innerText = init.value.replace(/[\n]/g, '; ');
  };
};