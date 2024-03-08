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
    var animalTypeSelect = document.getElementById("selectTipoAnimal");
    var actionType = document.getElementById("selectAnimal").value;

    hideAllSelects();

    if (actionType !== "Selecione uma opção:") {
        animalTypeSelect.style.display = "block";

        switch (actionType) {
            case "racao":
                animalTypeSelect.options.length = 1; 
                animalTypeSelect.add(new Option("Cachorro", "cachorro"));
                animalTypeSelect.add(new Option("Gato", "gato"));
                animalTypeSelect.add(new Option("Coelho", "coelho"));
                break;
                
            case "acessorio":
                animalTypeSelect.options.length = 1; 
                animalTypeSelect.add(new Option("Cachorro", "cachorro"));
                animalTypeSelect.add(new Option("Gato", "gato"));
                animalTypeSelect.add(new Option("Coelho", "coelho"));
                break;

            case "brinquedos":
                animalTypeSelect.options.length = 1; 
                animalTypeSelect.add(new Option("Cachorro", "cachorro"));
                animalTypeSelect.add(new Option("Gato", "gato"));
                animalTypeSelect.add(new Option("Coelho", "coelho"));
                break;

            case "banhoetosa":
                animalTypeSelect.options.length = 1; 
                animalTypeSelect.add(new Option("Cachorro", "cachorro"));
                animalTypeSelect.add(new Option("Gato", "gato"));
                animalTypeSelect.add(new Option("Coelho", "coelho"));
                break;

            default:
                break;
        }
    } else {
        animalTypeSelect.style.display = "none";
    }
}

function showAnimalOptions(animalType) {
    hideAllSelects(); 

    switch (animalType) {
        case "cachorro":
            document.getElementById("selectRacaoCachorro").style.display = "block";
            break;

        case "gato":
            document.getElementById("selectRacaoGato").style.display = "block";
            break;

        case "coelho":
            document.getElementById("selectRacaoCoelho").style.display = "block";
            break;

        default:
            break;
    }
}

function hideAllSelects() {
    var selects = document.querySelectorAll(".form-select"); 
    selects.forEach(function (select) {
        select.style.display = "none";
    });
}