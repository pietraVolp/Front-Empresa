"use client"; // Adiciona esta linha para tornar o componente um Client Component
import React from 'react';
import "../../styles/globals.css";

const Cadastro = () => {
    return (
        <div className="bg-gradient-to-r from-blue-500 to-blue-300 min-h-screen">
            <div>
                <img 
                    src="./img/fundo-cadastro.png" 
                    alt="" 
                    className="w-full h-full relative" 
                />
            </div>

            <div className="bg-blue-300/75 w-3/5 h-auto ml-[390px] items-center rounded-lg mt-[-270px] absolute">
                <div className="ml-96 flex">
                    <img 
                        src="/Front/img/image 46.png" 
                        alt="" 
                        className="w-24" 
                    />
                    <h2 className="font-bold font-sans text-2xl text-blue-900 mt-10 ml-10">CADASTRO</h2>
                </div>


               {/* Nome da Empresa */}
                 <div className="flex mt-10 ml-16">
                    <div>
                        <label htmlFor="nomeEmpresa" className="block text-stone-500 text-base font-sans mb-2 text-lg">Nome da empresa</label>
                        <input 
                            type="text" 
                            id="nomeEmpresa" 
                            placeholder="Nome da empresa" 
                            className="shadow-2xl w-72 h-10 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                        />
                        <img 
                            src="./img/empresa.png" 
                            alt="" 
                            className="ml-60 mt-[-37px] w-10" 
                        />
                    </div>


              {/* Nome do Propietario */}
                    <div className="ml-10">
                        <label htmlFor="nomeProprietario" className="block text-stone-500 text-base font-sans mb-2 text-lg">Nome do proprietário</label>
                        <input 
                            type="text" 
                            id="nomeProprietario" 
                            placeholder="Nome do proprietário" 
                            className="shadow-2xl w-72 h-10 text-base border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                        />
                        <img 
                            src="./img/pessoa.icon.png" 
                            alt="" 
                            className="ml-60 mt-[-35px] w-7" 
                        />
                    </div>

                 {/* CEP */}
 
                    <div className="ml-10">
                        <label htmlFor="cep" className="block text-stone-500 text-base font-sans mb-2 text-lg">CEP</label>
                        <input 
                            type="text" 
                            id="cep" 
                            placeholder="123.456.789/10" 
                            className="shadow-2xl w-72 h-10 text-base border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                        />
                        <img 
                            src="./img/local.png" 
                            alt="" 
                            className="ml-60 mt-[-35px] w-7" 
                        />
                    </div>
                </div>

                {/* Email */}

                <div className="flex">
                    <div className="mt-4 ml-16">
                        <label htmlFor="email" className="block text-stone-500 text-base font-sans mb-2 text-xl">Email</label>
                        <input 
                            type="email" 
                            id="email" 
                            placeholder="seu@email.com" 
                            className="shadow-2xl w-[620px] h-10 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                        />
                        <img 
                            src="/Front/img/email.png" 
                            alt="" 
                            className="ml-96 pl-60 mt-[-37px] w-10" 
                        />
                    </div>

                    {/* Logradouro */}

                    <div className="ml-8">
                        <label htmlFor="logradouro" className="block text-stone-500 text-base font-sans mb-2 text-lg">Logradouro</label>
                        <input 
                            type="text" 
                            id="logradouro" 
                            placeholder="" 
                            className="shadow-2xl w-72 h-10 text-base border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                        />
                    </div>
                </div>

                {/*  Senha */}

                <div className="flex mt-10 ml-16">
                    <div>
                        <label htmlFor="senha" className="block text-stone-500 text-base font-sans mb-2 text-lg">Senha</label>
                        <div className="relative">
                            <input 
                                type="password" 
                                id="senha" 
                                placeholder="**********" 
                                className="shadow-2xl w-72 h-10 text-base border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                            />
                            <img 
                                id="toggleSenha" 
                                src="./img/cadeado.png" 
                                alt="Mostrar senha" 
                                className="absolute w-5 top-1/2 right-4 transform -translate-y-1/2 cursor-pointer" 
                            />
                        </div>
                    </div>

                    {/* CNPJ */}

                    <div className="ml-10">
                        <label htmlFor="cnpj" className="block text-stone-500 text-base font-sans mb-2 text-lg">CNPJ</label>
                        <input 
                            type="text" 
                            id="cnpj" 
                            placeholder="12345678" 
                            className="shadow-2xl w-72 h-10 text-base border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                        />
                        <img 
                            src="./img/identificacao.png" 
                            alt="" 
                            className="ml-60 mt-[-37px] w-6" 
                        />
                    </div>

                    {/* Bairro */}

                 
                    <div className="ml-10 mt-[-45px]">
                        <label htmlFor="bairro" className="block text-stone-500 text-base font-sans mb-1 text-lg">Bairro</label>
                        <input 
                            type="text" 
                            id="bairro" 
                            placeholder="" 
                            className="shadow-2xl w-72 h-10 text-base border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                        />
                    </div>

                    {/* Cidade */}

                    <div className="ml-[660px] mt-7 absolute">
                        <label htmlFor="cidade" className="block text-stone-500 text-base font-sans mb-1 text-lg">Cidade</label>
                        <input 
                            type="text" 
                            id="cidade" 
                            placeholder="" 
                            className="shadow-2xl w-72 h-10 text-base border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                        />
                    </div>
                </div>

                {/* Telefone */}

                <div className="flex mt-8 ml-[-28px]">
                    <div className="ml-24">
                        <label htmlFor="telefone" className="block text-stone-500 text-base font-sans mb-2 text-lg">Telefone</label>
                        <input 
                            type="text" 
                            id="telefone" 
                            placeholder="(11)1234-5678" 
                            className="shadow-2xl w-72 h-10 border border-gray-300 rounded-lg p-3 text-base focus:outline-none focus:ring-2 focus:ring-blue-500" 
                        />
                        <img 
                            src="./img/fone.png" 
                            alt="" 
                            className="ml-60 mt-[-37px] w-5" 
                        />
                    </div>

                    <div className="ml-10">
                        <label htmlFor="telefoneClinica" className="block text-stone-500 text-base font-sans mb-2 text-lg">Telefone da Empresa</label>
                        <input 
                            type="text" 
                            id="telefoneClinica" 
                            placeholder="(11)1234-5678" 
                            className="shadow-2xl w-72 h-10 border border-gray-300 rounded-lg p-3 text-base focus:outline-none focus:ring-2 focus:ring-blue-500" 
                        />
                        <img 
                            src="./img/fone.png" 
                            alt="" 
                            className="ml-60 mt-[-37px] w-5" 
                        />
                    </div>

                    <div className="ml-10">
                        <label htmlFor="estado" className="block text-stone-500 text-base font-sans mb-2 text-lg">Estado</label>
                        <input 
                            type="text" 
                            id="estado" 
                            placeholder="" 
                            className="shadow-2xl w-72 h-10 text-base border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                        />
                    </div>
                </div>

                <div className="mt-20 mb-10 ml-96">
                    <button 
                        id="cadastro" 
                        className="bg-blue-900 text-white rounded-3xl w-80 h-14 text-2xl"
                    >
                        CADASTRAR
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Cadastro;