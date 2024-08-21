import { useState } from 'react';
import SetSelectorDropdown from './setSelectorDropdown';
import ActionButton from '../ui/actionButton';
import { getValueFromSelector } from '../../utils/getValueFromSelector';
import { SelectorFormField } from './selectorFormField';
import { useAppContext } from '../../context/appContext';
import SmallError from '../ui/smallError';

function SetSelectorForm() {
  const { ModalState, DataState, SelectedSelectorState } = useAppContext();
  const { setSelectorModal } = ModalState;
  const { setOpenSetSelectorModal } = setSelectorModal;
  const { apiData, setApiData } = DataState;
  const { selector } = SelectedSelectorState;
  
  const [selectedDataId, setSelectedDataId] = useState("");

  // Update the css selector value for the data object
  const updateSelector = () => {
    setApiData([...apiData.map((data) => data._id === selectedDataId ? { ...data, selector: selector } : data)]);
    setOpenSetSelectorModal(false);
  };

  return (
    <div className="py-6 px-3 w-[400px]">
      <p className='text-2xl text-center font-bold mb-6'>Update a selector</p>

      <SelectorFormField headerText='Choose the field to add this selector to:'>
        <div>
          {apiData.length> 0 
            ? <SetSelectorDropdown selectedField={selectedDataId} setSelectedDataId={setSelectedDataId} apiData={apiData} />
            : <SmallError text='Please create a Collection before continuing'/>
          }
        </div>
      </SelectorFormField>

      <SelectorFormField headerText='Value:'>
        <p>{getValueFromSelector(selector)}</p>
      </SelectorFormField>

      <SelectorFormField headerText='Selector:'>
        <p>{selector}</p>
      </SelectorFormField>

      <div className='flex w-full justify-around mt-8'>
        <ActionButton action={() => setOpenSetSelectorModal(false)} text='Cancel' btnStyle='bg-blue-200 hover:bg-red-200' />
        <ActionButton disabled={selectedDataId.length <= 0} action={() => updateSelector()} text='Save' btnStyle='bg-blue-200 hover:bg-blue-400' />
      </div>

    </div>
  )
};



export default SetSelectorForm;