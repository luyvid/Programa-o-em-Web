function nome_funcao() {
    alert(`Função executada com sucesso`);
}

function mudarCor() {
    let corFundo = document.getElementById("corFundo").value;
    
    let fundo = document.body;
    fundo.style.background = corFundo;
}

function mostrarNome() {
    const nomeInserido = document.getElementById("nomeInserido").value;
    const nomeEscolhido = document.getElementById("nomeEscolhido").value;
    const titulo = document.getElementById("titulo");

    nomeEscolhido.value = nomeInserido;
    titulo.textContent = nomeInserido;
}
