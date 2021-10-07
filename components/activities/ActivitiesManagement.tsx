import { useState } from 'react';
import {
  InsertActivityMutationVariables,
  useInsertActivityMutation,
} from '../../types/generated/graphql';
import ActivitiesList from './ActivitiesList';
import ActivityForm from './ActivityForm';
import Modal from '../Modal';
import Button from '../Button';

const ActivitiesManagement = (): JSX.Element => {
  const [isAdding, setIsAdding] = useState(false);
  const [insertActivity] = useInsertActivityMutation();

  const onSubmit = async (data: InsertActivityMutationVariables) => {
    await insertActivity({
      variables: {
        ...data,
        date: new Date(data.date).toISOString(),
        totalValue: Math.round(data.totalValue * 100),
      },
      refetchQueries: ['allActivities'],
    });
    setIsAdding(false);
  };

  return (
    <div className="h-full flex flex-col pt-8 ">
      <div className="flex-grow overflow-hidden">
        <ActivitiesList />
      </div>
      <div className="mt-4 flex-grow-0">
        <Button label="Add New Activity" onClick={() => setIsAdding(true)} />
      </div>
      {isAdding && (
        <Modal
          onCancel={() => {
            setIsAdding(false);
          }}
        >
          <ActivityForm onSubmit={onSubmit} />
        </Modal>
      )}
    </div>
  );
};

export default ActivitiesManagement;
