import { useForm } from 'react-hook-form';
import {
  Tickets_Insert_Input,
  useInsertTicketMutation,
} from '../../types/generated/graphql';

const TicketForm = () => {
  const { register, handleSubmit, errors } = useForm<Tickets_Insert_Input>();
  const [insertTicket] = useInsertTicketMutation();

  const onSubmit = (data: Tickets_Insert_Input) => {
    insertTicket({
      variables: { ticket: data.ticket, name: data.name },
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="field">
        <label htmlFor="ticket">Ticket</label>
        <input
          type="text"
          id="ticket"
          name="ticket"
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
          ref={register({ required: true })}
        />
        {errors.name?.type === 'required' && (
          <div className="error">Your must enter a name.</div>
        )}
      </div>
      <button type="submit">Add Ticket</button>
    </form>
  );
};

export default TicketForm;
