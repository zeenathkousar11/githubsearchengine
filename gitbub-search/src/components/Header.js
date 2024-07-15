
// import React from 'react';
// import logo from '../images/logo.jpg';
// import github from '../images/github.jpg';

// const Header = () => {
  

//   return (
//     <header className="bg-black p-4 flex-shrink-0">
//       <nav className="flex items-center justify-between">
//         <div className="flex items-center space-x-4">
//           <img src={logo} alt="Logo" className="w-14 p-2 sm:w-12 md:w-14 lg:w-16 rounded-full" />
//         </div>
//         <ul className="flex space-x-5 md:space-x-7 text-white text-medium sm:text-lg md:text-xl font-medium font-serif cursor-pointer">
//           <li>Home</li>
//           <li>
//             <a href="https://github.com/zeenathkousar11" target="_blank" rel="noopener noreferrer">GitHub</a>
//           </li>
//           <li>
//             <a href="https://www.linkedin.com/in/zeenathkousar" target="_blank" rel="noopener noreferrer">LinkedIn</a>
//           </li>
//           <li>
//             <a href="mailto:zeenathkousar11@gmail.com">Mail</a>
//           </li>
//           <li>
//             <a href="User" target="_blank" rel="noopener noreferrer">UserProfile</a>
//           </li>
         
//         </ul>
//       </nav>
//       <div className="text-center  sm:mt-20 flex flex-col items-center justify-center w-full">
//         <img src={github} alt="GitHub Logo" className="h-16 sm:h-20 md:h-24 rounded-full mb-4 sm:mb-6 md:mb-8" />
//         <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-serif text-green-300">zeenath Kousar</h1>
//         <h2 className="text-xl sm:text-2xl md:text-3xl font-bold font-mono text-green-300 mt-2">
//           GitHub <span className="text-purple-300">Search Engine</span>
//         </h2>
//       </div>
      
//     </header>
//   );
// };

// export default Header;

import React from 'react';
import logo from './Logo.png'


 import github from './github.png';

function Header() {
    return (
        
        <header className="bg-black  h-72">
            <nav className='flex items-center justify-between p-4'>
                <div className='flex items-center'>
                     { <img src={logo} alt="logo" className='h-8 w-12 mr-3 rounded-full'></img>  }
                    </div> 
                <ul className="flex justify-end space-x-3">
                    <li className=' text-white'>Home</li>
                    
                    <li className='text-white'>
                        <a href="https://github.com/zeenathkousar11" target="_blank" rel="noopener noreferrer">
                            Github
                        </a>
                    </li>
                    <li className=' text-white '> 
                        <a href="https://www.linkedin.com/in/zeenath-kousar-51636b25a" target="_blank" rel="noopener noreferrer" >
                            Linkedin
                        </a></li>
                    <li className=" text-white">
                    <a href="mailto:zeenathkousar11@gmail.com" className="text-white">Mail</a>
                    </li>
                    <li className=" text-white">
                    
                    </li>
                    {/* <li className=" text-white">Contact</li> */}
                    
//            
                </ul>
            </nav>
            <div className='flex-grow flex flex-col items-center justify-center w-full'>
            <img src={github} alt="github" className=' h-20 rounded-full'> 
            
             </img> 
            <p className='text-green-300 font-extrabold'>Zeenath</p>
            <p className='text-green-200 font-extrabold'>Github <span className='text-purple-200'>Search  Engine </span></p>
            {/* <input type="text" placeholder="Search..." className=" flex mt-4 p-2 h-6 rounded w-96 " />
            <button className="bg-blue-500 text-white p-2 h-10 rounded-r">Search</button> */}
            </div>
            {/* <div className="flex  space-x-5 mt-4  -w-1/3">
                    <input type="text" placeholder="Search Your Github User here ..." className=" ml-24 p-2 h-8 rounded w-full" />
                    <input type="text" placeholder="Search user..."className="mr-24 text-white p-2 h-8 rounded "/>
                </div> */}
                {/* <div className="flex space-x-5 mt-4 ">
  <input
    type="text"
    placeholder="Search Your Github User here ..."
    className="ml-24 p-2 h-8 rounded-full w-full bg-gradient-to-r from-purple-300 to-pink-300 text-white"
  />
   <input type="text" placeholder="Search user..."className=" bg-gradient-to-r from-purple-300 to-pink-300 text-white p-2 h-8 rounded-full mr-24 "/>
   
 
</div> */}
        </header>
        
    );
}
export default Header;