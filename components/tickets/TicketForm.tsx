import { useForm } from 'react-hook-form';
import { InsertTicketMutationVariables } from '../../types/generated/graphql';
import { Field, ComponentType } from '../form/Field';

interface TicketForm {
  onSubmit: (data: InsertTicketMutationVariables) => Promise<void>;
  selectedTicket: InsertTicketMutationVariables | null;
}
const TicketForm: React.FC<TicketForm> = ({ onSubmit, selectedTicket }) => {
  const { register, handleSubmit, errors } = useForm<
    InsertTicketMutationVariables
  >();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="p-4">
        <Field
          id="ticket"
          label="Ticket"
          defaultValue={selectedTicket?.ticket || ''}
          componentRef={register({ required: true })}
          disabled={!!selectedTicket}
          errorLabel={
            errors.ticket?.type === 'required'
              ? 'You must enter a ticket.'
              : null
          }
          type={ComponentType.INPUT}
        />
        <Field
          id="name"
          label="Name"
          defaultValue={selectedTicket?.name || ''}
          componentRef={register({ required: true })}
          errorLabel={
            errors.ticket?.type === 'required' ? 'You must enter a name.' : null
          }
          type={ComponentType.INPUT}
        />
        <Field
          id="ticket_type"
          label="Type"
          defaultValue={selectedTicket?.ticket_type || ''}
          componentRef={register()}
          type={ComponentType.SELECT}
        />
        <Field
          id="market"
          label="Market"
          defaultValue={selectedTicket?.market || ''}
          componentRef={register()}
          type={ComponentType.SELECT}
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
