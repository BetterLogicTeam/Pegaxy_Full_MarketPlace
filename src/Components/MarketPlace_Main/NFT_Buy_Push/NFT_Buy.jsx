import React from 'react'
import './NFT_Buy_Style.css'
import { BsHeartFill } from 'react-icons/bs'
import { IoIosFlash } from 'react-icons/io'
import { FaMarsStroke } from 'react-icons/fa'
import { BsArrowClockwise } from 'react-icons/bs'
import { BsShareFill } from 'react-icons/bs'
import {GiTireIronCross} from 'react-icons/gi'
import Modal from 'react-bootstrap/Modal';


export default function NFT_Buy() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div>
      <Modal
        show={modalShow}
        size="MD"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      // className='modal-content'
      >
        <Modal.Header >
          <div className="modal-header">
            <div className="modal-title h4 text-white">Buy now</div>
          </div>
            <GiTireIronCross className="btn-close brn_close_btn text-white" onClick={()=>setModalShow(false)}/>
            {/* <button type="button" className="btn-close brn_close_btn text-white" aria-label="Close" ></button> */}
        </Modal.Header>

        <Modal.Body className='model_bg'>
          <div className="viewModal">
            <div className="bs-wizard">
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
            </div>
            <div className="formModal mb-4">
              <div className="disabled with-img-left mb-1 input-group input-group-lg">
                <span className="input-group-text" id="basic-symbol">
                  <span style={{ boxSizing: "border-box", display: "inline-block", overflow: "hidden", width: "16px", height: "16px", background: "none", opacity: "1", border: "0px", margin: "0px", padding: " 0px", position: "relative" }}>
                    <img alt="USDT" src="https://cdn.pegaxy.io/statics/marketplace/public/v3/images/symbol/usdt.png" decoding="async" data-nimg="fixed" style={{ position: "absolute", inset: "0px", boxSizing: "border-box", padding: "0px", border: "none", margin: "auto", display: "block", width: "0px", height: "0px", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%" }} />
                  </span>
                </span>
                <input placeholder="3.22"  className="text-end form-control" type="text"  inputmode="numeric" />
              </div>
              <div className="d-flex justify-content-end">
                <small className="text-muted text-end fw-bold form-text">Your balance: 0 USDT</small>
              </div>
            </div>
            <div className="d-flex align-items-center justify-content-center">
              <button type="button" className="ps-5 pe-5 animated-button btn btn-primary">APPROVE</button>
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
                  <span className='text-white'>BACK</span>
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
                    <div className="price-title">
                      <span>Current price</span>
                    </div>
                    <div className="price-value mt-3">
                      <span style={{ boxSizing: "border-box", display: "inline-block", overflow: "hidden", width: "16px", height: "16px", background: "none", opacity: "1", border: "0px", margin: "0px", padding: " 0px", position: "relative" }}>
                        <img alt="USDT" src="https://cdn.pegaxy.io/statics/marketplace/public/v3/images/symbol/usdt.png" decoding="async" data-nimg="fixed" style={{ position: "absolute", inset: "0px", boxSizing: "border-box", padding: "0px", border: "none", margin: "auto", display: "block", width: "0px", height: "0px", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%" }} />
                      </span>
                      <span className="value">3.22</span>
                      <span className="sub">($3.22)</span>
                    </div>
                    <div className="price-button mt-3">
                      <button type="button" className="ps-5 pe-5 animated-button btn btn-primary">
                        <span className='fw-1 ' onClick={() => setModalShow(true)}>Buy Now</span>
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
