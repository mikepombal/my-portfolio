interface Button {
  label: string;
  onClick: () => void;
}

const Button: React.FC<Button> = ({ label, onClick }) => (
  <button
    className="bg-indigo-800 text-white px-6 py-4 rounded-full font-extrabold"
    onClick={onClick}
  >
    {label}
  </button>
);

export default Button;
