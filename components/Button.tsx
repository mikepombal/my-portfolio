interface Button {
  label: string;
  onClick: () => void;
  classname?: string;
}

const Button: React.FC<Button> = ({ label, classname, onClick }) => (
  <button
    className={`bg-indigo-800 text-white px-6 py-4 rounded-full font-extrabold ${classname}`}
    onClick={onClick}
  >
    {label}
  </button>
);

export default Button;
