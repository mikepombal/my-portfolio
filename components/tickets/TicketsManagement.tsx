import { useState } from 'react';
import {
  InsertTicketMutationVariables,
  useInsertTicketMutation,
  useUpdateTicketMutation,
} from '../../types/generated/graphql';
import TicketsList from './TicketsList';
import TicketForm from './TicketForm';
import Modal from '../Modal';
import Button from '../Button';

const TicketsManagement = (): JSX.Element => {
  const [selectedTicket, setSelectedTicket] =
    useState<InsertTicketMutationVariables | null>(null);
  const [isAdding, setIsAdding] = useState(false);
  const [insertTicket] = useInsertTicketMutation();
  const [updateTicket] = useUpdateTicketMutation();

  const onSubmit = async (data: InsertTicketMutationVariables) => {
    const action = selectedTicket ? updateTicket : insertTicket;
    await action({
      variables: {
        ticket: data.ticket,
        name: data.name,
        ticket_type: data.ticket_type,
        market: data.market,
        currency: data.currency,
      },
      refetchQueries: ['allTickets'],
    });
    setSelectedTicket(null);
    setIsAdding(false);
  };

  return (
    <div className="h-full flex flex-col pt-8">
      <div className="flex-grow overflow-hidden">
        <TicketsList selectTicket={setSelectedTicket} />
      </div>
      <div className="mt-4 flex-grow-0">
        <Button label="Add New Ticket" onClick={() => setIsAdding(true)} />
      </div>
      {(selectedTicket || isAdding) && (
        <Modal
          onCancel={() => {
            setSelectedTicket(null);
            setIsAdding(false);
          }}
        >
          <TicketForm onSubmit={onSubmit} selectedTicket={selectedTicket} />
        </Modal>
      )}
    </div>
  );
};

export default TicketsManagement;
