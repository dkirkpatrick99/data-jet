import SearchIcon from '@mui/icons-material/Search'; import { useState } from 'react';
import { useProxy } from '../../actions/urlActions';
import { isValidUrl } from '../../utils/isValidUrl';
import SmallError from '../ui/smallError';
import { useAppContext } from '../../context/appContext';

export function UrlSearchBar() {
  const { DataState, LoadingState, UrlState } = useAppContext();
  const { setIsLoading, isLoading } = LoadingState;
  const { setApiData } = DataState;
  const { setUrl } = UrlState;
  const [ error, setError ] = useState("");
  const [ searchText, setSearchText ] = useState("");

  const getHtml = async () => {

    // Validate the URL text
    if(!isValidUrl(searchText)) {
      setError("Please enter a valid URl ex: https://www.example.co.uk");
      return;
    }

    // Update state for error and loading flag
    setError("");
    setIsLoading(true);

    // Call the proxy action to fetch the website data
    useProxy(searchText)
    .then(function (urlData) {
      setUrl(searchText);

      // Set the api data state
      setApiData(urlData.data);

      // Apply the html to the document
      const contentDoc = document.getElementById('content1');

      if (contentDoc && urlData.html) {
        contentDoc.innerHTML = urlData.html;
      }
    })
    .catch(_ => setError("Opp! Something went wrong. Try a different URL."))
    .finally(() => setIsLoading(false));
  };

  return (
    <div>
      <div className="relative group z-20 w-full">
        <div className="inline-flex justify-center w-full text-sm font-medium text-black rounded-md shadow-sm">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <SearchIcon />
          </div>
          <input type="text" value={searchText} onChange={(e) => setSearchText(e.target.value)} className="bg-gray-50 pr-24 border border-gray-300 text-black text-sm rounded-lg block w-full ps-10 p-2.5" placeholder="https://www.airbnb.co.uk/rooms/20669368" />
          <button disabled={isLoading} onClick={() => getHtml()} className="text-white absolute end-1 bottom-[3px] bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
        </div>

      </div>

        {error.length > 0 && 
          <SmallError text={error} />
        }
    </div>
  )
};

export default UrlSearchBar;