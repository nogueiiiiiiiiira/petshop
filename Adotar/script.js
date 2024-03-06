function comecar() {
    var nome = document.getElementById("exampleFormControlInput1").value;
    show(nome);
}
  
function show(nome) {
    var div = document.getElementById("selects-div");
    var inputDiv = document.getElementById("inputDiv");
    var comecarBtn = document.getElementById("comecarBtn");
    var nomePrint = document.getElementById("nomePrint");
  
    if (nome && nome.trim() !== "") {
        div.style.display = "block";
        inputDiv.style.display = "none";
        comecarBtn.style.display = "none";
        nomePrint.textContent = nome; 
        document.getElementById("exampleFormControlInput1").style.background = "none";
    } else {
        document.getElementById("error").style.display = "flex";
    }
  }
  