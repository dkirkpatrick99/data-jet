// import SearchIcon from '@mui/icons-material/Search'; import { useState } from 'react';
// import SearchItem from './searchItem';
// import { useSelector } from 'react-redux';
// import { HyperState } from '../../redux';
// import { SEARCH } from '../../utils/search';


// export function SearchBar() {
//   const BooksState = useSelector((state: HyperState) => state.books);
//   const [searchText, setSearchText] = useState("");

//   const foundBooks = SEARCH(BooksState.books, searchText, { keys: ["title", "author"] }).slice(0, 8)

//   return (
//     <div className="relative group z-20 w-full sm:w-96">
//       <div className="inline-flex justify-center w-full text-sm font-medium text-black rounded-md shadow-sm">
//         <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
//           <SearchIcon />
//         </div>
//         <input type="text" onChange={(e) => setSearchText(e.target.value)} className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg block w-full ps-10 p-2.5" placeholder="Search Titles and Authors" />
//       </div>
//       <div className={`${searchText.length > 0 ? "" : "hidden"} absolute right-0 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 p-1 space-y-1`}>
//         {/* {
//           foundBooks.map((book) => (
//             <SearchItem key={book._id} title={book.title} author={book.author} imageUrl={book.imageUrl} id={book._id} />
//           ))
//         } */}

//       </div>
//     </div>
//   )
// }

// export default SearchBar;
