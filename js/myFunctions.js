function btnClicked() {
  console.log("klikkasit painiketta");
  alert("painiketta painettiin");
}

function login() {
  console.log("login klikattu");
  let fname = document.getElementById("en").value;
  let lname = document.getElementById("sn").value;
  console.log(fname + " " + lname);
  document.getElementById("loginInfo").innerHTML = fname + " " + lname;
}
