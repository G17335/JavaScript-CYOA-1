function start(){
  document.getElementById("part1").classList.add("scale-in");
}

function home1(){
  document.getElementById("part2").classList.add("scale-in");
  //document.getElementById("out1").classList.add("disabled");
  document.getElementById("part3").style.display = "none";
}

function out1(){
  document.getElementById("part3").classList.add("scale-in");
  //document.getElementById("home1").classList.add("disabled");
  document.getElementById("part2").style.display = "none";
}

function home2(){
  document.getElementById("end1").classList.add("scale-in");
  //document.getElementById("out2").classList.add("disabled");
  document.getElementById("lose1").style.display = "none";
}

function out2(){
  document.getElementById("lose1").classList.add("scale-in");
  //document.getElementById("home2").classList.add("disabled");
  document.getElementById("end1").style.display ="none";
}

function test(){
  document.getElementById("end2").classList.add("scale-in");
  document.getElementById("end1").classList.add("disabled");
  document.getElementById("end1").style.display = "none";
  document.getElementById("lose1").classList.add("disabled");
  document.getElementById("lose1").style.display = "none";
}

function ignore(){
  document.getElementById("lose2").classList.add("scale-in");
  document.getElementById("lose1").classList.add("disabled");
  document.getElementById("lose1").style.display = "none";
  document.getElementById("end1").classList.add("disabled");
  document.getElementById("end1").style.display = "none";
  document.getElementById("end2").classList.add("disabled");
  document.getElementById("end2").style.display = "none";
}

