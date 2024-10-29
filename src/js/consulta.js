'use strict'

import  {getConsultas} from "./info.js"

function criarCard (consulta) {
    const card = document.createElement('div')
    const contanierConsulta = document.getElementById('contanierConsulta')
    contanierConsulta.classList.add(
        'w-[160px]',
        'h-[75px]',
        'p-[15px]',
        'ml-[-344px]',
        'rounded-lg',
        'gap-x-[170px]',
        'gap-y-[20px]',
       
        

        
    )

    card.classList.add(
        'w-[150px]',
        'h-[73px]',
        'p-[15px]',
        'bg-zinc-950',
        'rounded-lg',
    )


    const titulo = document.createElement('h2')
    titulo.textContent = servico.tipo_servico
    titulo.classList.add(
        'text-gray-50',
        'text-base',
        'font-bold',
        'w-[100px]',
        
            
    )


    const preco = document.createElement('p')
    preco.textContent = servico.preco
    preco.classList.add(
        'text-teal-500',
        'font-bold',
        'text-base'
           
        
    )



    card.append(titulo, preco)
    contanierServico.appendChild(card)
    card.addEventListener('click',()=> {
        console.log(servico);
        window.location.href='./info.html?id='+servico.id_servico
    })

    return card, contanierServico
        
    }


    async function preencherContainer () {
        const container = document.querySelector('body')

        const servicos = await getServicos()

        servicos.forEach(servico =>{
            const card = criarCard(servico)
            container.appendChild(card)
            console.log(card)

        })
            
        };
        preencherContainer ()
    