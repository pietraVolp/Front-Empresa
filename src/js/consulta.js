'use strict'

import { getConsultas } from "./info.js";



function criarCard(consulta) {
    const card = document.createElement('div');
    card.classList.add(
        
    );


    const especialidade = document.createElement('p');
    especialidade.textContent = consulta.nome_especialidade;
    especialidade.classList.add(
        'text-blue-950',
        'text-xl',
        'font-bold',
        'font-sans',
    );

    const nomeMedico = document.createElement('h2');
    nomeMedico.textContent =  consulta.nome_medico;
    nomeMedico.classList.add(
        'text-blue-950', 
        'text-lg',
        'font-bold',
    );


    const detalhes = document.createElement('p');
    detalhes.textContent = "Descrição: " + consulta.detalhes_consulta;
    detalhes.classList.add(
        'text-black'
    );



    const dias = document.createElement('p');
    // Tenta converter `dias_consulta` para uma data, se for possível
    const diasData = new Date(consulta.dias_consulta); // Cria um objeto Date
    if (!isNaN(diasData)) {
        dias.textContent = "Dia: " + diasData.toLocaleDateString(); // Converte para o formato local
    } else {
        dias.textContent = "Dia: " + consulta.dias_consulta; // Se não for uma data, exibe o valor original
    }
    dias.classList.add('text-black');

    const horario = document.createElement('p');
    horario.textContent = consulta.horas_consulta;
    horario.textContent = "Horário: " + consulta.horas_consulta.slice(11,19);
    horario.classList.add('text-black');

    card.append(especialidade, nomeMedico, detalhes, dias, horario);
    card.addEventListener('click', () => {
    window.location.href = '/info?id=' + consulta.id_consulta;
    });

    return card; // Retorna apenas o card
}

async function preencherContainer() {
    const contanierConsulta = document.getElementById('contanierConsulta');

    // Cria o contêiner se não existir
    if (!contanierConsulta) {
        const newContainer = document.createElement('div');
        newContainer.id = 'contanierConsulta';
        newContainer.classList.add(''); // Adicione as classes que desejar
        document.body.appendChild(newContainer);
    }

    const consultas = await getConsultas();

    // Acesse o contêiner que agora existe
    const container = document.getElementById('contanierConsulta');

    consultas.forEach(consulta => {
        const card = criarCard(consulta);
        container.appendChild(card);
        console.log(card);
    });
}

preencherContainer();

