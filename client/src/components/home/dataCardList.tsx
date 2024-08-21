import DataCard from "../cards/dataCard";
import LinkOffIcon from '@mui/icons-material/LinkOff';
import SectionHeader from "../ui/sectionHeader";
import SmallRoundButton from "../ui/smallRoundButton";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { useAppContext } from "../../context/appContext";
import EmptyUI from "../ui/emptyUI";

function DataCardList() {
  const { DataState, UrlState, ModalState } = useAppContext();
  const { createSelectorModal } = ModalState;
  const  { setOpenCreateSelectorModal } = createSelectorModal;
  const { apiData, setApiData } = DataState;
  const { url } = UrlState;

  return (
    <>
      <div className="md:w-1/3 px-2 mt-8 md:mt-0">
        <div className="w-full flex mb-2 justify-between items-end">
          <SectionHeader text={"Collection"} />

          <SmallRoundButton btnStyle="p-0" action={() => setOpenCreateSelectorModal(true)}>
            <AddCircleOutlineIcon className="text-gray-400 hover:text-blue-500" />
          </SmallRoundButton>
        </div>

        <div className="md:h-[800px] md:overflow-y-scroll ">
          {url.length <= 0 && 
            <EmptyUI headText="No URL" subText="Enter a valid website URL to start a collection">
              <LinkOffIcon fontSize="large" />
            </EmptyUI>
          }

          {(url.length > 0 && apiData.length <= 0) &&
            <EmptyUI headText="No API data is available" subText="Create a new selector to extract the data">
              <LinkOffIcon fontSize="large" />
            </EmptyUI>
          }

          {url.length > 0 &&
            apiData.map((data) => (
              <DataCard key={data._id} setApiData={setApiData} _id={data._id} name={data.fieldName} selector={data.selector} value={data.value} useApi={data.useApi}/>
            ))
          }
        </div>

      </div>
    </>
  )
};

export default DataCardList;

