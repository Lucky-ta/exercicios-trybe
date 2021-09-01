const TagEstado = document.getElementById('estado');
const estados = ['AC - Acre','AL - Alagoas','AP - Amapá','AM - Amazonas','BA - Bahia','CE - Ceará','DF - Distrito Federal','ES - Espírito Santo','GO - Goías','MA - Maranhão','MT - Mato Grosso','MS - Mato Grosso do Sul','MG - Minas Gerais','PA - Pará','PB - Paraíba','PR - Paraná','PE - Pernambuco','PI - Piauí','RJ - Rio de Janeiro','RN - Rio Grande do Norte','RS - Rio Grande do Sul','RO - Rondônia','RR - Roraíma','SC - Santa Catarina','SP - São Paulo','SE - Sergipe','TO - Tocantins']
const submitBtn = document.getElementById('submit-btn');
const clearBtn = document.getElementById('clear');

function adicionaEstadosDoBrasil () {
    for (let index=0; index < estados.length; index +=1) {
        const optionElement = document.createElement('option');
        optionElement.innerText = estados[index]
        optionElement.value = estados[index]
        TagEstado.appendChild(optionElement);
    }
}

function limpaCampos () {
    let formElements = document.querySelectorAll('input');
    let textArea = document.querySelector('textarea');
    for (let i=0; i < formElements.length; i+=1) {
        let userInput = formElements[i];
        userInput.value = '';
        textArea.value = '';
    }
}

window.onload = function () {
    adicionaEstadosDoBrasil()
    submitBtn.addEventListener('click', function (event) {
            event.preventDefault()
            let name = document.getElementById('nome');
            let email = document.getElementById('email');
            let cpf = document.getElementById('cpf');
            let endereco = document.getElementById('endereco');
            let cidade = document.getElementById('cidade');
            let resumo = document.getElementById('resumoCurriculo');
            let cargo = document.getElementById('cargo');
            let descricaoCargo = document.getElementById('descricaoCargo');
            let dataInicio = document.getElementById('dataInicio');
        
            if (name.value.length <= 0 || name.value.length > 40) {
                alert('Nome inválido!');
            }
            if (email.value.length <= 0 || email.value.length > 50) {
                alert('E-mail inválido!');
            }
            if (cpf.value.length <= 0 || cpf.value.length > 11) {
                alert('Cpf inválido!');
            }
            if (endereco.value.length <= 0 || endereco.value.length > 200) {
                alert('Endereço inválido!');
            }
            if (cidade.value.length <= 0 || cidade.value.length > 28) {
                alert('Cidade inválida!');
            }
            if (resumo.value.length <= 0 || resumo.value.length > 1000) {
                alert('Resumo inválido!');
            }
            if (cargo.value.length <= 0 || cargo.value.length > 40) {
                alert('Cargo inválido!');
            }
            if (descricaoCargo.value.length <= 0 || descricaoCargo.value.length > 500) {
                alert('Descrição inválida!');
            }
    });
    clearBtn.addEventListener('click', limpaCampos)
}
