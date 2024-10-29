'use strict';

import { getConsultas } from "./info.js";

function criarCard(consulta) {
    const card = document.createElement('div');
    card.classList.add('w-[150px]', 'h-[73px]', 'bg-zinc-950', 'rounded-lg');

    const nomeMedico = document.createElement('h2');
    nomeMedico.textContent = consulta.nome_medico;
    nomeMedico.classList.add('text-gray-50', 'text-base', 'font-bold', 'w-[100px]');

    const especialidade = document.createElement('p');
    especialidade.textContent = consulta.nome_especialidade;
    especialidade.classList.add('text-teal-500', 'font-bold', 'text-base');

    const dias = document.createElement('p');
    dias.textContent = consulta.dias_consulta;
    dias.classList.add('text-teal-500', 'font-bold', 'text-base');

    const horario = document.createElement('p');
    horario.textContent = consulta.horas_consulta;
    horario.classList.add('text-teal-500', 'font-bold', 'text-base');
    

    card.append(nomeMedico, especialidade, dias, horario);
    card.addEventListener('click', () => {
        console.log(consulta);
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
        newContainer.classList.add('flex', 'flex-wrap'); // Adicione as classes que desejar
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
