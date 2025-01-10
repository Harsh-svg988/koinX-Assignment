// // import { useState } from 'react'
// // import reactLogo from './assets/react.svg'
// // import viteLogo from '/vite.svg'
// // import './App.css'
// import Navbar from './components/Navbar'
// import LeftSection from './components/LeftSection'
// import RightSection from './components/RightSection'



// const App = () => {
//   return (
//     <div className="min-h-screen bg-gray-50">
//       <Navbar />
//       <div className="container mx-auto px-4 py-6">
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//           <div className="lg:col-span-2">
//             <LeftSection />
//           </div>
//           <div className="lg:col-span-1">
//             <RightSection />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default App;




import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CryptoPage from './pages/CryptoPage';
const App = () => {
  
  return (
    
    <Router>
      <Routes>
        <Route path="/:coinId?" element={<CryptoPage />} />
      </Routes>
    </Router>
  );
};

export default App;