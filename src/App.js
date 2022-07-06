
import './App.css';
import Drawer from './Components/MarketPlace_Main/Drawer/Drawer';
import Header_MP from './Components/MarketPlace_Main/Header_MP/Header_MP';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  BrowserRouter,
} from "react-router-dom";
import Buy_nft from './Components/MarketPlace_Main/Buy_NFT/Buy_nft';
import Auctions_NFT from './Components/MarketPlace_Main/Auction_NFT/Auctions_NFT';
import NFT_Buy from './Components/MarketPlace_Main/NFT_Buy_Push/NFT_Buy';
import Biding_NFT from './Components/MarketPlace_Main/Biding_NFT/Biding_NFT';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div className="App">

<ToastContainer/>
      
        <Header_MP />
        {/* <Drawer/> */}
        <Routes>
          <Route exact path="/" element={<Drawer />} />
          <Route exact path="/Auctions_NFT" element={<Auctions_NFT />} />
          <Route exact path="/NFT_Buy" element={<NFT_Buy />} />
          <Route exact path="/Biding/:id" element={<Biding_NFT />} />


        </Routes>
       

      

    </div>
  );
}

export default App;
