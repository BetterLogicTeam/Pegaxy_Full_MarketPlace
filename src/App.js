
import './App.css';
import Drawer from './Components/MarketPlace_Main/Drawer/Drawer';
import Header_MP from './Components/MarketPlace_Main/Header_MP/Header_MP';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch,
  Navigate,
  BrowserRouter,
} from "react-router-dom";
// import Buy_nft from './Components/MarketPlace_Main/Buy_NFT/Buy_nft';
import Auctions_NFT from './Components/MarketPlace_Main/Auction_NFT/Auctions_NFT';
import NFT_Buy from './Components/MarketPlace_Main/NFT_Buy_Push/NFT_Buy';
import Biding_NFT from './Components/MarketPlace_Main/Biding_NFT/Biding_NFT';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Buy_nft from './Components/MarketPlace_Main/Buy_NFT/Buy_nft';

import {useSelector} from 'react-redux'
import Buy_Auction from './Components/MarketPlace_Main/Buy_And_Auction/Buy_Auction';


function App() {
  const {data} = useSelector(state=> state.fetchCategory);
  console.log("data", data)
  return (
    <div className="App">

      <ToastContainer />

      <Header_MP />
      {/* <Drawer /> */}


      <Routes>

        <Route exact path="/" element={<Drawer />} >
          <Route exact path="/dashboard/Auctions_NFT" element={<Auctions_NFT />} /> 
          {/* <Route exact path="/Auctions_NFT" element={<Auctions_NFT />} /> */}
          <Route exact path="/dashboard/Buy_nft" element={<Buy_nft />} />

          <Route exact path="/dashboard/Buy_Auction" element={<Buy_Auction />} />





        </Route>
        <Route exact path="/NFT_Buy" element={<NFT_Buy />} />

        <Route exact path="/Biding/:id" element={<Biding_NFT />} />


      </Routes>


    </div>
  );
}

export default App;
