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
  
  function showSelects() {
    var animalType = document.getElementById("selectAnimal").value;
    var selectGato = document.getElementById("selectCat");
    var selectDog = document.getElementById("selectDog");
    var selectBunny = document.getElementById("selectBunny");
  
    selectGato.style.display = "none";
    selectDog.style.display = "none";
    selectBunny.style.display = "none";
  
    if (animalType === "gato") {
      selectGato.style.display = "block";
    } else if (animalType === "cachorro") {
      selectDog.style.display = "block";
    } else if (animalType === "coelho") {
      selectBunny.style.display = "block";
    }
  }

  function showAnimalInfo() {
    var div = document.getElementById("Conferir");
    div.style.display = "block";

    var selectGato = document.getElementById("selectCat");
    var selectCachorro = document.getElementById("selectDog");
    var selectCoelho = document.getElementById("selectBunny");

    switch (selectGato.value) {
        case "Bob":
            document.getElementById("tipo-animal").textContent = "Gato";
            document.getElementById("nome-animal").textContent = "Bob";
            document.getElementById("idade-animal").textContent = "3 anos";
            document.getElementById("sexo-animal").textContent = "Macho";
            break;

        case "Stela":
            document.getElementById("tipo-animal").textContent = "Gato";
            document.getElementById("nome-animal").textContent = "Stela";
            document.getElementById("idade-animal").textContent = "2 anos";
            document.getElementById("sexo-animal").textContent = "Fêmea";
            break;

        case "Scar":
            document.getElementById("tipo-animal").textContent = "Gato";
            document.getElementById("nome-animal").textContent = "Scar";
            document.getElementById("idade-animal").textContent = "8 meses";
            document.getElementById("sexo-animal").textContent = "Macho";
            break;
    }

    switch (selectCachorro.value) {
        case "Mel":
            document.getElementById("tipo-animal").textContent = "Cachorro";
            document.getElementById("nome-animal").textContent = "Mel";
            document.getElementById("idade-animal").textContent = "2 anos";
            document.getElementById("sexo-animal").textContent = "Fêmea";
            break;

        case "Mikasa":
            document.getElementById("tipo-animal").textContent = "Cachorro";
            document.getElementById("nome-animal").textContent = "Mikasa";
            document.getElementById("idade-animal").textContent = "3 anos";
            document.getElementById("sexo-animal").textContent = "Fêmea";
            break;

        case "Tim":
            document.getElementById("tipo-animal").textContent = "Cachorro";
            document.getElementById("nome-animal").textContent = "Tim";
            document.getElementById("idade-animal").textContent = "1 ano";
            document.getElementById("sexo-animal").textContent = "Macho";
            break;
    }

    switch (selectCoelho.value) {
        case "Matt":
            document.getElementById("tipo-animal").textContent = "Coelho";
            document.getElementById("nome-animal").textContent = "Matt";
            document.getElementById("idade-animal").textContent = "9 meses";
            document.getElementById("sexo-animal").textContent = "Macho";
            break;

        case "Lila":
            document.getElementById("tipo-animal").textContent = "Coelho";
            document.getElementById("nome-animal").textContent = "Lila";
            document.getElementById("idade-animal").textContent = "2 anos";
            document.getElementById("sexo-animal").textContent = "Fêmea";
            break;

        case "Jude":
            document.getElementById("tipo-animal").textContent = "Coelho";
            document.getElementById("nome-animal").textContent = "Jude";
            document.getElementById("idade-animal").textContent = "11 meses";
            document.getElementById("sexo-animal").textContent = "Fêmea";
            break;
    }
}

function adotar() {
    alert("Adoção realizada com sucesso!");
}