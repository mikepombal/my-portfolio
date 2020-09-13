import { useState } from 'react';
import {
  Tickets_Insert_Input,
  useInsertTicketMutation,
  useUpdateTicketMutation,
} from '../../types/generated/graphql';
import TicketsList from './TicketsList';
import TicketForm from './TicketForm';
import Modal from '../Modal';
import Button from '../Button';

const TicketsManagement = () => {
  const [
    selectedTicket,
    setSelectedTicket,
  ] = useState<Tickets_Insert_Input | null>(null);
  const [isAdding, setIsAdding] = useState(false);
  const [insertTicket] = useInsertTicketMutation();
  const [updateTicket] = useUpdateTicketMutation();

  const onSubmit = async (data: Tickets_Insert_Input) => {
    const action = selectedTicket ? updateTicket : insertTicket;
    await action({
      variables: { ticket: data.ticket, name: data.name },
      refetchQueries: ['allTickets'],
    });
    setSelectedTicket(null);
    setIsAdding(false);
  };

  return (
    <div>
      <TicketsList selectTicket={setSelectedTicket} />
      <div className="mt-4">
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
