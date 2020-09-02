import { useState } from 'react';
import {
  Tickets_Insert_Input,
  useInsertTicketMutation,
  useUpdateTicketMutation,
} from '../../types/generated/graphql';
import TicketsList from './TicketsList';
import TicketForm from './TicketForm';
import Modal from '../Modal';

const TicketsManagement = () => {
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [insertTicket] = useInsertTicketMutation();
  const [updateTicket] = useUpdateTicketMutation();

  const onSubmit = (data: Tickets_Insert_Input) => {
    selectedTicket
      ? updateTicket({
          variables: { ticket: data.ticket, name: data.name },
          refetchQueries: ['allTickets'],
        })
      : insertTicket({
          variables: { ticket: data.ticket, name: data.name },
          refetchQueries: ['allTickets'],
        });
  };

  return (
    <div>
      <TicketsList selectTicket={setSelectedTicket} />
      {selectedTicket && (
        <Modal onCancel={() => setSelectedTicket(null)}>
          <TicketForm onSubmit={onSubmit} selectedTicket={selectedTicket} />
        </Modal>
      )}
    </div>
  );
};

export default TicketsManagement;
