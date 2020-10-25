import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

interface Modal {
  onCancel: () => void;
}

const Modal: React.FC<Modal> = ({ children, onCancel }) => {
  const [domNode, setDomNode] = useState<HTMLElement | null>(null);
  useEffect(() => {
    const modalRoot = document.getElementById('modal-root');
    setDomNode(modalRoot);
  }, []);

  if (!domNode) {
    return null;
  }

  const modal = (
    <div className="absolute top-0 right-0 bottom-0 left-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
      <div className="bg-gray-200 rounded-lg overflow-hidden flex flex-col">
        <div className="flex justify-end">
          <button
            onClick={onCancel}
            className="py-2 px-4 self text-2xl font-extrabold bg-indigo-800 text-white rounded-bl-lg"
          >
            X
          </button>
        </div>
        {children}
      </div>
    </div>
  );

  return ReactDOM.createPortal(modal, domNode);
};

export default Modal;
