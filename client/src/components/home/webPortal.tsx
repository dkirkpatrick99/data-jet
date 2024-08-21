import { useEffect } from "react";
import SectionHeader from "../ui/sectionHeader";
import { getCssPath } from "../../utils/getCssPath";
import { useAppContext } from "../../context/appContext";
import EmptyUI from "../ui/emptyUI";
import LinkOffIcon from '@mui/icons-material/LinkOff';

function WebPortal() {
  const { ModalState, SelectedSelectorState, UrlState } = useAppContext();
  const { setSelectorModal } = ModalState;
  const { setOpenSetSelectorModal } = setSelectorModal;
  const { setSelector } = SelectedSelectorState;
  const { url } = UrlState;

  // Add click listener to the embedded html 
  useEffect(() => {
    const contentDoc = document.getElementById('content1');

    if (contentDoc) {
      contentDoc.addEventListener('click', setSelectorHandler);
      return () => {
        contentDoc.removeEventListener('click', setSelectorHandler);
      }
    }
  }, []);

  // Open the selector modal to add the selector to a given data object
  const setSelectorHandler = (event: any) => {
    event.stopPropagation()
    setSelector(getCssPath(event.target));
    setOpenSetSelectorModal(true);
  };

  return (
    <>
      <div className="flex flex-col md:w-2/3">
        <div className="my-2">
          <SectionHeader text={"Web Portal"} />
        </div>

        <div className="h-[800px] rounded-lg border-solid border border-gray-500 overflow-hidden">
        {url.length <= 0 &&
          <EmptyUI headText="No URL" subText="Enter a valid website URL to start a collection">
            <LinkOffIcon fontSize="large" />
          </EmptyUI>
        }

        <div className="h-full w-full overflow-y-scroll">
          <div id="content1" className="relative" />
        </div>
      </div>

    </div>
    </>
  )
};

export default WebPortal;
