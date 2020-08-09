//procurar o botao
document.querySelector("#add-time").addEventListener('click', cloneField)
//quando clicar no botão

//executar uma açao
function cloneField() {
//duplicar os campos
newfieldContainer =  document.querySelector('.schedule-item').cloneNode(true)//boolean: true or false

//limpar os campos
const fields = newfieldContainer.querySelectorAll('input')

//para cada campo, limpar
fields.forEach(function(field) {
    //pegar o field do momento e limpe ele
    field.value = ""

})


//colocar na pagina
document.querySelector('#schedule-items').appendChild(newfieldContainer)
}
