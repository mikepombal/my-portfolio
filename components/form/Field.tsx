import { LegacyRef } from 'react';

export enum ComponentType {
  'INPUT',
  'SELECT',
}

interface Input {
  name: ComponentType.INPUT;
  componentRef: LegacyRef<HTMLInputElement>;
}

interface Select {
  name: ComponentType.SELECT;
  componentRef: LegacyRef<HTMLSelectElement>;
  options: Array<string>;
}

type TypeComponent = Input | Select;

interface Component {
  id: string;
  defaultValue?: string;
  disabled?: boolean;
  type: TypeComponent;
}

const getFieldComponent: React.FC<Component> = (props) => {
  const { id, defaultValue, disabled, type } = props;
  switch (type.name) {
    case ComponentType.INPUT: {
      return (
        <input
          type="text"
          id={id}
          name={id}
          defaultValue={defaultValue}
          ref={type.componentRef}
          disabled={disabled}
          className="p-2 w-full"
        />
      );
    }
    case ComponentType.SELECT: {
      return (
        <select
          name={id}
          ref={type.componentRef}
          defaultValue={defaultValue}
          className="p-2 w-full"
        >
          {type.options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      );
    }
  }
};

interface Field {
  id: string;
  label: string;
  defaultValue: string;
  errorLabel?: string | null;
  disabled?: boolean;
  type: TypeComponent;
}

export const Field: React.FC<Field> = (props) => {
  const {
    id,
    label,
    defaultValue = '',
    errorLabel,
    disabled = false,
    type,
  } = props;
  return (
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
          defaultValue,
          disabled,
          type,
        })}
      </div>
      {errorLabel && <div className="error">{errorLabel}</div>}
    </div>
  );
};
