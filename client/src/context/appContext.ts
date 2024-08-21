import { createContext, useContext } from "react";
import { IApiDataField } from "../types/IApiDataField";

export interface IAppContext {
  LoadingState: {
    isLoading: boolean;
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  },
  UrlState: {
    url: string;
    setUrl: React.Dispatch<React.SetStateAction<string>>;
  };
  DataState: {
    apiData: IApiDataField[];
    setApiData: React.Dispatch<React.SetStateAction<IApiDataField[]>>;
  };
  ModalState: {
    setSelectorModal: {
      openSetSelectorModal: boolean;
      setOpenSetSelectorModal: React.Dispatch<React.SetStateAction<boolean>>;
    };
    createSelectorModal: {
      openCreateSelectorModal: boolean;
      setOpenCreateSelectorModal: React.Dispatch<React.SetStateAction<boolean>>;
    }
  };
  SelectedSelectorState: {
    selector: string;
    setSelector: React.Dispatch<React.SetStateAction<string>>;
  }
};

export const AppContext = createContext<IAppContext>(
  {
    LoadingState: {
      isLoading: false,
      setIsLoading: () => null
    },
    UrlState: {
      url: "",
      setUrl: () => null
    },
    DataState: {
      apiData: [],
      setApiData: () => null
    },
    ModalState: {
      setSelectorModal: {
        openSetSelectorModal: false,
        setOpenSetSelectorModal: () => null
      },
      createSelectorModal: {
        openCreateSelectorModal: false,
        setOpenCreateSelectorModal: () => null
      }
    },
    SelectedSelectorState: {
      selector: "",
      setSelector: () => null
    },

  }
);

export const useAppContext = () => useContext(AppContext);
