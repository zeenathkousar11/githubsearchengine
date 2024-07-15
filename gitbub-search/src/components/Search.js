// import React, { useState } from 'react';

// function Search({ searchUsers }) {
//   const [userName, setUserName] = useState("");

//   const onClickHandler = () => {
//     searchUsers(userName);
//   }

//   return (
//        <div className="flex flex-col items-center  shadow-lg p-4 md:flex-row md:space-x-4  w-96 md:w-2/3 lg:w-1/2 xl:w-1/3 mx-auto">
//       <input 
//         type="text" 
//         value={userName} 
//         onChange={(e) => setUserName(e.target.value)} 
//           className="p-3 h-10 rounded-md w-full md:w-3/4 bg-gradient-to-r from-purple-300 to-pink-300 placeholder-gray-500 mb-2 md:mb-0"
//         placeholder="Enter GitHub username"
//       />
//       <button 
//         onClick={onClickHandler} 
//         className="text-black  h-10 rounded-full w-full md:w-1/4 bg-gradient-to-r from-purple-200 to-pink-200">
//         Search
//       </button>
//     </div>
//   )
// }

// export default Search;

// import React, { useState } from 'react';

// function Search({ searchUsers }) {
//   const [userName, setUserName] = useState("");

//   const onClickHandler = () => {
//     searchUsers(userName);
//   }

//   return (
//     <div className="flex flex-col items-center shadow-lg p-4 md:flex-row md:space-x-4 w-full mx-auto ">
//       <input 
//         type="text" 
//         value={userName} 
//         onChange={(e) => setUserName(e.target.value)} 
//         className="p-3 h-10 rounded-md w-full md:w-3/4 bg-gradient-to-r from-purple-300 to-pink-300 placeholder-gray-500 mb-2 md:mb-0"
//         placeholder="Enter GitHub username"
//       />
//       <button 
//         onClick={onClickHandler} 
//         className="text-black h-10 rounded-full w-full md:w-1/4 bg-gradient-to-r from-purple-200 to-pink-200">
//         Search
//       </button>
//     </div>
//   )
// }

// export default Search;


import React, { useState } from 'react';

function Search({ searchUsers }) {
  const [userName, setUserName] = useState("");

  const onClickHandler = () => {
    searchUsers(userName);
  }

  return (
    <div className="flex flex-col items-center shadow-lg p-4 md:flex-row md:space-x-4 w-full mx-auto ">
      {/* <input 
        type="text" 
        value={userName} 
        onChange={(e) => setUserName(e.target.value)} 
        className="p-3 outline-none h-10 rounded-md w-full md:w-3/4 bg-gradient-to-r from-purple-300 to-pink-300 placeholder-gray-500 mb-2 md:mb-0"
        placeholder="Enter GitHub username"
      />
      <button 
        onClick={onClickHandler} 
        className="text-black h-10 rounded-full w-full md:w-1/4 bg-gradient-to-r from-purple-300 to-pink-300">
        Search
      </button> */}
                       <div className="flex space-x-5 mt-4 bg-center ml-72 ">
  <input
    type="text"
    placeholder="Search Your Github User here ..."
    onChange={(e) => setUserName(e.target.value)} 

    className="ml-24 p-2 h-8 rounded-full w-full bg-gradient-to-r from-purple-300 to-pink-300 text-white"
  />
    <button 
        onClick={onClickHandler} className=" bg-gradient-to-r from-purple-300 to-pink-300  align-text-top text-black p-2 h-8 rounded-full  w-60">
    Search
    </button> 
 
</div> 

    </div>
  )
}

export default Search;
