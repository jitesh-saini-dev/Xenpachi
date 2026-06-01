// import { useContext, useState } from 'react';
// import { CartContext } from '../context/CartContext';
// import TablePagination from '@mui/material/TablePagination'; // MUI se import kar liya

// const Shop = () => {
//   const { products, addToCart } = useContext(CartContext);

//   // Searching aur Sorting ke liye
//   const [searchQuery, setSearchQuery] = useState('');
//   const [sortType, setSortType] = useState('default');

//   // Pagination ke states
//   const [page, setPage] = useState(0); // MUI mein page index 0 se start hota hai
//   const [rowsPerPage, setRowsPerPage] = useState(4); // Default 4 items dikhayenge per page

//   // Data manipulation
//   let displayedProducts = [...products];

//   if (searchQuery) {
//     displayedProducts = displayedProducts.filter((item) =>
//       item.name.toLowerCase().includes(searchQuery.toLowerCase())
//     );
//   }

//   if (sortType === 'low-to-high') {
//     displayedProducts.sort((a, b) => a.price - b.price);
//   } else if (sortType === 'high-to-low') {
//     displayedProducts.sort((a, b) => b.price - a.price);
//   }

//   // PAGINATION LOGIC: Yahan hum data cut kar rahe hain display ke liye
//   const paginatedProducts = displayedProducts.slice(
//     page * rowsPerPage,
//     page * rowsPerPage + rowsPerPage
//   );

//   // Pagination Handlers
//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(parseInt(event.target.value, 10));
//     setPage(0); // Jab bhi rows per page change ho, user ko first page pe bhej do
//   };

//   return (
//     <div className="min-h-screen bg-[#fafafa] py-12 px-12 font-serif flex flex-col">
//       <h1 className="text-5xl font-black italic mb-6 text-center uppercase tracking-widest">The Shop</h1>

//       {/* SEARCH AUR SORT KE CONTROLS */}
//       <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4 max-w-6xl mx-auto w-full">
//         <input
//           type="text"
//           placeholder="Search items... (e.g. Joy Tee)"
//           value={searchQuery}
//           onChange={(e) => {
//             setSearchQuery(e.target.value);
//             setPage(0); // Search karte time bhi page 0 kar do
//           }}
//           className="px-4 py-2 w-full md:w-1/3 border-2 border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
//         />

//         <select
//           value={sortType}
//           onChange={(e) => setSortType(e.target.value)}
//           className="px-4 py-2 w-full md:w-48 border-2 border-black rounded-lg focus:outline-none cursor-pointer bg-white"
//         >
//           <option value="default">Sort by: Default</option>
//           <option value="low-to-high">Price: Low to High</option>
//           <option value="high-to-low">Price: High to Low</option>
//         </select>
//       </div>

//       {/* PRODUCTS GRID */}
//       {displayedProducts.length === 0 ? (
//         <p className="text-center text-xl text-gray-500 italic mt-10">Bhai ye item toh store me nahi hai...</p>
//       ) : (
//         <div className="flex-grow max-w-6xl mx-auto w-full">
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-10">
//             {/* Yahan 'displayedProducts' ki jagah 'paginatedProducts' pe map chalega */}
//             {paginatedProducts.map((item) => (
//               <div key={item.id} className="group cursor-pointer">
//                 <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-gray-200">
//                   <img src={item.src} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
//                   <button
//                     onClick={() => addToCart(item)}
//                     className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black text-white px-6 py-2 uppercase text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300"
//                   >
//                     Add
//                   </button>
//                 </div>
//                 <div className="mt-4 text-center">
//                   <h3 className="font-bold text-lg">{item.name}</h3>
//                   <p className="text-gray-600">₹{item.price}</p>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* TABLE PAGINATION COMPONENT */}
//           <div className="flex justify-center border-t-2 border-gray-200 pt-6">
//             <TablePagination
//               component="div"
//               count={displayedProducts.length} // Dynamic count lagaya h total items k hisaab se
//               page={page}
//               onPageChange={handleChangePage}
//               rowsPerPage={rowsPerPage}
//               onRowsPerPageChange={handleChangeRowsPerPage}
//               rowsPerPageOptions={[4, 8, 12]} // User select kar payega kitne items dekhne hain
//             />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Shop;

