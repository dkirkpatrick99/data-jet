import { useEffect } from "react";
import SectionHeader from "../ui/sectionHeader";
import { getCssPath } from "../../utils/getCssPath";
import { useAppContext } from "../../context/appContext";
import EmptyUI from "../ui/emptyUI";
import LinkOffIcon from '@mui/icons-material/LinkOff';

function WebPortal() {
  const { ModalState, SelectedSelectorState, UrlState, LoadingState } = useAppContext();
  const { setSelectorModal } = ModalState;
  const { setOpenSetSelectorModal } = setSelectorModal;
  const { setSelector } = SelectedSelectorState;
  const { url } = UrlState;

  useEffect(() => {
    const contentDoc = document.getElementById('content1');

    if (contentDoc) {
      contentDoc.addEventListener('click', setSelectorHandler);
      return () => {
        contentDoc.removeEventListener('click', setSelectorHandler);
      }
    }
  }, [LoadingState.isLoading]);


  const setSelectorHandler = (event: any) => {
    console.log("CLICK!!!!!!!!!")
    setSelector(getCssPath(event.target));
    setOpenSetSelectorModal(true);
  };

  return (
    <>
      <div className="flex flex-col md:w-2/3">
        <SectionHeader text={"Web Portal"} />
      <div className="h-[800px]  ">
        {url.length <= 0 &&
          <EmptyUI headText="No URL" subText="Enter a valid website URL to start a collection">
            <LinkOffIcon fontSize="large" />
          </EmptyUI>
        }

        {url.length > 0 && 
          <div className="h-full w-full overflow-y-scroll">
            <div id="content1" className="relative" />
          </div>
        }
      </div>

    </div>
    </>
  )
};

export default WebPortal;
