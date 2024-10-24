"use client";
import React from "react";
import CadastroDoutor from "@/js/cadastroDoutor.js"

export default function Modal({isOpen,  setModalOpen}){
  if(isOpen){

    return (
      <div id="modal" className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
    <div className="bg-white p-6 rounded-lg shadow-lg w-2/4 h-3/6">
    <h2 className="font-bold text-3xl text-blue-950 font-sans mb-4 flex items-center justify-center">
            CADASTRAR DOUTOR
          </h2>
      <div className="flex">
        <div className="ml-10">
          <label 
            htmlFor="name" 
            className="block text-stone-500 text-base font-sans mb-2 text-lg"
          >
            Nome*
          </label>
          <input
            type="text"
            id="nome"
            placeholder="Nome do proprietário"
            className="shadow-2xl w-96 h-12 text-base border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <img
            src="./img/pessoa.icon.png"
            alt="Ícone Pessoa"
            className="ml-80 mt-[-35px] w-7"
          />
        </div>




        <div className="ml-12">
          <label 
            htmlFor="phone" 
            className="block text-stone-500 text-base font-sans mb-2 text-lg"
          >
            Telefone
          </label>
          <input
            type="tel"
            id="telefone"
            placeholder="(11)1234-5678"
            className="shadow-2xl w-96 h-12 border border-gray-300 rounded-lg p-3 text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <img
            src="./img/fone.png"
            alt="Ícone Telefone"
            className="ml-80 mt-[-37px] w-5"
          />
        </div>
      </div>





      <div className="flex">
        <div className="ml-10 mt-1">
          <label 
            htmlFor="email" 
            className="block text-stone-500 text-base font-sans mb-2 text-lg"
          >
            Email*
          </label>
          <input
            type="email"
            id="email"
            placeholder="seuemail@email.com"
            className="shadow-2xl w-96 h-12 text-base border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <img
            src="./img/email.png"
            alt="Ícone Email"
            className="ml-80 mt-[-35px] w-6"
          />
        </div>





        <div className="ml-12 mt-1">
          <label 
            htmlFor="options" 
            className="block text-stone-500 text-base font-sans mb-2 text-lg"
          >
            Escolha uma opção:
          </label>
          <select
            id="options"
            className="shadow-2xl w-96 h-12 text-base border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="" disabled selected>
              Selecione...
            </option>
            <option value="">Dermatologista</option>
            <option value="">Nutricionista</option>
            <option value="">Cardiologista</option>
            <option value="">Psicologo</option>
            <option value="">Clínico</option>
          </select>
        </div>
      </div>

      <div className="flex">
        <div className="ml-10 mt-1">
          <label 
            htmlFor="senha" 
            className="block text-stone-500 text-base font-sans mb-2 text-lg"
          >
            Senha*
          </label>
          <input
            type="password"
            id="senha"
            placeholder="***********"
            className="shadow-2xl w-96 h-12 text-base border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <img
            src="./img/cadeado.png"
            alt="Ícone Cadeado"
            className="ml-80 mt-[-35px] w-6"
          />
        </div>

        <div className="ml-12 mt-1">
          <label 
            htmlFor="dataNascimento" 
            className="block text-stone-500 text-base font-sans mb-2 text-lg"
          >
            Data de Nascimento
          </label>
          <input
            type="date"
            id="dataNascimento"
            className="shadow-2xl w-96 h-12 text-blue-950 text-base border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <div className="flex">
        <div className="ml-10 mt-1">
          <label 
            htmlFor="crm" 
            className="block text-stone-500 text-base font-sans mb-2 text-lg"
          >
            CRM*
          </label>
          <input
            type="text"
            id="crm"
            placeholder="1234-56"
            className="shadow-2xl w-96 h-12 text-base border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <img
            src="./img/identificacao.png"
            alt="Ícone CRM"
            className="ml-80 mt-[-35px] w-8"
          />
        </div>

        <div className="ml-44 mt-10">
          <button
          
            id="cadastro"
            className="bg-blue-950 text-white font-bold px-4 py-2 rounded-lg hover:bg-blue-900"
          >
            CADASTRAR
          </button>
        </div>
      </div>
    </div>
    <CadastroDoutor/>
  </div>

    );
  }
  
  return null
}

