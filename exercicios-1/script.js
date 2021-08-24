function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];;
  let ul_days = document.getElementById('days');

  for (let index=0; index < dezDaysList.length; index +=1) {
    let li = document.createElement('li');
    li.classList.add('day');
    li.innerText = dezDaysList[index];
    ul_days.appendChild(li);
  // Adiciona a classe holiday aos dias 24, 25 e 31.
    if(dezDaysList[index] === 24|| dezDaysList[index]=== 25 || dezDaysList[index]=== 31){
        li.classList.add('holiday');
    };
  //Adiciona a classe friday aos dias 4,11,18,25
    if(dezDaysList[index] === 4 || dezDaysList[index] === 11 ||dezDaysList[index] === 18 ||dezDaysList[index] === 25){
        li.classList.add('friday');
    };
  };

//implementa uma função que recebe como parametro a string 'feriados' e cria dinamicamente um botão com o nome 'feriados'
function cria_feriados(Feriados){
let feriado_button = document.createElement('button');
let div_buttons_container = document.querySelector('.buttons-container');
feriado_button.innerText = 'Feriados';
feriado_button.id = 'btn-holiday'
div_buttons_container.appendChild(feriado_button);
};
cria_feriados('Feriados');
//Implementa uma função que adiciona ao botao 'Feriados' um evento de click que muda a cor
// de fundo dos dias que possuem a classe 'holiday'.
function display_feriado () {
  let background_color = 'blue';
  let feriado_button = document.getElementById('btn-holiday');
  let lista_com_feriados = document.getElementsByClassName('holiday');
  let branca = 'white'


  feriado_button.addEventListener('click', function(){
    for (let i=0; i < lista_com_feriados.length; i+=1) {
      if (lista_com_feriados[i].style.backgroundColor != background_color){
        lista_com_feriados[i].style.backgroundColor = background_color;
      }
      else{
        lista_com_feriados[i].style.backgroundColor = branca
      }
    }
  })
}
display_feriado();

//Implemente uma função que receba como parametro a string 'Sexta-feira' e crie dinamicamente um
//botão com o nome 'Sexta-feira'.

function friday_button (Sextafeira) {
  let friday_button = document.createElement('button');
  friday_button.innerText = 'Sexta-feira';
  friday_button.id = 'btn-friday'
  let div_buttons_container = document.querySelector('.buttons-container');
  div_buttons_container.appendChild(friday_button);
  
}
friday_button('Sexta-feira');

//Implemente uma função que adicione ao botão 'Sexta-feira' um evento de click que modifica
//o texto exibido nos dias que são Sexta-feiras.

function display_sexta (fridaylist) {
  let friday_list = document.getElementsByClassName('friday');
  let muda_texto = 'SEXTOU!!';
  let friday_button = document.getElementById('btn-friday')


  friday_button.addEventListener('click', function() {
    for (let i=0; i < friday_list.length; i+=1) {
      if(friday_list[i].innerText != muda_texto){
        friday_list[i].innerText = muda_texto;
      }
      else{
        friday_list[i].innerText = fridaylist[i]
      }
    }
  })
}
let dezFridays = [4,11,18,25]
display_sexta(dezFridays)

function mouse_over () {
  let dias = document.querySelector('#days');
  
    dias.addEventListener('mouseover', function(event){
      event.target.style.fontSize = '30px';
      event.target.style.fontWeight = '600'
    })
}

function mouse_out () {
  let dias = document.querySelector('#days');

  dias.addEventListener('mouseout', function(event) {
    event.target.style.fontSize = '20px';
    event.target.style.fontWeight = '200'
  })
}
mouse_over()
mouse_out()

function personaliza (funcao) {
  let container_funcao = document.querySelector('.my-tasks');
  let create_span = document.createElement('span');

  create_span.innerText = funcao;
  container_funcao.appendChild(create_span)

}
personaliza('Cozinhar');

function add_color (cor) {
  let task_container = document.querySelector('.my-tasks');
  let new_task = document.createElement('div');

  new_task.className = 'task';
  new_task.style.backgroundColor = cor;
  task_container.appendChild(new_task)
}
add_color('green');

function display_div () {
  let task_selected = document.getElementsByClassName('task selected')
  let task = document.querySelector('.task');

  task.addEventListener('click', function(event) {
    if (task_selected.length === 0) {
      event.target.className = 'task selected'
    }
     else {
      event.target.className = 'task'
    }
  })
}
display_div()


function clica_mes () {
  let dia = document.querySelector('#days');
  let task_selected = document.getElementsByClassName('task selected')
  let taskDiv = document.querySelector('.task')
  let classe = 'task selected';
  let taskColor = taskDiv.style.backgroundColor

  dia.addEventListener('click', function(event){
    let eventTargetColor = event.target.style.color;
    if (task_selected.length > 0 && eventTargetColor !== taskColor ) {
      let color = task_selected[0].style.backgroundColor;
      event.target.style.backgroundColor = color;
    }
    else if ( eventTargetColor === taskColor && task_selected.length !== 0) {
      event.target.style.color = 'rgb(119,119,119)'
    }
  })
}
clica_mes()