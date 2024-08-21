// import { Link } from "react-router-dom";
// import BookCard from "../cards/bookCard";

// interface ISearchItem {
//   title: string;
//   author: string;
//   id: string;
//   imageUrl?: string;
// }

// export function SearchItem({ title, author, id, imageUrl }: ISearchItem) {

//   return (
//     <Link to={`/book/${id}`}>
//       <div className="flex items-center w-full sm:w-96 p-2 hover:bg-blue-50 rounded-lg">
//         <BookCard showInfo={false} imgSrc={imageUrl} styles={'h-16 rounded-lg'} />
//         <div className="ml-4 h-full flex flex-col">
//           <p className="mb-1 text-md font-bold">{title}</p>
//           <p className="mb-1 text-sm font-medium">by: {author}</p>
//         </div>
//       </div>

//     </Link>
//   )
// }

// export default SearchItem;