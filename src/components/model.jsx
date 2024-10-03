// Modal.jsx
import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null; // Não renderiza nada se o modal não estiver aberto

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <button onClick={onClose} className="absolute top-2 right-2">X</button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
