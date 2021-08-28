let TagEstado = document.getElementById('estado-id');
let estados = ['AC - Acre','AL - Alagoas','AP - Amapá','AM - Amazonas','BA - Bahia','CE - Ceará','DF - Distrito Federal','ES - Espírito Santo','GO - Goías','MA - Maranhão','MT - Mato Grosso','MS - Mato Grosso do Sul','MG - Minas Gerais','PA - Pará','PB - Paraíba','PR - Paraná','PE - Pernambuco','PI - Piauí','RJ - Rio de Janeiro','RN - Rio Grande do Norte','RS - Rio Grande do Sul','RO - Rondônia','RR - Roraíma','SC - Santa Catarina','SP - São Paulo','SE - Sergipe','TO - Tocantins']



function adicionaEstadosDoBrasil () {
    for (let index=0; index < estados.length; index +=1) {
        let optionElement = document.createElement('option');
        optionElement.innerText = estados[index]
        optionElement.value = estados[index]
        TagEstado.appendChild(optionElement)
    }
}

adicionaEstadosDoBrasil()


