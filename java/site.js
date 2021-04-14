function allInputs() {
    var a = document.getElementById("full_name");
    var c = document.getElementById("email");
    var d = document.getElementById("phone");
    var e = document.getElementById("birthday");

    if ((a == "") || (c == "") || (d == "") || (e == "")){
      alert("Make sure all sections are properly filled out.");
    }
    else{
      alert("Congradulations you been considered to join our ranks");
    }
    console.log(a)
    console.log(b)
    console.log(c)
    console.log(d)
    console.log(e)
  }
