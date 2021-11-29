

const comanda = document.querySelector('main');
const chapeiro = document.getElementById("comandaP"); 
const listaDeIngredientes = document.getElementById("listaIngrediente");



function calcularPreco() {
    let valorTotal = 0;
    let tipoPao = document.querySelector('input[name="pão"]:checked').id;
    let salada = document.querySelector('input[name="salada"]:checked').id;
    let queijo = document.querySelector('input[name="queijo"]:checked').id;
    let hamburger = document.querySelector('input[name="hamburguer"]:checked').id;

    //preço por tipo de pão
    if (tipoPao == "paoFrances") {
        valorTotal += 3;
        let ingrediente = document.createElement('li');
        ingrediente.innerText = "Pão Francês";
        listaDeIngredientes.appendChild(ingrediente);
    } else if (tipoPao == "paoAustraliano") {
        valorTotal += 8;
        let ingrediente = document.createElement('li');
        ingrediente.innerText = "Pão Australiano";
        listaDeIngredientes.appendChild(ingrediente);
    } else if (tipoPao == "paoBrioche") {
        valorTotal += 6;
        let ingrediente = document.createElement('li');
        ingrediente.innerText = "Pão de Brioche";
        listaDeIngredientes.appendChild(ingrediente);
    }
    
    //preço por tipo de hamburguer

    if (hamburger == "hamburguerPicanha") {
        valorTotal += 13;
        let ingrediente = document.createElement('li');
        ingrediente.innerText = "Hamburguer de Picanha";
        listaDeIngredientes.appendChild(ingrediente);
    } else if(hamburger == "hamburguerCostela") {
        valorTotal += 10;
        let ingrediente = document.createElement('li');
        ingrediente.innerText = "Hamburguer de Costela";
        listaDeIngredientes.appendChild(ingrediente);
    } else if (hamburger == "hamburguerVegano") {
        valorTotal += 12;
        let ingrediente = document.createElement('li');
        ingrediente.innerText = "Hamburguer Vegano";
        listaDeIngredientes.appendChild(ingrediente);
    }

    //preço por tipo de salada

    if (salada == "alface") {
        valorTotal += 1.5;
        let ingrediente = document.createElement('li');
        ingrediente.innerText = "Alface";
        listaDeIngredientes.appendChild(ingrediente);
    } else if (salada == "tomate") {
        valorTotal += 1.5;
        let ingrediente = document.createElement('li');
        ingrediente.innerText = "Tomate";
        listaDeIngredientes.appendChild(ingrediente);
    } else if (salada == "semSalada") {
        valorTotal += 0;
        let ingrediente = document.createElement('li');
        ingrediente.innerText = "Sem Salada";
        listaDeIngredientes.appendChild(ingrediente);
    }

//preço por tipo de queijo

    if(queijo == "mussarela") {
        valorTotal += 3;
        let ingrediente = document.createElement('li');
        ingrediente.innerText = "Mussarela";
        listaDeIngredientes.appendChild(ingrediente);
    } else if (queijo == "prato") {
        valorTotal += 3;
        let ingrediente = document.createElement('li');
        ingrediente.innerText = "Queijo Prato";
        listaDeIngredientes.appendChild(ingrediente);
    } else if (queijo == "cheddar") {
        valorTotal += 5;
        let ingrediente = document.createElement('li');
        ingrediente.innerText = "Queijo Cheddar";
        listaDeIngredientes.appendChild(ingrediente);
    }

    console.log(valorTotal);
    chapeiro.innerHTML = "Valor total: R$" + valorTotal;

}
