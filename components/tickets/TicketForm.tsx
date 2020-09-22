import { useForm } from 'react-hook-form';
import { Tickets_Insert_Input } from '../../types/generated/graphql';
import { LegacyRef } from 'react';

interface Component {
  id: string;
  defaultValue?: string;
  componentRef: LegacyRef<HTMLInputElement>;
  disabled?: boolean;
}

const getComponent: React.FC<Component> = ({
  id,
  defaultValue,
  componentRef,
  disabled,
}) => {
  return (
    <input
      type="text"
      id={id}
      name={id}
      defaultValue={defaultValue}
      ref={componentRef}
      disabled={disabled}
      className="w-56 p-2 rounded-md"
    />
  );
};

interface Field {
  id: string;
  label: string;
  defaultValue?: string;
  componentRef: LegacyRef<HTMLInputElement>;
  errorLabel?: string | void;
  disabled?: boolean;
}
const Field: React.FC<Field> = ({
  id,
  label,
  defaultValue = '',
  componentRef,
  errorLabel,
  disabled = false,
}) => (
  <div className="field mb-2">
    <label
      htmlFor={id}
      className="w-32 inline-block pr-4"
      style={{ textAlign: 'end' }}
    >
      {label}:
    </label>
    {getComponent({ id, componentRef, defaultValue, disabled })}
    {errorLabel && <div className="error">Your must enter a name.</div>}
  </div>
);

interface TicketForm {
  onSubmit: (data: Tickets_Insert_Input) => Promise<void>;
  selectedTicket: Tickets_Insert_Input;
}
const TicketForm: React.FC<TicketForm> = ({ onSubmit, selectedTicket }) => {
  const { register, handleSubmit, errors } = useForm<Tickets_Insert_Input>();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="p-4">
        <Field
          id="ticket"
          label="Ticket"
          defaultValue={selectedTicket?.ticket}
          componentRef={register({ required: true })}
          disabled={!!selectedTicket}
          errorLabel={
            errors.ticket?.type === 'required' && 'You must enter a ticket.'
          }
        />
        <Field
          id="name"
          label="Name"
          defaultValue={selectedTicket?.name}
          componentRef={register({ required: true })}
          errorLabel={
            errors.ticket?.type === 'required' && 'You must enter a name.'
          }
        />
        <Field
          id="ticket_type"
          label="Type"
          defaultValue={selectedTicket?.ticket_type}
          componentRef={register()}
        />
        <Field
          id="market"
          label="Market"
          defaultValue={selectedTicket?.market}
          componentRef={register()}
        />
      </div>
      <div className="px-6 py-4 bg-indigo-800 flex justify-center text-indigo-800 text-xl">
        <button
          type="submit"
          className="bg-white rounded-full px-4 py-2 font-semibold mx-4"
        >
          {selectedTicket ? 'Update Ticket' : 'Add Ticket'}
        </button>
      </div>
    </form>
  );
};

export default TicketForm;
