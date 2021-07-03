import { useForm } from 'react-hook-form';
import {
  InsertTicketMutationVariables,
  Market_Enum_Enum,
  Ticket_Type_Enum_Enum,
} from '../../types/generated/graphql';
import { Field, ComponentType } from '../form/Field';

interface TicketForm {
  onSubmit: (data: InsertTicketMutationVariables) => Promise<void>;
  selectedTicket: InsertTicketMutationVariables | null;
}
const TicketForm: React.FC<TicketForm> = ({ onSubmit, selectedTicket }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InsertTicketMutationVariables>();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="p-4">
        <Field
          id="ticket"
          label="Ticket"
          disabled={!!selectedTicket}
          errorLabel={
            errors.ticket?.type === 'required'
              ? 'You must enter a ticket.'
              : null
          }
          type={{
            name: ComponentType.TEXT,
            registration: register('ticket', { required: true }),
            defaultValue: selectedTicket?.ticket || '',
          }}
        />
        <Field
          id="name"
          label="Name"
          errorLabel={
            errors.ticket?.type === 'required' ? 'You must enter a name.' : null
          }
          type={{
            name: ComponentType.TEXT,
            registration: register('name', { required: true }),
            defaultValue: selectedTicket?.name || '',
          }}
        />
        <Field
          id="ticket_type"
          label="Type"
          type={{
            name: ComponentType.SELECT,
            registration: register('ticket_type', { required: true }),
            options: Object.values(Ticket_Type_Enum_Enum),
            defaultValue:
              selectedTicket?.ticket_type || Ticket_Type_Enum_Enum.Div1,
          }}
        />
        <Field
          id="market"
          label="Market"
          type={{
            name: ComponentType.SELECT,
            registration: register('market', { required: true }),
            options: Object.values(Market_Enum_Enum),
            defaultValue: selectedTicket?.market || Market_Enum_Enum.Lon,
          }}
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
