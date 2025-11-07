const form = document.getElementById("formPendencia");
const tabela = document.querySelector("#tabelaPendencias tbody");

function carregarPendencias() {
    const pendencias = JSON.parse(localStorage.getItem("pendencias")) || [];
    tabela.innerHTML = "";

    pendencias.forEach((item, index) => {
        const row = tabela.insertRow();
        row.innerHTML = `
            <td>${item.cliente}</td>
            <td>${item.produto}</td>
            <td>${item.status}</td>
            <td>${item.dataEntrada}</td>
            <td><button class="remove-btn" onclick="removerPendencia(${index})">X</button></td>
        `;
    });
}

function removerPendencia(index) {
    const pendencias = JSON.parse(localStorage.getItem("pendencias")) || [];
    pendencias.splice(index, 1);
    localStorage.setItem("pendencias", JSON.stringify(pendencias));
    carregarPendencias();
}

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const pendencia = {
        cliente: document.getElementById("cliente").value,
        produto: document.getElementById("produto").value,
        status: document.getElementById("status").value,
        dataEntrada: document.getElementById("dataEntrada").value,
        descricao: document.getElementById("descricao").value,
    };

    const pendencias = JSON.parse(localStorage.getItem("pendencias")) || [];
    pendencias.push(pendencia);
    localStorage.setItem("pendencias", JSON.stringify(pendencias));

    form.reset();
    carregarPendencias();
});

carregarPendencias();
