import React, { useEffect, useState } from 'react'
import '../Auction_NFT/Auctions_style.css'
import { BsHeartFill } from 'react-icons/bs'
import { IoIosFlash } from 'react-icons/io'
import { FaMarsStroke } from 'react-icons/fa'
import {  useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { loadWeb3 } from '../../apis/api'
import { nftMarketContractAddress, nftMarketContractAddress_Abi } from '../../utilies/Contract'
import TimeCard from "../Auction_NFT/TimeCard"
import { auctiontotalitems } from '../../feature/total_items/Totelitemsslice'
import Search_menu from '../MarketPlace_Header_search/Search_menu'
export default function All_NFT() {
    const dispatch = useDispatch()
    let navigate = useNavigate()
    const [apiData, setapiData] = useState()
    const [tokenId, settokenId] = useState()
    const [nftcontactadd, setnftcontactadd] = useState()
    const [hightbid, sethightbid] = useState()
    const [base_price, setbase_price] = useState()
    const [Seconds, setSeconds] = useState(0)
    const [Days_here, setDays_here] = useState(0)
    const [Hours_here, setHours_here] = useState(0)
    const [Munits_here, setMunits_here] = useState(0)
    const [boluher, setboluher] = useState(true)
    const [SendAddress, setSendAddress] = useState()
    const [HighestBideradd, setHighestBideradd] = useState()
    const [Token_Id, setToken_Id] = useState()
    const [nftname_here, setnftname_here] = useState()
    const [Resonse, setResonse] = useState()
    const [ArrayHere, setArrayHere] = useState()
    const [waiting, setWaiting] = useState(false)
    const [condationaldata, setCondationaldata] = useState('waiting...')

    const lenght = useSelector((state) => state.Totalitemsslice.value)



    let alldata_here


    const Fatch_Api_data = async () => {
        
        try {
            setWaiting(true)
            let res = await axios.get("  https://pegaxy-openmarket.herokuapp.com/nftmarketplace_history?id=100")
            console.log("what is all data respose", res);
            res = res.data.data
            if (res.lenght===0) {
                setCondationaldata('No Item')
              } else {
                setCondationaldata('waiting....')

              }
            // console.log("bidEndTimebidEndTime", res[0].bidEndTime);
            setArrayHere(res)
            setWaiting(false)

            dispatch(auctiontotalitems(res.length))



        } catch (e) {
            console.log("Error while fatching API ", e);
        }
    }



    const getTime = async () => {
        try {
            let res = await axios.get(
                "https://pegaxy-openmarket.herokuapp.com/nftmarketplace_history?id=100"
            );
            res = res.data.data
            console.log("what is in result ", res);

            let res_length = res.length
            // console.log("length_is ",res_length);
            let data_Array = []
            for (let i = 0; i < res_length; i++) {
                let isOnAuction=res[i].isOnAuction
                let Nft_name = res[i].name
                let NFT_price = res[i].price
                let bidtime = res[i].bidEndTime
                var currentDateTime = new Date();
                let resultInSeconds = currentDateTime.getTime() / 1000;
                let TimeFinal = parseInt(bidtime - resultInSeconds)
                // console.log("Final_time_here", TimeFinal);
                let days = 0
                let hours = 0
                let munites = 0
                let second_here = 0
                if (TimeFinal > 0) {
                    // alert("time final less then 0");
                    days = parseInt(TimeFinal / 86400)
                    setDays_here(days)
                    TimeFinal = TimeFinal % (86400)
                    hours = parseInt(TimeFinal / 3600)
                    setHours_here(hours)
                    TimeFinal %= 3600
                    munites = parseInt(TimeFinal / 60)
                    // console.log("dayaaa",munites);
                    setMunits_here(munites)
                    TimeFinal %= 60
                    second_here = parseInt(TimeFinal)
                    setSeconds(second_here)

                }

                data_Array = [...data_Array, {isOnAuction:isOnAuction, name: Nft_name, price: NFT_price, BidTime: bidtime, Day: days, Hours: hours, Munites: munites, second_here: second_here }]
                setArrayHere(data_Array)
                // console.log("i",data_Array);

            }


        } catch (e) {
            console.log("Error while get Time API", e);
        }

    }

    // const auction = async () => {
    //     const web3 = window.web3;
    //     let acc = loadWeb3()



    //     let res = await axios.get(
    //         `https://whenftapi.herokuapp.com/OnAuction_marketplace_history?id=100`
    //     );

    //     let response_here = res.data.data
    //     console.log("data_all", response_here);
    //     response_here = response_here.url
    //     setResonse(response_here)

    //     let nftname = res.data.data
    //     nftname = nftname.name
    //     setnftname_here(nftname)

    //     let sender_address = res.data.data
    //     sender_address = sender_address.useraddress
    //     setSendAddress(sender_address)
    //     let tokenId_here = res.data.data
    //     tokenId_here = tokenId_here.tokenId;
    //     setToken_Id(tokenId_here)


    //     alldata_here = res.data.data
    //     alldata_here = alldata_here.itemId;
    //     let base_price = res.data.data
    //     base_price = base_price.price
    //     let bidEndTime = res.data.data
    //     bidEndTime = bidEndTime.bidEndTime
    //     let nftContract = res.data.data
    //     nftContract = nftContract.nftContract

    //     setbase_price(base_price)
    //     settokenId(alldata_here)
    //     setnftcontactadd(nftContract)


    //     var currentDateTime = new Date();
    //     let resultInSeconds = currentDateTime.getTime() / 1000;
    //     let Time_here = bidEndTime - resultInSeconds
    //     let TimeFinal = parseInt(Time_here)
    //     console.log("check", TimeFinal);



    //     if (TimeFinal <= 0) {
    //         console.log("check");
    //         setboluher(false)

    //     } else {
    //         let days = parseInt(TimeFinal / 86400)

    //         setDays_here(days)
    //         TimeFinal = TimeFinal % (86400)
    //         let hours = parseInt(TimeFinal / 3600)
    //         setHours_here(hours)
    //         TimeFinal %= 3600
    //         let munites = parseInt(TimeFinal / 60)
    //         setMunits_here(munites)
    //         TimeFinal %= 60
    //         let second_here = parseInt(TimeFinal)
    //         setSeconds(second_here)

    //     }

    //     console.log("Days_here", alldata_here);
    //     try {
    //         let nftContractOf = new web3.eth.Contract(nftMarketContractAddress_Abi, nftMarketContractAddress);
    //         console.log("tokenId", nftContractOf);
    //         let hightbid = await nftContractOf.methods.highestBidderMapping(alldata_here).call();
    //         console.log("hightbid", hightbid.bidderAddr);
    //         let bidderAdd = hightbid.bidderAddr
    //         hightbid = hightbid.amount;
    //         hightbid = web3.utils.fromWei(hightbid)
    //         setHighestBideradd(bidderAdd)

    //         sethightbid(hightbid)

    //     } catch (e) {
    //         console.log("Error While HeightestBid", e);
    //     }



    // };

    

    useEffect(() => {

        Fatch_Api_data()
        // auction()

        setInterval(() => {
            getTime()
            //   heightestbid()
        }, 1000)
      

    }, []);

    return (
        <div>

            <div className="">
            <Search_menu Fatch_Api_data={Fatch_Api_data} />

            {waiting ? <div className='text-center text-white'>{condationaldata}</div> : <div className="main_div_buy_nft">
                    {
                        ArrayHere?.map((items, index, array) => {
                            let title= 'all_data'
                            return (
                                <>
                                    <div className="cardPega default breed-type breed-pacer classPega-1" onClick={() => { items.isOnAuction==1?(navigate('/Biding/' + index+'/'+title)): (navigate('/NFT_Buy/' + index+'/'+title))}}>
                                        <div className="card-inner flip-card-inner">
                                            <div className="hover-action">
                                                <div className="action-inner">i</div>
                                            </div>
                                            <div className="card-main flip-card-front">
                                                <div className="card-cover">
                                                    <div className="thumb-card">
                                                        <div className="horse-inner">
                                                            <span style={{ boxSizing: "border-box", display: "block", overflow: "hidden", width: "initial", height: "initial", background: "none", opacity: "1", border: "0px", margin: "0px", padding: "0px", position: "absolute", inset: "0px" }}>
                                                                <img alt="Pega #948329 - Maiya Heller" src="https://cdn.pegaxy.io/data/pega/1656337322315" decoding="async" data-nimg="fill" style={{ position: "absolute", inset: "0px", boxSizing: "border-box", padding: "0px", border: "none", margin: "auto", display: "block", width: "0px", height: "0px", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%" }} />
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="info-energy">
                                                        <IoIosFlash className='flash_icon' />
                                                        <span className='text-white'> {index+1}/{array.length}</span>
                                                    </div>
                                                    <div className="meta-card">
                                                        <div className="tracking">
                                                            <div className="id">Pega #948329</div>
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
                                                        <div className="breedcount">
                                                            {/* <i className="fa-solid fa-heart" ></i> */}
                                                            <BsHeartFill className='icon_heart' style={{ textShadow: "rgb(255, 255, 255) 0px 0px 1px" }}>0</BsHeartFill>
                                                            <span>{index+1}</span>
                                                        </div>
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
                                                    <div className="info-right" style={{ color: "#ff9f00" }}>
                                                        
                                                        {items.isOnAuction ==1 ?(<TimeCard item={items} />):""}
                                                        


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

                </div>}
                



            </div>

        </div>
    )
}
