"use client";
import NavBarLayout from "@/components/layout/NavBarLayout";
import { getConsultas } from "@/js/info";
import { useState } from "react";



export default function Consultas() {
    const [openModal, setOpenModal] = useState(false);
    
        return (
            <div className="flex flex-col">
                <NavBarLayout>
            <div className="flex-1 p-4">
            <div className="flex">
            <h1 className="text-4xl font-bold text-[--font] p-10">CONSULTA</h1>
            <div className="relative">
                    <input type="text" placeholder="Pesquisar..." className="bg-[--navempresa] ml-[500px] pl-3 pr-10 py-2 mt-[50px] rounded-full w-96 h-14 border focus:border-blue-900 focus:bg-blue-5 transition-all" />
                    <button>
                        <img src="./img/lupa.png" alt="" className="absolute ml-[-50px] mt-[-19px] w-7" />
                    </button>
            </div>
            </div>

                        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
        <div className="bg-white p-6 rounded-lg shadow-lg w-2/4 h-2/5">
            <h2 className="font-bold text-3xl text-blue-950 font-sans mb-4 flex items-center justify-center">
            CADASTRAR CONSULTA
            </h2>

            <div className="flex">
            <div className="ml-10 mt-1">
               
            </div>

            <div className="ml-12 mt-1">
               
            </div>
            </div>

            <div className="flex">
            <div className="ml-10 mt-1">
                <label
                htmlFor="date"
                className="block text-stone-500 text-base font-sans mb-2 text-lg"
                >
                Dia de consultas*
                </label>
                <input
                type="date"
                id="date"
                className="shadow-2xl w-96 h-12 text-base border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <div className="ml-14 mt-1">
                <label
                htmlFor="detalhes"
                className="block text-stone-500 text-base font-sans mb-2 text-lg"
                >
                Detalhes da consulta*
                </label>
                <input
                type="text"
                id="detalhes"
                className="shadow-2xl w-96 h-12 text-base border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            </div>

            <div className="flex">
            <div className="ml-10 mt-1">
                <label
                htmlFor="horario"
                className="block text-stone-500 text-base font-sans mb-2 text-lg"
                >
                Horários*
                </label>
                <input
                type="time"
                id="horario"
                className="shadow-2xl w-96 h-12 text-base border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <div className="ml-20 mt-10">
         
            </div>
            </div>
        </div>
        </div>
    

                        <div className="flex mt-20 ml-[300px] grid">
                            <div
                            id="contanierConsulta"
                            className="flex flex-wrap gap-4 w-[1100px] h-[100px]">

                            </div>
                            
                        </div>
                    </div>
                </NavBarLayout>
            </div>
        );
    }
    