import { useForm } from 'react-hook-form';
import { Tickets_Insert_Input } from '../../types/generated/graphql';

const TicketForm = ({ onSubmit, selectedTicket }) => {
  const { register, handleSubmit, errors } = useForm<Tickets_Insert_Input>();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="field">
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
      </div>
      <div className="field">
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
      </div>
      <button type="submit">
        {selectedTicket ? 'Update Ticket' : 'Add Ticket'}
      </button>
    </form>
  );
};

export default TicketForm;
