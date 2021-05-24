import { ReactNode } from 'react';

const colors = {
  default: 'border-blue-700 bg-blue-600 text-gray-200',
  warning: 'border-red-700 bg-red-600 text-gray-200',
  good: 'border-green-700 bg-green-600 text-gray-200',
};

interface TextProps {
  children: ReactNode;
  color?: keyof typeof colors;
  className?: string;
}
export const Text: React.FC<TextProps> = ({
  children,
  className,
  color = 'default',
}) => (
  <div
    className={`p-4 m-2 font-bold text-2xl border-4 rounded-lg ${colors[color]} ${className}`}
  >
    {children}
  </div>
);
