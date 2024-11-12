'use client';
import React, { useEffect, useState } from 'react';
import { getConsulta } from '@/js/info.js';

// Componente Modal
const Modal = ({ isOpen, }) => {
  if (!isOpen) return null; // Não renderiza se o modal não estiver aberto

  return 
   
  
};

// Componente Principal CadastroConsultas
const CadastroConsultas = () => {
  const [isModalOpen, setModalOpen] = useState(false); // Controle do estado do modal


  return (
    <div>
      <button className='bg-[--font] w-[25vh] h-[5vh] rounded-full ml-[130vh] mt-[10vh] text-white font-bold' onClick={() => setModalOpen(true)}>oi</button>
      <Modal 
        isOpen={isModalOpen} 
        setModalOpen={setModalOpen} 
        especialidades={especialidades} 
        medicos={medicos} 
        handleCadastro={handleCadastro}
      />
    </div>
  );
};

export default CadastroConsultas;
