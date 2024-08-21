import { useAppContext } from '../../context/appContext';
import GenericForm from '../ui/genericForm';
import { newApiData } from '../../types/IApiDataField';

interface IFormValues {
  fieldName: string;
}

const userFormDefaults: IFormValues = {
  fieldName: "",
};

function CreateSelectorForm() {
  const { ModalState, DataState, UrlState } = useAppContext();
  const { createSelectorModal } = ModalState;
  const { setOpenCreateSelectorModal } = createSelectorModal;
  const { setApiData } = DataState;

  const createSelector = (values: IFormValues) => {
    setApiData(prev => [...prev, {...newApiData, ...values, website: UrlState.url}]);
    setOpenCreateSelectorModal(false);
  };

  return (
    <div className="py-6 px-3 w-[400px]">
      <p className='text-2xl text-center font-bold mb-6'>Add a new collection</p>
      <GenericForm defaultValues={userFormDefaults} onSubmit={createSelector}></GenericForm>
    </div>
  )
};

export default CreateSelectorForm;