import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

interface Modal {
  onCancel: () => void;
}

const Modal: React.FC<Modal> = ({ children, onCancel }) => {
  const [domNode, setDomNode] = useState<HTMLElement>();
  useEffect(() => {
    const modalRoot = document.getElementById('modal-root');
    setDomNode(modalRoot);
  }, []);

  if (!domNode) {
    return null;
  }

  const modal = (
    <div className="absolute top-0 right-0 bottom-0 left-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-lg overflow-hidden">
        <div className="p-6">{children}</div>
        <div className="p-6 bg-indigo-800 flex justify-center text-indigo-800 text-xl">
          <button
            className="bg-white rounded-full px-4 py-2 font-semibold"
            onClick={onCancel}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );

  return ReactDOM.createPortal(modal, domNode);
};

export default Modal;