import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import TablePagination from "@mui/material/TablePagination";

const Shop = () => {
  const { products, cart, addToCart, increaseQty, decreaseQty } =
    useContext(CartContext);

  const [searchQuery, setSearchQuery] = useState("");
  const [sortType, setSortType] = useState("default");

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(6);

  let displayedProducts = [...products];

  if (searchQuery) {
    displayedProducts = displayedProducts.filter((item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase()),
    );
  }

  if (sortType === "low-to-high") {
    displayedProducts.sort((a, b) => a.price - b.price);
  } else if (sortType === "high-to-low") {
    displayedProducts.sort((a, b) => b.price - a.price);
  }

  const paginatedProducts = displayedProducts.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage,
  );

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <div className="min-h-screen bg-[#fafafa] py-12 px-12 font-serif flex flex-col">
      <h1 className="text-5xl font-black italic mb-6 text-center uppercase tracking-widest">
        The Shop
      </h1>

      {/* Wapas max-w-7xl kar diya taaki search bar aur layout faile hue premium lagein */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4 max-w-7xl mx-auto w-full">
        <input
          type="text"
          placeholder="Search items... (e.g. Joy Tee)"
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            setPage(0);
          }}
          className="px-4 py-3 w-full md:w-1/3 border-2 border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 text-lg"
        />

        <select
          value={sortType}
          onChange={(e) => setSortType(e.target.value)}
          className="px-4 py-3 w-full md:w-56 border-2 border-black rounded-lg focus:outline-none cursor-pointer bg-white text-lg font-bold"
        >
          <option value="default">Sort by: Default</option>
          <option value="low-to-high">Price: Low to High</option>
          <option value="high-to-low">Price: High to Low</option>
        </select>
      </div>

      {displayedProducts.length === 0 ? (
        <p className="text-center text-xl text-gray-500 italic mt-10">
          Bhai ye item toh store me nahi hai...
        </p>
      ) : (
        <div className="flex-grow max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 mb-12">
            {paginatedProducts.map((item) => {
              const inCartItem = cart.find((c) => c.id === item.id);

              return (
                // UPDATE: max-w-[320px] mx-auto lagaya taaki card chhota rahe par grid apni jagah rahe
                <div
                  key={item.id}
                  className="group cursor-pointer max-w-[320px] mx-auto w-full"
                >
                  <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-gray-200 shadow-lg hover:shadow-2xl transition-shadow duration-300">
                    <img
                      src={item.src}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />

                    {/* BUTTON RENDER LOGIC */}
                    {inCartItem ? (
                      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[85%] bg-white/95 backdrop-blur-sm border-2 border-black text-black flex items-center justify-between px-2 py-1 opacity-100 transition-all duration-300 shadow-2xl rounded-full">
                        <button
                          onClick={() => decreaseQty(item.id)}
                          className="w-10 h-10 flex items-center justify-center rounded-full text-3xl font-light hover:bg-black hover:text-white transition-colors cursor-pointer pb-1"
                        >
                          -
                        </button>
                        <span className="font-black text-xl">
                          {inCartItem.quantity}
                        </span>
                        <button
                          onClick={() => increaseQty(item.id)}
                          className="w-10 h-10 flex items-center justify-center rounded-full text-2xl font-light hover:bg-black hover:text-white transition-colors cursor-pointer"
                        >
                          +
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={() => addToCart(item)}
                        className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[85%] bg-black text-white px-6 py-4 uppercase text-sm font-black tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-300 cursor-pointer shadow-2xl hover:bg-white hover:text-black border-2 border-black"
                      >
                        Add To Cart
                      </button>
                    )}
                  </div>

                  <div className="mt-6 text-center space-y-1">
                    <h3 className="font-black text-xl tracking-tight">
                      {item.name}
                    </h3>
                    <p className="text-gray-600 text-lg font-bold">
                      ₹{item.price}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex justify-center border-t-2 border-gray-200 pt-8">
            <TablePagination
              component="div"
              count={displayedProducts.length}
              page={page}
              onPageChange={handleChangePage}
              rowsPerPage={rowsPerPage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              rowsPerPageOptions={[6, 12, 18]}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Shop;
