import React, { useEffect, useState } from 'react'
import './Biding_style.css'
import { BsHeartFill } from 'react-icons/bs'
import { IoIosFlash } from 'react-icons/io'
import { FaMarsStroke } from 'react-icons/fa'
import { BsArrowClockwise } from 'react-icons/bs'
import { BsShareFill } from 'react-icons/bs'
import { GiTireIronCross } from 'react-icons/gi'
import Modal from 'react-bootstrap/Modal';
import axios from 'axios'
import { nftMarketContractAddress, nftMarketContractAddress_Abi } from '../../utilies/Contract'
import { loadWeb3 } from '../../apis/api'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import Spinner from 'react-bootstrap/Spinner'
import {Link, Routes, Route, useNavigate} from 'react-router-dom'
export default function Biding_NFT() {

    const navigate = useNavigate();
    const [showbiding, setshowbiding] = React.useState(false);
    const { id } = useParams();


    const [tokenId, settokenId] = useState()
    const [price, setprice] = useState()
    const [duration, setduration] = useState()
    const [nftcontactadd, setnftcontactadd] = useState()
    const [hightbid, sethightbid] = useState()
    const [base_price, setbase_price] = useState()
    const [bidEndTime, setbidEndTime] = useState()
    const [Seconds, setSeconds] = useState(0)
    const [Days_here, setDays_here] = useState(0)
    const [Hours_here, setHours_here] = useState(0)
    const [Munits_here, setMunits_here] = useState(0)
    const [img_url, setimg_url] = useState()
    const [setdisable, setsetdisable] = useState()
    const [getinputdata, setgetinputdata] = useState()
    const [boluher, setboluher] = useState(true)
    const [SendAddress, setSendAddress] = useState()
    const [HighestBideradd, setHighestBideradd] = useState()
    let [isSpinner, setIsSpinner] = useState(false)
    const [Token_Id, setToken_Id] = useState()
    const [nftname_here, setnftname_here] = useState()
    const [Resonse, setResonse] = useState()
    const [btnspiiner, setbtnspiiner] = useState("PLACE A BID")

    let alldata_here

    const auction = async () => {
        const web3 = window.web3;
        let acc = loadWeb3()



        let res = await axios.get(
            `https://whenftapi.herokuapp.com/OnAuction_marketplace_history?id=100`
        );

        let response_here = res.data.data[id]
        response_here = response_here.url
        setResonse(response_here)

        let nftname = res.data.data[id]
        nftname = nftname.name
        setnftname_here(nftname)

        let sender_address = res.data.data[id]
        sender_address = sender_address.useraddress
        setSendAddress(sender_address)
        let tokenId_here = res.data.data[id]
        tokenId_here = tokenId_here.tokenId;
        setToken_Id(tokenId_here)

        console.log("tokenId_herehhhhhhhhhhhhh", res.data.data[id]);


        alldata_here = res.data.data[id]
        alldata_here = alldata_here.itemId;
        let base_price = res.data.data[id]
        base_price = base_price.price
        let bidEndTime = res.data.data[id]
        bidEndTime = bidEndTime.bidEndTime
        let nftContract = res.data.data[id]
        nftContract = nftContract.nftContract

        setbase_price(base_price)
        settokenId(alldata_here)
        setnftcontactadd(nftContract)


        var currentDateTime = new Date();
        let resultInSeconds = currentDateTime.getTime() / 1000;
        let Time_here = bidEndTime - resultInSeconds
        let TimeFinal = parseInt(Time_here)

        let balcechack = await web3.eth.getBalance;
        console.log("Balcgfdffff", balcechack);



        if (TimeFinal <= 0) {


            setboluher(false)

        } else {
            let days = parseInt(TimeFinal / 86400)

            setDays_here(days)
            TimeFinal = TimeFinal % (86400)
            let hours = parseInt(TimeFinal / 3600)
            setHours_here(hours)
            TimeFinal %= 3600
            let munites = parseInt(TimeFinal / 60)
            setMunits_here(munites)
            TimeFinal %= 60
            let second_here = parseInt(TimeFinal)
            setSeconds(second_here)

        }

        console.log("Days_here", alldata_here);
        try {
            let nftContractOf = new web3.eth.Contract(nftMarketContractAddress_Abi, nftMarketContractAddress);
            console.log("tokenId", nftContractOf);
            let hightbid = await nftContractOf.methods.highestBidderMapping(alldata_here).call();
            console.log("hightbid", hightbid.bidderAddr);
            let bidderAdd = hightbid.bidderAddr
            hightbid = hightbid.amount;
            hightbid = web3.utils.fromWei(hightbid)
            setHighestBideradd(bidderAdd)

            sethightbid(hightbid)

        } catch (e) {
            console.log("Error While HeightestBid", e);
        }



    };


    const createBidOnItem = async () => {
        let acc = await loadWeb3();
        setIsSpinner(true)
        setbtnspiiner(<><Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
        </Spinner></>)

        try {
            const web3 = window.web3;
            // hightbid = web3.utils.toWei(hightbid)
            // console.log("getinputdata",getinputdata);
            console.log("tokenIdtokenIdtokenId", tokenId);
            console.log("SendAddress", SendAddress);

            if (SendAddress !== acc) {
                if (hightbid <= getinputdata) {
                    if (base_price <= getinputdata) {
                        // let getinputdata2 = web3.utils.toBN(getinputdata).toString()
                        let getinputdata2 = web3.utils.toWei(getinputdata).toString()




                        // getinputdata=getinputdata.parseInt()
                        console.log("getinputdata", getinputdata2);



                        let nftContractOf = new web3.eth.Contract(nftMarketContractAddress_Abi, nftMarketContractAddress);

                        await nftContractOf.methods.createBidOnItem(tokenId, nftcontactadd).send({
                            from: acc,
                            value: getinputdata2

                        })
                        toast.success("Biding Successful")
                        setgetinputdata(" ")
                        setIsSpinner(false)
                        setbtnspiiner("PLACE A BID")


                    } else {
                        toast.error("Bid price must be greater than base price and highest bid")
                        setIsSpinner(false)
                        setbtnspiiner("PLACE A BID")


                    }


                } else {
                    toast.error("Bid price must be greater than base price and highest bid")
                    setIsSpinner(false)
                    setbtnspiiner("PLACE A BID")


                }
            } else {
                toast.error("Already owned")
                setIsSpinner(false)
                setbtnspiiner("PLACE A BID")



            }


        }
        catch (e) {
            console.log("Create Bid Error", e);
            setIsSpinner(false)
            setbtnspiiner("PLACE A BID")


        }
    }


    const claimBidItem = async () => {
        let acc = await loadWeb3();
        const web3 = window.web3;
        setIsSpinner(true)


        try {
            if (HighestBideradd == acc) {
                let nftContractOf = new web3.eth.Contract(nftMarketContractAddress_Abi, nftMarketContractAddress);


                await nftContractOf.methods.claimBidItem(tokenId, nftcontactadd).send({
                    from: acc,
                })

                let postapiPushdata = await axios.post('https://whenftapi.herokuapp.com/update_auction_status', {

                    "tokenid": Token_Id,

                })
                console.log("postapiPushdata", postapiPushdata);

                setIsSpinner(false)
                toast.success("Transion Compelete")


            } else {
                toast.error("Only highest bidder can claim the NFT")
                setIsSpinner(false)

            }



        } catch (e) {
            console.log("Error While Call Function claimBidItem", e)
            setIsSpinner(false)

        }
    }


    useEffect(() => {
        setInterval(() => {
            auction()
            //   heightestbid()
        }, 1000)


    }, [])


    return (
        <div>
            <Modal
                show={showbiding}
                size="MD"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            // className='modal-content'
            >
                <Modal.Header >
                    <div className="modal-header">
                        <div className="modal-title h4 text-white">Buy now</div>
                    </div>
                    <GiTireIronCross className="btn-close brn_close_btn text-white" onClick={() => setshowbiding(false)} />
                    {/* <button type="button" className="btn-close brn_close_btn text-white" aria-label="Close" ></button> */}
                </Modal.Header>

                <Modal.Body className='model_bg'>
                    <div className="viewModal">
                        {/* <div className="bs-wizard">
                            <div className="bs-wizard-step complete">
                                <div className="progress">
                                    <div className="progress-bar">
                                    </div>
                                </div>
                                <div className="bs-wizard-dot">
                                    <span>1</span>
                                </div>
                                <div className="text-center bs-wizard-stepnum">Approve Token</div>
                            </div>
                            <div className="bs-wizard-step disabled">
                                <div className="progress">
                                    <div className="progress-bar">
                                    </div>
                                </div>
                                <div className="bs-wizard-dot">
                                    <span>2</span>
                                </div>
                                <div className="text-center bs-wizard-stepnum">Buy</div>
                            </div>
                        </div> */}
                        <label class="form-label" for="basic-symbol" style={{ color: '#bababa' }}>You must bid at least: <span class="text-white">{hightbid} BNB</span></label>
                        <div className="formModal mb-4">
                            <div className="disabled with-img-left mb-1 input-group input-group-lg">
                                <span className="input-group-text" id="basic-symbol">
                                    <span style={{ boxSizing: "border-box", display: "inline-block", overflow: "hidden", width: "16px", height: "16px", background: "none", opacity: "1", border: "0px", margin: "0px", padding: " 0px", position: "relative" }}>
                                        <img alt="USDT" src="https://cdn.pegaxy.io/statics/marketplace/public/v3/images/symbol/usdt.png" decoding="async" data-nimg="fixed" style={{ position: "absolute", inset: "0px", boxSizing: "border-box", padding: "0px", border: "none", margin: "auto", display: "block", width: "30px", height: "30px", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%" }} />
                                    </span>
                                </span>
                                <input placeholder="3.22" className="text-end form-control" type="text" inputmode="numeric" onChange={(e) => setgetinputdata(e.target.value)} />
                            </div>
                            <div className="d-flex justify-content-end">
                                <small className="text-muted text-end fw-bold form-text">Your balance: 0 USDT</small>
                            </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-center">
                            <button type="button" className="ps-5 pe-5 animated-button btn btn-primary" style={{ fontWeight: "700" }} onClick={() => createBidOnItem()} >{btnspiiner}</button>
                        </div>
                    </div>


                </Modal.Body>
                {/* / */}
            </Modal>

            <div className="Nft_Buy_Bg_Image">
                <div className='viewMain'>
                    <div className='viewContent'>
                        <div className="container">
                            <div className="viewBack">
                                <div className="icon">
                                    <span style={{ boxSizing: "border-box", display: "inline-block", overflow: "hidden", width: "16px", height: "16px", background: "none", opacity: "1", border: "0px", margin: "0px", padding: " 0px", position: "relative" }}>
                                        <img alt="Back" src="https://cdn.pegaxy.io/statics/marketplace/public/v3/images/ic_back.png" decoding="async" data-nimg="fixed" style={{ position: "absolute", inset: "0px", boxSizing: "border-box", padding: "0px", border: "none", margin: "auto", display: "block", width: "0px", height: "0px", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%" }} />
                                    </span>
                                    <span className='text-white' onClick={() => navigate(-1)}>BACK</span>
                                </div>
                            </div>
                            <div className='bxDetail'>
                                <div className="viewPicture">
                                    <div className="bigCard">
                                        <div className="card-main">
                                            <div className="card-cover">
                                                <div className="status-view">
                                                    <div className="item-view">2D</div>
                                                    <div className="item-view active">3D</div>
                                                </div>
                                                <div className="thumb-card horse-3d">
                                                    <div className="horse-inner hidden">
                                                        <span style={{ boxSizing: "border-box", display: "inline-block", overflow: "hidden", width: "16px", height: "16px", background: "none", opacity: "1", border: "0px", margin: "0px", padding: " 0px", position: "relative" }}>
                                                            <img alt="Pega #954546 - Oni i My" src="https://cdn.pegaxy.io/data/pega/1656526576743" decoding="async" data-nimg="fill" style={{ position: "absolute", inset: "0px", boxSizing: "border-box", padding: "0px", border: "none", margin: "auto", display: "block", width: "0px", height: "0px", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%" }} />
                                                        </span>
                                                    </div>
                                                    <div className="horse-inner horse-inner-3d">
                                                        <iframe width="100%" height="100%" src="https://pega-3d.pegaxy.io/?bg1,default,hoz,89D5D,64DDAE,75176D,43E15A,ECF48E,6F07C1">
                                                        </iframe>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='viewDesc'>
                                    <div className="headerDetail">
                                        <div className="meta">
                                            <div className="meta-left">
                                                <div className="status sale text-white">For Sale</div>
                                                <a target="_blank" rel="noreferrer noopener" href="https://polygonscan.com/token/0xD50D167DD35D256e19E2FB76d6b9Bf9F4c571A3E?a=954546" className="id text-white">#954546</a>
                                            </div>
                                            <div className="meta-right text-white">
                                                <div className="action-btn action-reload">
                                                    <BsArrowClockwise style={{ width: "23px", height: "25px" }} />
                                                </div>
                                                <div className="action-btn action-share">
                                                    <BsShareFill />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="title">
                                            <h1>
                                                <a target="_blank" rel="noreferrer noopener" href="https://polygonscan.com/token/0xD50D167DD35D256e19E2FB76d6b9Bf9F4c571A3E?a=954546" className="id">Oni i My</a>
                                            </h1>
                                        </div>
                                        <div className="properties">
                                            <div className="bloodline" >
                                                <IoIosFlash style={{ color: "rgb(252, 174, 24)", width: "20px", height: "25px" }} />
                                                <span className="name" style={{ color: "rgb(252, 174, 24)" }}>Hoz</span>
                                            </div>
                                            <span className="line">|</span>
                                            <div className="breed" style={{ color: "rgb(50, 151, 255)" }}>
                                                <span className="name">Rare</span>
                                            </div>
                                            <span className="line">|</span>
                                            <div className="gender">
                                                <span style={{ color: "rgb(224, 99, 215)", fontSize: '' }}>
                                                    <FaMarsStroke className='' />
                                                </span>
                                                <span className="name text-white">Female</span>
                                            </div>
                                        </div>
                                        <div className="leading">
                                            <div className="energy low text-white">
                                                <span><IoIosFlash />Energy 0/25</span>
                                            </div>
                                            <div className="owner text-white">
                                                <span>Owner: </span>
                                                0x57cCC...3856A
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bxPrice">
                                        <div className="sales-ends">
                                            <div className="times">


                                                {
                                                    boluher ? (<><div class="holder"> <div class="livenow"> <div></div>  <div></div> <h5></h5></div></div>
                                                        <span className="title text-white">Sales ends July 04, 2022 at 03:38am -07</span>
                                                    </>) : <span className="span_ended text-white">ENDED</span>
                                                }

                                            </div>
                                            <div className="countdown">
                                                <div className="items">
                                                    <div className="title">{Days_here}</div>
                                                    <div className="sub">Days</div>
                                                </div>
                                                <div className="items">
                                                    <div className="title">{Hours_here}</div>
                                                    <div className="sub">Hours</div>
                                                </div>
                                                <div className="items">
                                                    <div className="title">{Munits_here}</div>
                                                    <div className="sub">Minutes</div>
                                                </div>
                                                <div className="items">
                                                    <div className="title">{Seconds}</div>
                                                    <div className="sub">Seconds</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="price-title">
                                            <span>Current price</span>
                                        </div>
                                        <div className="price-value mt-3">
                                            <span style={{ boxSizing: "border-box", display: "inline-block", overflow: "hidden", width: "16px", height: "16px", background: "none", opacity: "1", border: "0px", margin: "0px", padding: " 0px", position: "relative" }}>
                                                <img alt="USDT" src="https://cdn.pegaxy.io/statics/marketplace/public/v3/images/symbol/usdt.png" decoding="async" data-nimg="fixed" style={{ position: "absolute", inset: "0px", boxSizing: "border-box", padding: "0px", border: "none", margin: "auto", display: "block", width: "0px", height: "0px", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%" }} />
                                            </span>
                                            <span className="value">{base_price}</span>
                                            {/* <span className="sub">($3.22)</span> */}
                                        </div>
                                        <div className="price-button mt-3">
                                            <button type="button" className="ps-5 pe-5  animated-button btn btn-primary">
                                                <span className='fw-1' style={{ fontWeight: "700" }} onClick={() => setshowbiding(true)}>PLACE A BID</span>
                                            </button>
                                        </div>
                                    </div>


                                </div>

                            </div>

                        </div>

                    </div>


                </div>

            </div>


        </div>
    )
}
