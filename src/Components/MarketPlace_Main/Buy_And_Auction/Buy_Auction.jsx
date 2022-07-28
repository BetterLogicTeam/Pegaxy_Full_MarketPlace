import React, { useEffect, useState } from 'react'
// import './Buy_nft_style.css'
import { BsHeartFill } from 'react-icons/bs'
import { IoIosFlash } from 'react-icons/io'
import { FaMarsStroke } from 'react-icons/fa'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import {fetchAuctionBuyData} from '../../../store/slices/auctionBuyData';
import avtar from '../../Assest/images/avtar.jpeg'
export default function Buy_Auction() {
    const [apiData, setapiData] = useState()

    let History =useNavigate()
    const dispatch = useDispatch();
    const {buyAuctionData} = useSelector(state=> state.buyAuction);
    const Fatch_Api_data = async () => {
        try {
            dispatch(fetchAuctionBuyData("all"))
        } catch (e) {
            console.log("Error while fatching API ", e);
        }
    }
    useEffect(() => {
        Fatch_Api_data()
    }, []);

    return (
        <div>

            <div className="top_div_buy_nft">

                <div className="">


                    <div className="main_div_buy_nft">
                        {
                            buyAuctionData?.map((items, index) => {
                                return (
                                    <>
                                        <div className="cardPega default breed-type breed-pacer classPega-1" onClick={()=>History('/NFT_Buy')}>
                                            <div className="card-inner flip-card-inner">
                                                <div className="hover-action">
                                                    <div className="action-inner">i</div>
                                                </div>
                                                <div className="card-main flip-card-front">
                                                    <div className="card-cover">
                                                        <div className="thumb-card">
                                                            <div className="horse-inner">
                                                                <span style={{ boxSizing: "border-box", display: "block", overflow: "hidden", width: "initial", height: "initial", background: "none", opacity: "1", border: "0px", margin: "0px", padding: "0px", position: "absolute", inset: "0px" }}>
                                                                    <img alt="Pega #948329 - Maiya Heller" src={items.url ? items.url : avtar} decoding="async" data-nimg="fill" style={{ position: "absolute", inset: "0px", boxSizing: "border-box", padding: "0px", border: "none", margin: "auto", display: "block", width: "0px", height: "0px", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%" }} />
                                                                </span>
                                                            </div>
                                                        </div>
                                                        {/* <div className="info-energy">
                                                            <IoIosFlash className='flash_icon' />
                                                            <span className='text-white'> 0/25</span>
                                                        </div> */}
                                                        <div className="meta-card">
                                                            <div className="tracking">
                                                                <div className="id">Id #{items.itemId}</div>
                                                                <div className="information">
                                                                    <div className="properties">
                                                                        <div className="symbol hoz">
                                                                            <IoIosFlash className='flash_icon' />

                                                                        </div>
                                                                        <div className="symbol male">
                                                                            <FaMarsStroke className='strok_icon' />
                                                                        </div>
                                                                    </div>
                                                                    <div className="holder text-white">{items.name}</div>
                                                                </div>
                                                            </div>
                                                            {/* <AiOutlineHeart/> */}
                                                            {/* <div className="breedcount">
                                                               
                                                                <BsHeartFill className='icon_heart' style={{ textShadow: "rgb(255, 255, 255) 0px 0px 1px" }}>0</BsHeartFill>
                                                                <span>{index}</span>
                                                            </div> */}
                                                        </div>
                                                    </div>
                                                    <div className="card-info">
                                                        <div className="info-left">
                                                            <div className="title">Current price</div>
                                                            <div className="value">
                                                                <span style={{ boxSizing: "border-box", display: "block", overflow: "hidden", width: "initial", height: "initial", background: "none", opacity: "1", border: "0px", margin: "0px", padding: "0px", position: "absolute", inset: "0px" }}>
                                                                </span>
                                                                <img alt="USDT" src="https://cdn.pegaxy.io/statics/marketplace/public/v3/images/symbol/usdt.png" decoding="async" data-nimg="fixed" width="15%" />
                                                                <span>{items.price}</span>
                                                            </div>
                                                        </div>
                                                        <div className="info-right">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </>
                                )
                            }
                            )
                        }

                    </div>



                </div>
            </div>


        </div>
    )
}
