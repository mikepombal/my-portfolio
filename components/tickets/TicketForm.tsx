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
          disabled={!!selectedTicket}
          errorLabel={
            errors.ticket?.type === 'required'
              ? 'You must enter a ticket.'
              : null
          }
          type={{
            name: ComponentType.INPUT,
            componentRef: register({ required: true }),
          }}
        />
        <Field
          id="name"
          label="Name"
          defaultValue={selectedTicket?.name || ''}
          errorLabel={
            errors.ticket?.type === 'required' ? 'You must enter a name.' : null
          }
          type={{
            name: ComponentType.INPUT,
            componentRef: register({ required: true }),
          }}
        />
        <Field
          id="ticket_type"
          label="Type"
          defaultValue={
            selectedTicket?.ticket_type || Ticket_Type_Enum_Enum.Div1
          }
          type={{
            name: ComponentType.SELECT,
            componentRef: register({ required: true }),
            options: Object.values(Ticket_Type_Enum_Enum),
          }}
        />
        <Field
          id="market"
          label="Market"
          defaultValue={selectedTicket?.market || Market_Enum_Enum.Lon}
          type={{
            name: ComponentType.SELECT,
            componentRef: register({ required: true }),
            options: Object.values(Market_Enum_Enum),
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
