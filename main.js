window.onload = function () {
  let d = document,
  c = d.getElementById("Clacking"),
  init = d.getElementById("init"),
  r = d.getElementById("Result");

  c.onclick = () => {
  	r.value = init.value.replace(/[\n]/g, '; ').replace(/; $/,'');
  	r.select();
  	d.execCommand('copy');
  };
};