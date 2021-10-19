import { useState } from 'react';
import {
  InsertActivityMutationVariables,
  InsertActivitiesMutationVariables,
  useInsertActivityMutation,
  useInsertActivitiesMutation,
} from '../../types/generated/graphql';
import ActivitiesList from './ActivitiesList';
import ActivityForm from './ActivityForm';
import ActivitiesForm from './ActivitiesForm';
import Modal from '../Modal';
import Button from '../Button';

type ModalType = null | 'AddActivity' | 'AddBulk';

const ActivitiesManagement = (): JSX.Element => {
  const [modal, setModal] = useState<ModalType>(null);
  const [insertActivity] = useInsertActivityMutation();
  const [insertActivities] = useInsertActivitiesMutation();

  const onSubmitAddActivity = async (data: InsertActivityMutationVariables) => {
    await insertActivity({
      variables: {
        ...data,
        date: new Date(data.date).toISOString(),
        totalValue: Math.round(data.totalValue * 100),
      },
      refetchQueries: ['allActivities'],
    });
    setModal(null);
  };

  const onSubmitAddBulkActivities = async (
    data: InsertActivitiesMutationVariables
  ) => {
    await insertActivities({
      variables: data,
      refetchQueries: ['allActivities'],
    });
    setModal(null);
  };

  const renderModal = (m: ModalType) => {
    switch (m) {
      case 'AddActivity': {
        return (
          <Modal
            onCancel={() => {
              setModal(null);
            }}
          >
            <ActivityForm onSubmit={onSubmitAddActivity} />
          </Modal>
        );
      }
      case 'AddBulk': {
        return (
          <Modal
            onCancel={() => {
              setModal(null);
            }}
          >
            <ActivitiesForm onSubmit={onSubmitAddBulkActivities} />
          </Modal>
        );
      }
    }
    return null;
  };

  return (
    <div className="h-full flex flex-col pt-8 ">
      <div className="flex-grow overflow-hidden">
        <ActivitiesList />
      </div>
      <div className="mt-4 flex-grow-0">
        <Button label="Add Activity" onClick={() => setModal('AddActivity')} />
        <Button
          label="Add Bulk Activities"
          classname="ml-2"
          onClick={() => setModal('AddBulk')}
        />
      </div>
      {renderModal(modal)}
    </div>
  );
};

export default ActivitiesManagement;
