'use'
import React from "react";

export default function Modal({isOpen,  setModalOpen}){
  if(isOpen){

    return (
      <div id="modal" className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
        <div className="bg-white p-6 rounded-lg shadow-lg w-2/4 h-2/5">
          <h2 className="font-bold text-3xl text-blue-950 font-sans mb-4 flex items-center justify-center">
            CADASTRAR CONSULTA
          </h2>

          <div className="flex">
            <div className="ml-10 mt-1">
              <label htmlFor="especialidade" className="block text-stone-500 text-base font-sans mb-2 text-lg">
                Especialidade*
              </label>
              <select
                id="especialidade"
                className="shadow-2xl w-96 h-12 text-base border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="selecione..."
              >
                <option value="1" disabled>
                  Selecione...
                </option>
                <option value="2">Dermatologista</option>
                <option value="3">Nutricionista</option>
                <option value="4">Cardiologista</option>
                <option value="5">Psicólogo</option>
                <option value="6">Clínico</option>
              </select>
            </div>

            <div className="ml-12 mt-1">
              <label htmlFor="medico" className="block text-stone-500 text-base font-sans mb-2 text-lg">
                Médico*
              </label>
              <select
                id="medico"
                className="shadow-2xl w-96 h-12 text-base border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="selecione..."
              >
                <option value="1" disabled>
                selecione...
                </option>
                <option value="2">Maria</option>
                <option value="3">Julia</option>
                <option value="4">Augusto</option>
              </select>
            </div>
          </div>

          <div className="flex">
            <div className="ml-10 mt-1">
              <label htmlFor="date" className="block text-stone-500 text-base font-sans mb-2 text-lg">
                Dia de consultas*
              </label>
              <input
                type="date"
                id="date"
                placeholder="00/00/0000"
                className="shadow-2xl w-96 h-12 text-base border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="ml-14 mt-1">
              <label htmlFor="detalhes" className="block text-stone-500 text-base font-sans mb-2 text-lg">
                Detalhes da consulta*
              </label>
              <input
                type="text"
                id="detalhes"
                placeholder=""
                className="shadow-2xl w-96 h-12 text-base border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="flex">
            <div className="ml-10 mt-1">
              <label htmlFor="horario" className="block text-stone-500 text-base font-sans mb-2 text-lg">
                Horários*
              </label>
              <input
                type="time"
                id="horario"
                placeholder="00:00"
                className="shadow-2xl w-96 h-12 text-base border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="ml-20 mt-10">
              <button
                onClick={() => setModalOpen(false)} // Fecha o modal
                className="bg-blue-300 w-72 text-blue-950 font-bold px-4 py-2 rounded-lg hover:bg-blue-900"
              >
                CADASTRAR
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null
}