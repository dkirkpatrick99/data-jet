import { ReactElement, useState } from "react";
import { AppContext } from "./appContext";
import { IApiDataField } from "../types/IApiDataField";

export function AppContextProvider({children}:{children: ReactElement}) {
  const [apiData, setApiData] = useState<IApiDataField[]>([]);
  const [openSetSelectorModal, setOpenSetSelectorModal] = useState(false);
  const [openCreateSelectorModal, setOpenCreateSelectorModal] = useState(false);
  const [selector, setSelector] = useState("");
  const [url, setUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  // https://www.airbnb.co.uk/rooms/20669368?source_impression_id=p3_1724025382_P3qqjtgdsYVnoY5r
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
}


