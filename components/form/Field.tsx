import { UseFormRegisterReturn } from 'react-hook-form';

export enum ComponentType {
  'TEXT',
  'NUMBER',
  'MONEY',
  'SELECT',
  'DATETIME',
}

interface Text {
  name: ComponentType.TEXT;
  // componentRef: LegacyRef<HTMLInputElement>;
  defaultValue?: string;
  registration: UseFormRegisterReturn;
}

interface Num {
  name: ComponentType.NUMBER;
  // componentRef: LegacyRef<HTMLInputElement>;
  defaultValue?: number;
  registration: UseFormRegisterReturn;
}
interface Date {
  name: ComponentType.DATETIME;
  // componentRef: LegacyRef<HTMLInputElement>;
  defaultValue?: string;
  registration: UseFormRegisterReturn;
}
interface Select {
  name: ComponentType.SELECT;
  // componentRef: LegacyRef<HTMLSelectElement>;
  options: Array<string>;
  defaultValue?: string;
  registration: UseFormRegisterReturn;
}

type TypeComponent = Text | Num | Date | Select;

interface Component {
  id: string;
  disabled?: boolean;
  type: TypeComponent;
}

const getFieldComponent: React.FC<Component> = (props) => {
  const { id, disabled, type } = props;
  switch (type.name) {
    case ComponentType.TEXT: {
      return (
        <input
          type="text"
          id={id}
          defaultValue={type.defaultValue}
          disabled={disabled}
          className="p-2 w-full"
          {...type.registration}
        />
      );
    }
    case ComponentType.NUMBER: {
      return (
        <input
          type="number"
          step="0.00000001"
          id={id}
          defaultValue={type.defaultValue}
          disabled={disabled}
          className="p-2 w-full"
          {...type.registration}
        />
      );
    }
    case ComponentType.DATETIME: {
      return (
        <input
          type="datetime-local"
          id={id}
          defaultValue={type.defaultValue || new Date().toLocaleString()}
          disabled={disabled}
          className="p-2 w-full"
          {...type.registration}
        />
      );
    }
    case ComponentType.SELECT: {
      return (
        <select
          defaultValue={type.defaultValue}
          className="p-2 w-full"
          {...type.registration}
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
  errorLabel?: string | null;
  disabled?: boolean;
  type: TypeComponent;
}

export const Field: React.FC<Field> = (props) => {
  const { id, label, errorLabel, disabled = false, type } = props;
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
          disabled,
          type,
        })}
      </div>
      {errorLabel && <div className="error">{errorLabel}</div>}
    </div>
  );
};
