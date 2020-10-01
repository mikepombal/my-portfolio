import { LegacyRef } from 'react';

export enum ComponentType {
  'INPUT',
  'SELECT',
}

interface Component {
  id: string;
  defaultValue?: string;
  componentRef: LegacyRef<HTMLInputElement>;
  disabled?: boolean;
  type: ComponentType;
}

const getFieldComponent: React.FC<Component> = ({
  id,
  defaultValue,
  componentRef,
  disabled,
  type,
}) => {
  switch (type) {
    case ComponentType.INPUT: {
      return (
        <input
          type="text"
          id={id}
          name={id}
          defaultValue={defaultValue}
          ref={componentRef}
          disabled={disabled}
          className="p-2"
        />
      );
    }
    case ComponentType.SELECT: {
      return <div className="p-2 bg-white">TBD</div>;
    }
  }
};

interface Field {
  id: string;
  label: string;
  defaultValue: string;
  componentRef: LegacyRef<HTMLInputElement>;
  errorLabel?: string | null;
  disabled?: boolean;
  type: ComponentType;
}
export const Field: React.FC<Field> = ({
  id,
  label,
  defaultValue = '',
  componentRef,
  errorLabel,
  disabled = false,
  type,
}) => (
  <div className="flex items-center mb-4">
    <label
      htmlFor={id}
      className="w-32 inline-block pr-4"
      style={{ textAlign: 'end' }}
    >
      {label}:
    </label>
    <div className="w-56 rounded-md">
      {getFieldComponent({
        id,
        componentRef,
        defaultValue,
        disabled,
        type,
      })}
    </div>
    {errorLabel && <div className="error">{errorLabel}</div>}
  </div>
);
