import { ReactElement, useState } from "react";
import { AppContext } from "./appContext";
import { IApiDataField } from "../../../common/types";

export function AppContextProvider({children}:{children: ReactElement}) {
  const [apiData, setApiData] = useState<IApiDataField[]>([]);
  const [openSetSelectorModal, setOpenSetSelectorModal] = useState(false);
  const [openCreateSelectorModal, setOpenCreateSelectorModal] = useState(false);
  const [selector, setSelector] = useState("");
  const [url, setUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  return (
    <>
      <AppContext.Provider value={{
        LoadingState: {
          isLoading,
          setIsLoading
        },
        UrlState: {
          url,
          setUrl
        },
        DataState: {
          apiData,
          setApiData
        },
        ModalState: {
          setSelectorModal: {
            openSetSelectorModal,
            setOpenSetSelectorModal
          },
          createSelectorModal: {
            openCreateSelectorModal,
            setOpenCreateSelectorModal
          }
        },
        SelectedSelectorState: {
          selector,
          setSelector
        }
      }}> 
        {children}
      </AppContext.Provider>
    </>
  )
};


