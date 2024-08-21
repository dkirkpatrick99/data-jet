import { useAppContext } from "../../context/appContext";
import GenericModal from "../ui/genericModal";
import LoadingSpinner from "../ui/loadingSpinner";

function LoadingSpinnerModal() {
  const { LoadingState } = useAppContext();
  const { isLoading } = LoadingState;

  return (
    <>
      <GenericModal openModal={isLoading} >
        <div className="h-48 w-48 flex flex-col justify-center items-center ">
          <p className="font-bold absolute top-6">Fetching your data...</p>
          <LoadingSpinner />
        </div>
      </GenericModal>
    </>
  )
};

export default LoadingSpinnerModal;
