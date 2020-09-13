import { useForm } from 'react-hook-form';
import { Tickets_Insert_Input } from '../../types/generated/graphql';
import { LegacyRef } from 'react';

interface Field {
  id: string;
  label: string;
  defaultValue?: string;
  componentRef: LegacyRef<HTMLInputElement>;
  errorLabel: string | void;
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
    <input
      type="text"
      id={id}
      name={id}
      defaultValue={defaultValue}
      ref={componentRef}
      disabled={disabled}
      className="w-56 p-2 rounded-md"
    />
    {errorLabel && <div className="error">Your must enter a name.</div>}
  </div>
);

const TicketForm = ({ onSubmit, selectedTicket }) => {
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
        {/* <div className="field">
          <label htmlFor="ticket">Ticket</label>
          <input
            type="text"
            id="ticket"
            name="ticket"
            disabled={!!selectedTicket}
            defaultValue={selectedTicket?.ticket}
            ref={register({ required: true })}
          />
          {errors.ticket?.type === 'required' && (
            <div className="error">Your must enter a ticket.</div>
          )}
        </div> */}
        {/* <div className="field">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            defaultValue={selectedTicket?.name}
            ref={register({ required: true })}
          />
          {errors.name?.type === 'required' && (
            <div className="error">Your must enter a name.</div>
          )}
        </div> */}
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
