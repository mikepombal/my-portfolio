import { useForm } from 'react-hook-form';
import {
  InsertActivityMutationVariables,
  Market_Enum,
  Activity_Enum,
} from '../../types/generated/graphql';
import { Field, ComponentType } from '../form/Field';
import { getIsoCurrentDateTime } from '../../utils/common';

interface ActivityForm {
  onSubmit: (data: InsertActivityMutationVariables) => Promise<void>;
}
const ActivityForm: React.FC<ActivityForm> = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InsertActivityMutationVariables>();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="p-4">
        <Field
          id="date"
          label="Date"
          errorLabel={
            errors.ticket?.type === 'required'
              ? 'You must enter a date and time.'
              : null
          }
          type={{
            name: ComponentType.DATETIME,
            registration: register('date', { required: true }),
            defaultValue: getIsoCurrentDateTime(),
          }}
        />
        <Field
          id="ticket"
          label="Ticket"
          errorLabel={
            errors.ticket?.type === 'required'
              ? 'You must enter a ticket.'
              : null
          }
          type={{
            name: ComponentType.TEXT,
            registration: register('ticket', { required: true }),
            defaultValue: '',
          }}
        />
        <Field
          id="market"
          label="Market"
          type={{
            name: ComponentType.SELECT,
            registration: register('market', { required: true }),
            options: Object.values(Market_Enum),
            defaultValue: Market_Enum.Lon,
          }}
        />
        <Field
          id="type"
          label="Activity"
          type={{
            name: ComponentType.SELECT,
            registration: register('type', { required: true }),
            options: Object.values(Activity_Enum),
            defaultValue: Activity_Enum.Buy,
          }}
        />
        <Field
          id="quantity"
          label="Quantity"
          errorLabel={
            errors.ticket?.type === 'required'
              ? 'You must enter a quantity.'
              : null
          }
          type={{
            name: ComponentType.NUMBER,
            registration: register('quantity', { required: true }),
            defaultValue: 0,
          }}
        />
        <Field
          id="totalValue"
          label="Total"
          errorLabel={
            errors.ticket?.type === 'required'
              ? 'You must enter a total value.'
              : null
          }
          type={{
            name: ComponentType.MONEY,
            registration: register('totalValue', { required: true }),
            defaultValue: 0.0,
          }}
        />
      </div>
      <div className="px-6 py-4 bg-indigo-800 flex justify-center text-indigo-800 text-xl">
        <button
          type="submit"
          className="bg-white rounded-full px-4 py-2 font-semibold mx-4"
        >
          Add Activity
        </button>
      </div>
    </form>
  );
};

export default ActivityForm;
