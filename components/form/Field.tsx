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
  defaultValue?: string;
  registration: UseFormRegisterReturn;
}

interface Num {
  name: ComponentType.NUMBER;
  defaultValue?: number;
  registration: UseFormRegisterReturn;
}

interface Money {
  name: ComponentType.MONEY;
  defaultValue?: number;
  registration: UseFormRegisterReturn;
}
interface Date {
  name: ComponentType.DATETIME;
  defaultValue?: string;
  registration: UseFormRegisterReturn;
}
interface Select {
  name: ComponentType.SELECT;
  options: Array<string>;
  defaultValue?: string;
  registration: UseFormRegisterReturn;
}

type TypeComponent = Text | Num | Money | Date | Select;

interface Component {
  id: string;
  readOnly?: boolean;
  type: TypeComponent;
}

const getFieldComponent: React.FC<Component> = (props) => {
  const { id, readOnly, type } = props;
  switch (type.name) {
    case ComponentType.TEXT: {
      return (
        <input
          type="text"
          id={id}
          defaultValue={type.defaultValue}
          readOnly={readOnly}
          className={`p-2 w-full ${readOnly && 'bg-green-300'}`}
          {...type.registration}
        />
      );
    }
    case ComponentType.NUMBER: {
      return (
        <input
          type="number"
          step="1"
          id={id}
          defaultValue={type.defaultValue}
          readOnly={readOnly}
          className={`p-2 w-full ${readOnly && 'bg-green-300'}`}
          {...type.registration}
        />
      );
    }
    case ComponentType.MONEY: {
      return (
        <div className="flex w-full">
          <div className="p-2 pr-0 bg-white">£</div>
          <input
            type="number"
            step="0.01"
            min="0"
            id={id}
            defaultValue={type.defaultValue}
            readOnly={readOnly}
            className={`p-2 pl-0 w-full outline-none ${
              readOnly && 'bg-green-300'
            }`}
            {...type.registration}
          />
        </div>
      );
    }
    case ComponentType.DATETIME: {
      return (
        <input
          type="datetime-local"
          id={id}
          defaultValue={type.defaultValue || new Date().toLocaleString()}
          readOnly={readOnly}
          className={`p-2 w-full ${readOnly && 'bg-green-300'}`}
          {...type.registration}
        />
      );
    }
    case ComponentType.SELECT: {
      return (
        <select
          defaultValue={type.defaultValue}
          className={`p-2 w-full ${readOnly && 'bg-green-300'}`}
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
  readOnly?: boolean;
  type: TypeComponent;
}

export const Field: React.FC<Field> = (props) => {
  const { id, label, errorLabel, readOnly = false, type } = props;
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
          readOnly,
          type,
        })}
      </div>
      {errorLabel && <div className="error">{errorLabel}</div>}
    </div>
  );
};
