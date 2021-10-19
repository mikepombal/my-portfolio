import * as R from 'remeda';
import {
  InsertActivitiesMutationVariables,
  Market_Enum,
  Activity_Enum,
} from '../../types/generated/graphql';
import { Activity2 } from '../../types/common';
import { getIsoCurrentDateTime } from '../../utils/common';
import { useState } from 'react';

type CommonActivities = Pick<Activity2, 'ticket' | 'market' | 'type'>;

type ListActivities = Required<
  Pick<Activity2, 'date' | 'quantity' | 'totalValue'>
> & { id: string };

type UpdateListValue = ((id: string, field: 'date', value: string) => void) &
  ((id: string, field: 'quantity' | 'totalValue', value: number) => void);

const FieldsRow: React.FC<{
  fields: ListActivities;
  updateValue: UpdateListValue;
}> = ({ fields, updateValue }) => (
  <div className="flex mb-1 last:m-0 h-10">
    <input
      type="datetime-local"
      defaultValue={fields.date}
      className={`p-2 w-full`}
      onChange={(e) => updateValue(fields.id, 'date', e.target.value)}
    />
    <input
      type="number"
      step="1"
      defaultValue={fields.quantity}
      className={`p-2 w-full ml-1`}
      onChange={(e) =>
        updateValue(fields.id, 'quantity', e.target.valueAsNumber)
      }
    />
    <div className="ml-1 w-full flex">
      <div className="p-2 pr-0 bg-white">£</div>
      <input
        type="number"
        step="0.01"
        min="0"
        defaultValue={fields.totalValue}
        className={`p-2 pl-0 outline-none`}
        onChange={(e) =>
          updateValue(fields.id, 'totalValue', e.target.valueAsNumber)
        }
      />
    </div>
  </div>
);

interface ActivitiesForm {
  onSubmit: (data: InsertActivitiesMutationVariables) => Promise<void>;
}
const ActivitiesForm: React.FC<ActivitiesForm> = ({ onSubmit }) => {
  const [common, setCommon] = useState<Partial<CommonActivities>>({});
  const [list, setList] = useState<ListActivities[]>([
    {
      id: `row-${new Date().getTime()}`,
      date: getIsoCurrentDateTime(),
      quantity: 0,
      totalValue: 0,
    },
  ]);
  const [error, setError] = useState<string | null>(null);

  const updateList: UpdateListValue = (id, field, value) => {
    const updatedList = list.map((values) =>
      values.id === id ? { ...values, [field]: value } : values
    );
    setList(
      R.last(list)?.id === id
        ? [
            ...updatedList,
            {
              id: `row-${new Date().getTime()}`,
              date: getIsoCurrentDateTime(),
              quantity: 0,
              totalValue: 0,
            },
          ]
        : updatedList
    );
  };

  const onValidate = () => {
    if (!common.ticket) {
      setError('Missing ticket');
      return undefined;
    }
    if (!common.market) {
      setError('Missing market');
      return;
    }
    if (!common.type) {
      setError('Missing type');
      return;
    }
    const listToCheck = R.dropLast(list, 1);
    if (listToCheck.length === 0) {
      setError('Missing acitivities');
      return;
    }
    if (listToCheck.some((a) => a.quantity === 0 || a.totalValue === 0)) {
      setError('Quantity and total value must be higher than 0');
      return;
    }
    setError(null);

    const ticket = common.ticket;
    const market = common.market;
    const type = common.type;

    const activities: Array<Omit<Activity2, 'id'>> = R.pipe(
      list,
      R.dropLast(1),
      R.map((item) => ({
        ticket,
        market,
        type,
        date: item.date,
        quantity: item.quantity,
        totalValue: Math.round(item.totalValue * 100),
      }))
    );
    onSubmit({ objects: activities });
  };

  return (
    <form>
      <div className="p-4">
        {error && (
          <div className="bg-red-300 border-2 border-red-700 mb-4 text-center p-1 rounded-md">
            {error}
          </div>
        )}
        <div>
          <div className="flex items-center mb-4">
            <label
              className="w-32 inline-block pr-4"
              style={{ textAlign: 'end' }}
            >
              Ticket:
            </label>
            <div className="w-56 rounded-md">
              <input
                type="text"
                className={`p-2 w-full`}
                onChange={(e) =>
                  setCommon({ ...common, ticket: e.target.value })
                }
              />
            </div>
          </div>
          <div className="flex items-center mb-4">
            <label
              className="w-32 inline-block pr-4"
              style={{ textAlign: 'end' }}
            >
              Market:
            </label>
            <div className="w-56 rounded-md">
              <select
                defaultValue={common.market || ''}
                className={`p-2 w-full ${
                  common.market ? '' : 'text-gray-400 italic'
                }`}
                onChange={(e) =>
                  setCommon({
                    ...common,
                    market: e.target.value as Market_Enum,
                  })
                }
              >
                <option value="" disabled>
                  Select Market...
                </option>
                {Object.values(Market_Enum).map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="flex items-center mb-4">
            <label
              className="w-32 inline-block pr-4"
              style={{ textAlign: 'end' }}
            >
              Activity:
            </label>
            <div className="w-56 rounded-md">
              <select
                defaultValue={common.market || ''}
                className={`p-2 w-full ${
                  common.type ? '' : 'text-gray-400 italic'
                }`}
                onChange={(e) =>
                  setCommon({
                    ...common,
                    type: e.target.value as Activity_Enum,
                  })
                }
              >
                <option value="" disabled>
                  Select Activity...
                </option>
                {Object.values(Activity_Enum).map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-6 mx-6 rounded-xl overflow-hidden">
        {list.map((fields) => (
          <FieldsRow key={fields.id} fields={fields} updateValue={updateList} />
        ))}
      </div>
      <div className="px-6 py-4 bg-indigo-800 flex justify-center text-indigo-800 text-xl">
        <button
          type="button"
          onClick={onValidate}
          className="bg-white rounded-full px-4 py-2 font-semibold mx-4"
        >
          Add Activities
        </button>
      </div>
    </form>
  );
};

export default ActivitiesForm;
