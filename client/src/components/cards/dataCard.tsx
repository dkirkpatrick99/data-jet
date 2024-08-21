import Switch from '@mui/material/Switch';
import DeleteIcon from '@mui/icons-material/Delete';
import SmallRoundButton from '../ui/smallRoundButton';
import { getValueFromSelector } from '../../utils/getValueFromSelector';
import { IApiDataField } from '../../../../common/types';

interface IDataCard {
  setApiData: React.Dispatch<React.SetStateAction<IApiDataField[]>>;
  _id: string;
  name: string;
  selector: string;
  useApi?: boolean;
  value?: string;
};

function DataCard({_id, name, selector, value, useApi, setApiData }: IDataCard) {
  const updateApiData = (val: boolean) => {
    setApiData(prev => [...prev.map((data) => data.fieldName === name ? {...data, useApi: val} : data)]);
  };

  const deleteApiData = () => {
    setApiData(prev => [...prev.filter((data) => data._id !== _id )]);
  };

  return (
    <div className="mb-4 overflow-y-auto rounded-lg overflow-hidden border-solid border border-gray-500">
      <div className='flex justify-between items-center py-1 px-2 bg-blue-100'>
        <p className='font-semibold text-lg'>{name}</p>
        <div className='flex items-center'>

          {useApi !== undefined &&
            <div className='flex items-center'>
              <p>API Value</p>
              <Switch defaultChecked value={useApi} onChange={(_, value) => updateApiData(value)} />
            </div>
          }
          
          <div className='bg-blue-100 flex justify-end'>
            <SmallRoundButton action={deleteApiData}>
              <DeleteIcon className="text-gray-400 hover:text-red-500"/>
            </SmallRoundButton>
          </div>
        </div>
      </div>

      <div className='py-2 px-2'>
        <div>
          <p className='font-medium text-lg'>Value: {useApi ? value : getValueFromSelector(selector)}</p>
          {!useApi && <p>Selector: {selector?.length <= 0 ? "Not Selected" : selector}</p>}
        </div>
      </div>

    </div>
  )
}

export default DataCard;