import React from 'react'
import './Search_style.css'
import {BsArrowClockwise} from 'react-icons/bs'
import {FaSearch} from 'react-icons/fa'
import Offcanvas from 'react-bootstrap/Offcanvas'
import { AiOutlineArrowLeft } from 'react-icons/ai'


export default function Search_menu() {
    const [show, setShow] = React.useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div className=''>
            <div className="headerContent mt-5">
                <div className="header-left">
                    <div className="action-reload">
                        <div className="action-btn text-white " onClick={() => window.location.reload()}>
                           <BsArrowClockwise className='icon_arrow'/>
                        </div>
                        <span className="action-name">5,656 Items</span>
                    </div>
                    <div className="">
                        <button type="button" className=" filterbtntt btn btn-outline-primary"  onClick={handleShow}>Filter</button>
                    </div>
                </div>
                <div className="header-right">
                    <div className="item-filter filter-search">
                        <input placeholder="Search by Pega ID" className="form-control" type="text"  inputmode="numeric" />
                        <div className="icon-search">
                           <FaSearch className='icon_search'/>
                        </div>
                    </div>
                    <div className="item-filter">
                        <div className="drop-filter dropdown">
                            <button type="button" id="dropdown-filter" data-bs-toggle="dropdown" aria-expanded="false" className="dropdown-toggle btn btn-link form-control">
                                <span>Default view</span>
                            </button>
                            <ul className="dropdown-menu dropdown_menu" aria-labelledby="dropdownMenuButton1">
                                <li><a className="dropdown-item" href="#">Default view</a></li>
                                <li><a className="dropdown-item" href="#">Stats view</a></li>


                            </ul>

                        </div>

                    </div>
                    <div className="item-filter">
                        <div className="drop-filter dropdown">
                            <button type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" className="dropdown-toggle btn btn-link">
                                <span>20 Pegas/page</span>
                            </button>
                            <ul className="dropdown-menu dropdown_menu" aria-labelledby="dropdownMenuButton1">
                                <li><a className="dropdown-item" href="#">20 Pegas/page</a></li>
                                <li><a className="dropdown-item" href="#">40 Pegas/page</a></li>
                                <li><a className="dropdown-item" href="#">60 Pegas/page</a></li>
                                <li><a className="dropdown-item" href="#">80 Pegas/page</a></li>

                                <li><a className="dropdown-item" href="#">100 Pegas/page</a></li>

                            </ul>

                        </div>
                    </div>
                  
                    <div className="item-filter">
                        <div className="drop-filter dropdown">
                            <button type="button" aria-expanded="false" id="dropdownMenuButton1" data-bs-toggle="dropdown" className="dropdown-toggle btn btn-link nav_dropdown">
                                <span>Latest</span>
                            </button>
                            <ul className="dropdown-menu dropdown_menu" aria-labelledby="dropdownMenuButton1">
                                <li><a className="dropdown-item" href="#">Latest</a></li>
                                <li><a className="dropdown-item" href="#">Lowest Pega ID</a></li>
                                <li><a className="dropdown-item" href="#">Highest Pega ID</a></li>
                                <li><a className="dropdown-item" href="#">Lowest Price</a></li>
                                <li><a className="dropdown-item" href="#">Highest Price</a></li>
                                <li><a className="dropdown-item" href="#">Highest Energy</a></li>

                                <li><a className="dropdown-item" href="#">Highest Win Rate</a></li>
                                <li><a className="dropdown-item" href="#">Auction ends soon</a></li>

                            </ul>
                           
                        </div>
                    </div>
                </div>
            </div>
            {/* <button variant="primary">
                    Launch
                </button> */}

                <Offcanvas show={show} onHide={handleClose} className="Offcanvas_main">
                    <Offcanvas.Header >
                    <div className='d-flex align-items-center'>
                            <h6 className='title-name '>Filter</h6>
                            <div className="title-btn">Reset</div>
                        </div>

                        <AiOutlineArrowLeft onClick={()=>setShow(false)} style={{ color: 'white', cursor: "pointer" }} />
                    </Offcanvas.Header>
                    <Offcanvas.Body >
                    <div className="bxFilter-setting mt-n2">
                            <div role="group" className="btn-group">
                                <button type="button" className="btn-tab active animated-button btn btn-link">Basic</button>
                                <button type="button" className="btn-tab animated-button btn btn-link">Advanced</button>
                            </div>
                        </div>

                        <div className="bxFilter-content" >
                            <div className="accordion">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingOne">
                                        <button type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" className="accordion-button">
                                            <div className="title">Listing Type</div>
                                            <div className="badge">
                                            </div>
                                        </button>
                                    </h2>
                                    <div id="collapseOne" className="accordion-collapse collapse show mt-2" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <div className="filterCheck">
                                                <div className="item-filter">
                                                    {/* <Link to="/"> */}
                                                    <label className="formCheck">Buy now<input type="checkbox" />
                                                        <span className="checkmark">
                                                        </span>
                                                    </label>
                                                    {/* </Link> */}
                                                    <span>
                                                    </span>
                                                </div>
                                                <div className="item-filter">
                                                    {/* <Link to="/Auctions_NFT"> */}
                                                    <label className="formCheck">Auction<input type="checkbox" />
                                                        <span className="checkmark">
                                                        </span>
                                                    </label>
                                                    {/* </Link> */}
                                                    <span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button type="button" aria-expanded="false" className="accordion-button">
                                            <div className="title">Price</div>
                                        </button>
                                    </h2>
                                    <div className="accordion-collapse collapse show">
                                        <div className="accordion-body">
                                            <div className="filterForm">
                                                <div className="mb-2">
                                                    <div className="drop-filter dropdown">
                                                        <button type="button" id="dropdown-symbol" aria-expanded="false" className="drop-symbol dropdown-toggle btn btn-link">
                                                            <a aria-selected="false" data-rr-ui-dropdown-item="" className="dropdown-item" role="button" tabindex="0" href="#">
                                                                <span>Select currency...</span>
                                                            </a>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <div className="dropdown-filter dropdown">

                                        <h2 className="accordion-header">
                                            <button type="button" aria-expanded="false" className="accordion-button" data-bs-toggle="dropdown" id="dropdown-basic" >
                                                <div className="title">Bloodlines</div>
                                                <div className="badge">
                                                </div>
                                            </button>
                                        </h2>
                                        <div className="accordion-collapse collapse show">
                                            <div className="accordion-body">
                                                <div className="filterCheck">
                                                    <div className="item-filter">
                                                        <label className="formCheck">Hoz<input type="checkbox" />
                                                            <span className="checkmark"></span></label>
                                                        <span>
                                                        </span>
                                                    </div>
                                                    <div className="item-filter">
                                                        <label className="formCheck">Campona<input type="checkbox" />
                                                            <span className="checkmark"></span>
                                                        </label>
                                                        <span>
                                                        </span>
                                                    </div>
                                                    <div className="item-filter">
                                                        <label className="formCheck">
                                                            Klin<input type="checkbox" />
                                                            <span className="checkmark">
                                                            </span>
                                                        </label>
                                                        <span>
                                                        </span>
                                                    </div>
                                                    <div className="item-filter">
                                                        <label className="formCheck">Zan<input type="checkbox" />
                                                            <span className="checkmark">
                                                            </span>
                                                        </label>
                                                        <span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button type="button" aria-expanded="false" className="accordion-button">
                                            <div className="title">Gender</div>
                                            <div className="badge">
                                            </div>
                                        </button>
                                    </h2>
                                    <div className="accordion-collapse collapse show">
                                        <div className="accordion-body">
                                            <div className="filterCheck">
                                                <div className="item-filter">
                                                    <label className="formCheck">Male<input type="checkbox" />
                                                        <span className="checkmark">
                                                        </span>
                                                    </label>
                                                    <span>
                                                    </span>
                                                </div>
                                                <div className="item-filter">
                                                    <label className="formCheck">Female<input type="checkbox" />
                                                        <span className="checkmark">
                                                        </span>
                                                    </label>
                                                    <span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button type="button" aria-expanded="false" className="accordion-button">
                                            <div className="title">Breed Types</div>
                                            <div className="badge">
                                            </div>
                                        </button>
                                    </h2>
                                    <div className="accordion-collapse collapse show">
                                        <div className="accordion-body">
                                            <div className="filterCheck">
                                                <div className="item-filter">
                                                    <label className="formCheck">Founding<input type="checkbox" />
                                                        <span className="checkmark">
                                                        </span>
                                                    </label>
                                                    <span>
                                                    </span>
                                                </div>
                                                <div className="item-filter">
                                                    <label className="formCheck">Legendary<input type="checkbox" />
                                                        <span className="checkmark">
                                                        </span>
                                                    </label>
                                                    <span>
                                                    </span>
                                                </div>
                                                <div className="item-filter">
                                                    <label className="formCheck">Epic<input type="checkbox" />
                                                        <span className="checkmark">
                                                        </span>
                                                    </label>
                                                    <span>
                                                    </span>
                                                </div>
                                                <div className="item-filter">
                                                    <label className="formCheck">Rare<input type="checkbox" />
                                                        <span className="checkmark">
                                                        </span>
                                                    </label>
                                                    <span>
                                                    </span>
                                                </div>
                                                <div className="item-filter">
                                                    <label className="formCheck">Pacer<input type="checkbox" />
                                                        <span className="checkmark">
                                                        </span>
                                                    </label>
                                                    <span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header"
                                    ><button type="button" aria-expanded="false" className="accordion-button">
                                            <div className="title">Status</div>
                                            <div className="badge">
                                            </div>
                                        </button>
                                    </h2>
                                    <div className="accordion-collapse collapse show">
                                        <div className="accordion-body">
                                            <div className="filterCheck">
                                                <div className="item-filter">
                                                    <label className="formCheck">Can Race<input name="can_race" type="checkbox" />
                                                        <span className="checkmark">
                                                        </span>
                                                    </label>
                                                    <span>
                                                    </span>
                                                </div>
                                                <div className="item-filter">
                                                    <label className="formCheck">Can Breed<input name="can_breed" type="checkbox" />
                                                        <span className="checkmark">
                                                        </span>
                                                    </label>
                                                    <span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button type="button" aria-expanded="false" className="accordion-button">
                                            <div className="title">Breed Count</div>
                                        </button>
                                    </h2>
                                    {/* <MultiRangeSlider
                                        min={0}
                                        max={10}
                                        // step={5}
                                        // ruler={true}
                                        // label={true}
                                        // preventWheel={false}
                                        minValue={minValue}
                                        maxValue={maxValue}
                                        onInput={(e) => {
                                            handleInput(e);
                                        }}
                                    /> */}
                                    <div className="accordion-collapse collapse show">
                                        <div className="accordion-body">
                                            <div className="filterSlider">
                                                <div className="slider-value">
                                                    <div className="value-number">0</div>
                                                    <div className="value-slider">
                                                        <span label="true" className="MuiSlider-colorPrimary MuiSlider-sizeMedium MuiSlider-root MuiSlider-marked css-9cct2k">
                                                            <span className="MuiSlider-rail css-b04pc9">
                                                            </span>
                                                            <span className="MuiSlider-track css-1t2bqnt" style={{ left: "0%", width: "100%" }}>
                                                            </span>
                                                            <span data-index="0" className="MuiSlider-mark MuiSlider-markActive css-17lmo96" style={{ left: "0%" }}>
                                                            </span>
                                                            <span aria-hidden="true" data-index="0" className="MuiSlider-markLabel MuiSlider-markLabelActive css-sxo8tj" style={{ left: "0%" }}>0</span>
                                                            <span data-index="1" className="MuiSlider-mark MuiSlider-markActive css-17lmo96" style={{ left: "14.2857%" }}>
                                                            </span>
                                                            <span aria-hidden="true" data-index="1" className="MuiSlider-markLabel MuiSlider-markLabelActive css-sxo8tj" style={{ left: "14.2857%" }}>1</span>
                                                            <span data-index="2" className="MuiSlider-mark MuiSlider-markActive css-17lmo96" style={{ left: "28.5714%" }}>
                                                            </span>
                                                            <span aria-hidden="true" data-index="2" className="MuiSlider-markLabel MuiSlider-markLabelActive css-sxo8tj" style={{ left: "28.5714%" }}>2</span>
                                                            <span data-index="3" className="MuiSlider-mark MuiSlider-markActive css-17lmo96" style={{ left: "42.8571%" }}>
                                                            </span>
                                                            <span aria-hidden="true" data-index="3" className="MuiSlider-markLabel MuiSlider-markLabelActive css-sxo8tj" style={{ left: "42.8571%" }}>3</span>
                                                            <span data-index="4" className="MuiSlider-mark MuiSlider-markActive css-17lmo96" style={{ left: "57.1429%" }}></span>
                                                            <span aria-hidden="true" data-index="4" className="MuiSlider-markLabel MuiSlider-markLabelActive css-sxo8tj" style={{ left: "57.1429%" }}>4</span>
                                                            <span data-index="5" className="MuiSlider-mark MuiSlider-markActive css-17lmo96" style={{ left: "71.4286%" }}></span>
                                                            <span aria-hidden="true" data-index="5" className="MuiSlider-markLabel MuiSlider-markLabelActive css-sxo8tj" style={{ left: "71.4286%" }}>5</span>
                                                            <span data-index="6" className="MuiSlider-mark MuiSlider-markActive css-17lmo96" style={{ left: "85.7143%" }}></span>
                                                            <span aria-hidden="true" data-index="6" className="MuiSlider-markLabel MuiSlider-markLabelActive css-sxo8tj" style={{ left: "85.7143%" }}>6</span>
                                                            <span data-index="7" className="MuiSlider-mark MuiSlider-markActive css-17lmo96" style={{ left: "100%" }}></span>
                                                            <span aria-hidden="true" data-index="7" className="MuiSlider-markLabel MuiSlider-markLabelActive css-sxo8tj" style={{ left: "100%" }}>7</span>
                                                            <span data-index="0" className="MuiSlider-thumbColorPrimary MuiSlider-thumbSizeMedium MuiSlider-thumb css-7drnjp" style={{ left: "0%", pointerEvents: "none" }}>
                                                                <input aria-orientation="horizontal" aria-valuemax="7" aria-valuemin="0" type="range" min="0" max="7" step="1" data-index="0" aria-label="Minimum distance" aria-valuenow="0" aria-valuetext="0" value="0" style={{ border: "0px", clip: "rect(0px, 0px, 0px, 0px)", height: "100%", margin: "-1px", overflow: "hidden", padding: "0px", position: "absolute", whiteSpace: "nowrap", width: "100%", direction: "ltr" }} />
                                                                <span className="MuiSlider-valueLabel css-1s3sa3n" aria-hidden="true">
                                                                    <span className="MuiSlider-valueLabelCircle">
                                                                        <span className="MuiSlider-valueLabelLabel">0</span>
                                                                    </span>
                                                                </span>
                                                            </span>
                                                            <span data-index="1" className="MuiSlider-thumbColorPrimary MuiSlider-thumbSizeMedium MuiSlider-thumb css-7drnjp" style={{ left: "100%", pointerEvents: "none" }}>
                                                                <input aria-orientation="horizontal" aria-valuemax="7" aria-valuemin="0" type="range" min="0" max="7" step="1" data-index="1" aria-label="Minimum distance" aria-valuenow="7" aria-valuetext="7" value="7" style={{ border: "0px", clip: "rect(0px, 0px, 0px, 0px)", height: "100%", margin: "-1px", overflow: "hidden", padding: "0px", position: "absolute", whiteSpace: "nowrap", width: "100%", direction: "ltr" }} />
                                                                <span className="MuiSlider-valueLabel css-1s3sa3n" aria-hidden="true">
                                                                    <span className="MuiSlider-valueLabelCircle">
                                                                        <span className="MuiSlider-valueLabelLabel">7</span>
                                                                    </span>
                                                                </span>
                                                            </span>
                                                        </span>
                                                    </div>
                                                    <div className="value-number">7</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button type="button" aria-expanded="false" className="accordion-button">
                                            <div className="title">Stats</div>
                                        </button>
                                    </h2>
                                    <div className="accordion-collapse collapse show">
                                        <div className="accordion-body">
                                            <div className="filterSlider">
                                                <div className="slider-title">
                                                    <span style={{ boxSizing: "border-box", display: "inline-block", overflow: "hidden", width: "16px", height: "16px", background: "none", opacity: "1", border: "0px", margin: "0px", padding: " 0px", position: "relative" }}>
                                                        <img alt="Slider speed" src="https://cdn.pegaxy.io/statics/marketplace/public/v3/images/icon/stat/speed.svg" decoding="async" data-nimg="fixed" style={{ position: "absolute", inset: "0px", boxSizing: "border-box", padding: "0px", border: "none", margin: "auto", display: "block", width: "0px", height: "0px", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%" }} />
                                                    </span>
                                                    <span className='ml-2'> Speed</span>
                                                </div>
                                                <div className="slider-value">
                                                    <div className="value-number">0</div>
                                                    <div className="value-slider">
                                                        <span label="true" className="MuiSlider-colorPrimary MuiSlider-sizeMedium MuiSlider-root MuiSlider-marked css-9cct2k">
                                                            <span className="MuiSlider-rail css-b04pc9">
                                                            </span>
                                                            <span className="MuiSlider-track css-1t2bqnt" style={{ left: "0%", width: "100%" }}></span>
                                                            <span data-index="0" className="MuiSlider-mark MuiSlider-markActive css-17lmo96" style={{ left: "0%" }}>
                                                            </span>
                                                            <span aria-hidden="true" data-index="0" className="MuiSlider-markLabel MuiSlider-markLabelActive css-sxo8tj" style={{ left: "0%" }}>0</span>
                                                            <span data-index="1" className="MuiSlider-mark MuiSlider-markActive css-17lmo96" style={{ left: "11.1111%" }}>
                                                            </span>
                                                            <span aria-hidden="true" data-index="1" className="MuiSlider-markLabel MuiSlider-markLabelActive css-sxo8tj" style={{ left: "11.1111%" }}>1</span>
                                                            <span data-index="2" className="MuiSlider-mark MuiSlider-markActive css-17lmo96" style={{ left: "22.2222%" }}></span>
                                                            <span aria-hidden="true" data-index="2" className="MuiSlider-markLabel MuiSlider-markLabelActive css-sxo8tj" style={{ left: "22.2222%" }}>2</span>
                                                            <span data-index="3" className="MuiSlider-mark MuiSlider-markActive css-17lmo96" style={{ left: "33.3333%" }}></span>
                                                            <span aria-hidden="true" data-index="3" className="MuiSlider-markLabel MuiSlider-markLabelActive css-sxo8tj" style={{ left: "33.3333%" }}>3</span>
                                                            <span data-index="4" className="MuiSlider-mark MuiSlider-markActive css-17lmo96" style={{ left: "44.4444%" }}></span>
                                                            <span aria-hidden="true" data-index="4" className="MuiSlider-markLabel MuiSlider-markLabelActive css-sxo8tj" style={{ left: "44.4444%" }}>4</span>
                                                            <span data-index="5" className="MuiSlider-mark MuiSlider-markActive css-17lmo96" style={{ left: "55.5556%" }}></span>
                                                            <span aria-hidden="true" data-index="5" className="MuiSlider-markLabel MuiSlider-markLabelActive css-sxo8tj" style={{ left: "55.5556%" }}>5</span>
                                                            <span data-index="6" className="MuiSlider-mark MuiSlider-markActive css-17lmo96" style={{ left: "66.6667%" }}></span>
                                                            <span aria-hidden="true" data-index="6" className="MuiSlider-markLabel MuiSlider-markLabelActive css-sxo8tj" style={{ left: "66.6667%" }}>6</span>
                                                            <span data-index="7" className="MuiSlider-mark MuiSlider-markActive css-17lmo96" style={{ left: "77.7778%" }}></span>
                                                            <span aria-hidden="true" data-index="7" className="MuiSlider-markLabel MuiSlider-markLabelActive css-sxo8tj" style={{ left: "77.7778%" }}>7</span>
                                                            <span data-index="8" className="MuiSlider-mark MuiSlider-markActive css-17lmo96" style={{ left: "88.8889%" }}></span>
                                                            <span aria-hidden="true" data-index="8" className="MuiSlider-markLabel MuiSlider-markLabelActive css-sxo8tj" style={{ left: "88.8889%" }}>8</span>
                                                            <span data-index="9" className="MuiSlider-mark MuiSlider-markActive css-17lmo96" style={{ left: "100%" }}></span>
                                                            <span aria-hidden="true" data-index="9" className="MuiSlider-markLabel MuiSlider-markLabelActive css-sxo8tj" style={{ left: "100%" }}>9</span>
                                                            <span data-index="0" className="MuiSlider-thumbColorPrimary MuiSlider-thumbSizeMedium MuiSlider-thumb css-7drnjp" style={{ left: "0%", pointerEvents: "none" }}>
                                                                <input aria-orientation="horizontal" aria-valuemax="9" aria-valuemin="0" type="range" min="0" max="9" step="1" data-index="0" aria-label="Minimum distance" aria-valuenow="0" aria-valuetext="0" value="0" style={{ border: "0px", clip: "rect(0px, 0px, 0px, 0px)", height: "100%", margin: "-1px", overflow: "hidden", padding: "0px", position: "absolute", whiteSpace: "nowrap", width: "100%", direction: "ltr" }} />
                                                                <span className="MuiSlider-valueLabel css-1s3sa3n" aria-hidden="true">
                                                                    <span className="MuiSlider-valueLabelCircle">
                                                                        <span className="MuiSlider-valueLabelLabel">0</span>
                                                                    </span>
                                                                </span>
                                                            </span>
                                                            <span data-index="1" className="MuiSlider-thumbColorPrimary MuiSlider-thumbSizeMedium MuiSlider-thumb css-7drnjp" style={{ left: "100%", pointerEvents: "none" }}>
                                                                <input aria-orientation="horizontal" aria-valuemax="9" aria-valuemin="0" type="range" min="0" max="9" step="1" data-index="1" aria-label="Minimum distance" aria-valuenow="9" aria-valuetext="9" value="9" style={{ border: "0px", clip: "rect(0px, 0px, 0px, 0px)", height: "100%", margin: "-1px", overflow: "hidden", padding: "0px", position: "absolute", whiteSpace: "nowrap", width: "100%", direction: "ltr" }} />
                                                                <span className="MuiSlider-valueLabel css-1s3sa3n" aria-hidden="true">
                                                                    <span className="MuiSlider-valueLabelCircle">
                                                                        <span className="MuiSlider-valueLabelLabel">9</span>
                                                                    </span>
                                                                </span>
                                                            </span>
                                                        </span>
                                                    </div>
                                                    <div className="value-number">9</div>
                                                </div>
                                            </div>
                                            <div className="filterSlider">
                                                <div className="slider-title">
                                                    <span style={{ boxSizing: "border-box", display: "inline-block", overflow: "hidden", width: "16px", height: "16px", background: "none", opacity: "1", border: "0px", margin: "0px", padding: " 0px", position: "relative" }}>
                                                        <img alt="Slider strength" src="https://cdn.pegaxy.io/statics/marketplace/public/v3/images/icon/stat/strength.svg" decoding="async" data-nimg="fixed" style={{ position: "absolute", inset: "0px", boxSizing: "border-box", padding: "0px", border: "none", margin: "auto", display: "block", width: "0px", height: "0px", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%" }} />
                                                    </span>
                                                    <span className='ml-2'>Strength</span>
                                                </div>
                                                <div className="slider-value">
                                                    <div className="value-number">0</div>
                                                    <div className="value-slider">
                                                        <span label="true" className="MuiSlider-colorPrimary MuiSlider-sizeMedium MuiSlider-root MuiSlider-marked css-9cct2k">
                                                            <span className="MuiSlider-rail css-b04pc9">
                                                            </span>
                                                            <span className="MuiSlider-track css-1t2bqnt" style={{ left: "0%", width: "100%" }}></span>
                                                            <span data-index="0" className="MuiSlider-mark MuiSlider-markActive css-17lmo96" style={{ left: "0%" }}>
                                                            </span>
                                                            <span aria-hidden="true" data-index="0" className="MuiSlider-markLabel MuiSlider-markLabelActive css-sxo8tj" style={{ left: "0%" }}>0</span>
                                                            <span data-index="1" className="MuiSlider-mark MuiSlider-markActive css-17lmo96" style={{ left: "11.1111%" }}>
                                                            </span>
                                                            <span aria-hidden="true" data-index="1" className="MuiSlider-markLabel MuiSlider-markLabelActive css-sxo8tj" style={{ left: "11.1111%" }}>1</span>
                                                            <span data-index="2" className="MuiSlider-mark MuiSlider-markActive css-17lmo96" style={{ left: "22.2222%" }}></span>
                                                            <span aria-hidden="true" data-index="2" className="MuiSlider-markLabel MuiSlider-markLabelActive css-sxo8tj" style={{ left: "22.2222%" }}>2</span>
                                                            <span data-index="3" className="MuiSlider-mark MuiSlider-markActive css-17lmo96" style={{ left: "33.3333%" }}></span>
                                                            <span aria-hidden="true" data-index="3" className="MuiSlider-markLabel MuiSlider-markLabelActive css-sxo8tj" style={{ left: "33.3333%" }}>3</span>
                                                            <span data-index="4" className="MuiSlider-mark MuiSlider-markActive css-17lmo96" style={{ left: "44.4444%" }}></span>
                                                            <span aria-hidden="true" data-index="4" className="MuiSlider-markLabel MuiSlider-markLabelActive css-sxo8tj" style={{ left: "44.4444%" }}>4</span>
                                                            <span data-index="5" className="MuiSlider-mark MuiSlider-markActive css-17lmo96" style={{ left: "55.5556%" }}></span>
                                                            <span aria-hidden="true" data-index="5" className="MuiSlider-markLabel MuiSlider-markLabelActive css-sxo8tj" style={{ left: "55.5556%" }}>5</span>
                                                            <span data-index="6" className="MuiSlider-mark MuiSlider-markActive css-17lmo96" style={{ left: "66.6667%" }}></span>
                                                            <span aria-hidden="true" data-index="6" className="MuiSlider-markLabel MuiSlider-markLabelActive css-sxo8tj" style={{ left: "66.6667%" }}>6</span>
                                                            <span data-index="7" className="MuiSlider-mark MuiSlider-markActive css-17lmo96" style={{ left: "77.7778%" }}></span>
                                                            <span aria-hidden="true" data-index="7" className="MuiSlider-markLabel MuiSlider-markLabelActive css-sxo8tj" style={{ left: "77.7778%" }}>7</span>
                                                            <span data-index="8" className="MuiSlider-mark MuiSlider-markActive css-17lmo96" style={{ left: "88.8889%" }}></span>
                                                            <span aria-hidden="true" data-index="8" className="MuiSlider-markLabel MuiSlider-markLabelActive css-sxo8tj" style={{ left: "88.8889%" }}>8</span>
                                                            <span data-index="9" className="MuiSlider-mark MuiSlider-markActive css-17lmo96" style={{ left: "100%" }}></span>
                                                            <span aria-hidden="true" data-index="9" className="MuiSlider-markLabel MuiSlider-markLabelActive css-sxo8tj" style={{ left: "100%" }}>9</span>
                                                            <span data-index="0" className="MuiSlider-thumbColorPrimary MuiSlider-thumbSizeMedium MuiSlider-thumb css-7drnjp" style={{ left: "0%", pointerEvents: "none" }}>
                                                                <input aria-orientation="horizontal" aria-valuemax="9" aria-valuemin="0" type="range" min="0" max="9" step="1" data-index="0" aria-label="Minimum distance" aria-valuenow="0" aria-valuetext="0" value="0" style={{ border: "0px", clip: "rect(0px, 0px, 0px, 0px)", height: "100%", margin: "-1px", overflow: "hidden", padding: "0px", position: "absolute", whiteSpace: "nowrap", width: "100%", direction: "ltr" }} />
                                                                <span className="MuiSlider-valueLabel css-1s3sa3n" aria-hidden="true">
                                                                    <span className="MuiSlider-valueLabelCircle">
                                                                        <span className="MuiSlider-valueLabelLabel">0</span>
                                                                    </span>
                                                                </span>
                                                            </span>
                                                            <span data-index="1" className="MuiSlider-thumbColorPrimary MuiSlider-thumbSizeMedium MuiSlider-thumb css-7drnjp" style={{ left: "100%", pointerEvents: "none" }}>
                                                                <input aria-orientation="horizontal" aria-valuemax="9" aria-valuemin="0" type="range" min="0" max="9" step="1" data-index="1" aria-label="Minimum distance" aria-valuenow="9" aria-valuetext="9" value="9" style={{ border: "0px", clip: "rect(0px, 0px, 0px, 0px)", height: "100%", margin: "-1px", overflow: "hidden", padding: "0px", position: "absolute", whiteSpace: "nowrap", width: "100%", direction: "ltr" }} />
                                                                <span className="MuiSlider-valueLabel css-1s3sa3n" aria-hidden="true">
                                                                    <span className="MuiSlider-valueLabelCircle">
                                                                        <span className="MuiSlider-valueLabelLabel">9</span>
                                                                    </span>
                                                                </span>
                                                            </span>
                                                        </span>
                                                    </div>
                                                    <div className="value-number">9</div>
                                                </div>
                                            </div>


                                            <div className="filterSlider">
                                                <div className="slider-title">
                                                    <span style={{ boxSizing: "border-box", display: "inline-block", overflow: "hidden", width: "16px", height: "16px", background: "none", opacity: "1", border: "0px", margin: "0px", padding: " 0px", position: "relative" }}>
                                                        <img alt="Slider lightning" src="https://cdn.pegaxy.io/statics/marketplace/public/v3/images/icon/stat/lightning.svg" decoding="async" data-nimg="fixed" style={{ position: "absolute", inset: "0px", boxSizing: "border-box", padding: "0px", border: "none", margin: "auto", display: "block", width: "0px", height: "0px", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%" }} />
                                                    </span>
                                                    <span className='ml-2'>Lightning</span>
                                                </div>
                                                <div className="slider-value">
                                                    <div className="value-number">0</div>
                                                    <div className="value-slider">
                                                        <span label="true" className="MuiSlider-colorPrimary MuiSlider-sizeMedium MuiSlider-root MuiSlider-marked css-9cct2k">
                                                            <span className="MuiSlider-rail css-b04pc9">
                                                            </span>
                                                            <span className="MuiSlider-track css-1t2bqnt" style={{ left: "0%", width: "100%" }}></span>
                                                            <span data-index="0" className="MuiSlider-mark MuiSlider-markActive css-17lmo96" style={{ left: "0%" }}>
                                                            </span>
                                                            <span aria-hidden="true" data-index="0" className="MuiSlider-markLabel MuiSlider-markLabelActive css-sxo8tj" style={{ left: "0%" }}>0</span>
                                                            <span data-index="1" className="MuiSlider-mark MuiSlider-markActive css-17lmo96" style={{ left: "11.1111%" }}>
                                                            </span>
                                                            <span aria-hidden="true" data-index="1" className="MuiSlider-markLabel MuiSlider-markLabelActive css-sxo8tj" style={{ left: "11.1111%" }}>1</span>
                                                            <span data-index="2" className="MuiSlider-mark MuiSlider-markActive css-17lmo96" style={{ left: "22.2222%" }}></span>
                                                            <span aria-hidden="true" data-index="2" className="MuiSlider-markLabel MuiSlider-markLabelActive css-sxo8tj" style={{ left: "22.2222%" }}>2</span>
                                                            <span data-index="3" className="MuiSlider-mark MuiSlider-markActive css-17lmo96" style={{ left: "33.3333%" }}></span>
                                                            <span aria-hidden="true" data-index="3" className="MuiSlider-markLabel MuiSlider-markLabelActive css-sxo8tj" style={{ left: "33.3333%" }}>3</span>
                                                            <span data-index="4" className="MuiSlider-mark MuiSlider-markActive css-17lmo96" style={{ left: "44.4444%" }}></span>
                                                            <span aria-hidden="true" data-index="4" className="MuiSlider-markLabel MuiSlider-markLabelActive css-sxo8tj" style={{ left: "44.4444%" }}>4</span>
                                                            <span data-index="5" className="MuiSlider-mark MuiSlider-markActive css-17lmo96" style={{ left: "55.5556%" }}></span>
                                                            <span aria-hidden="true" data-index="5" className="MuiSlider-markLabel MuiSlider-markLabelActive css-sxo8tj" style={{ left: "55.5556%" }}>5</span>
                                                            <span data-index="6" className="MuiSlider-mark MuiSlider-markActive css-17lmo96" style={{ left: "66.6667%" }}></span>
                                                            <span aria-hidden="true" data-index="6" className="MuiSlider-markLabel MuiSlider-markLabelActive css-sxo8tj" style={{ left: "66.6667%" }}>6</span>
                                                            <span data-index="7" className="MuiSlider-mark MuiSlider-markActive css-17lmo96" style={{ left: "77.7778%" }}></span>
                                                            <span aria-hidden="true" data-index="7" className="MuiSlider-markLabel MuiSlider-markLabelActive css-sxo8tj" style={{ left: "77.7778%" }}>7</span>
                                                            <span data-index="8" className="MuiSlider-mark MuiSlider-markActive css-17lmo96" style={{ left: "88.8889%" }}></span>
                                                            <span aria-hidden="true" data-index="8" className="MuiSlider-markLabel MuiSlider-markLabelActive css-sxo8tj" style={{ left: "88.8889%" }}>8</span>
                                                            <span data-index="9" className="MuiSlider-mark MuiSlider-markActive css-17lmo96" style={{ left: "100%" }}></span>
                                                            <span aria-hidden="true" data-index="9" className="MuiSlider-markLabel MuiSlider-markLabelActive css-sxo8tj" style={{ left: "100%" }}>9</span>
                                                            <span data-index="0" className="MuiSlider-thumbColorPrimary MuiSlider-thumbSizeMedium MuiSlider-thumb css-7drnjp" style={{ left: "0%", pointerEvents: "none" }}>
                                                                <input aria-orientation="horizontal" aria-valuemax="9" aria-valuemin="0" type="range" min="0" max="9" step="1" data-index="0" aria-label="Minimum distance" aria-valuenow="0" aria-valuetext="0" value="0" style={{ border: "0px", clip: "rect(0px, 0px, 0px, 0px)", height: "100%", margin: "-1px", overflow: "hidden", padding: "0px", position: "absolute", whiteSpace: "nowrap", width: "100%", direction: "ltr" }} />
                                                                <span className="MuiSlider-valueLabel css-1s3sa3n" aria-hidden="true">
                                                                    <span className="MuiSlider-valueLabelCircle">
                                                                        <span className="MuiSlider-valueLabelLabel">0</span>
                                                                    </span>
                                                                </span>
                                                            </span>
                                                            <span data-index="1" className="MuiSlider-thumbColorPrimary MuiSlider-thumbSizeMedium MuiSlider-thumb css-7drnjp" style={{ left: "100%", pointerEvents: "none" }}>
                                                                <input aria-orientation="horizontal" aria-valuemax="9" aria-valuemin="0" type="range" min="0" max="9" step="1" data-index="1" aria-label="Minimum distance" aria-valuenow="9" aria-valuetext="9" value="9" style={{ border: "0px", clip: "rect(0px, 0px, 0px, 0px)", height: "100%", margin: "-1px", overflow: "hidden", padding: "0px", position: "absolute", whiteSpace: "nowrap", width: "100%", direction: "ltr" }} />
                                                                <span className="MuiSlider-valueLabel css-1s3sa3n" aria-hidden="true">
                                                                    <span className="MuiSlider-valueLabelCircle">
                                                                        <span className="MuiSlider-valueLabelLabel">9</span>
                                                                    </span>
                                                                </span>
                                                            </span>
                                                        </span>
                                                    </div>
                                                    <div className="value-number">9</div>
                                                </div>
                                            </div>

                                            <div className="filterSlider">
                                                <div className="slider-title">
                                                    <span style={{ boxSizing: "border-box", display: "inline-block", overflow: "hidden", width: "16px", height: "16px", background: "none", opacity: "1", border: "0px", margin: "0px", padding: " 0px", position: "relative" }}>
                                                        <img alt="Slider fire" src="https://cdn.pegaxy.io/statics/marketplace/public/v3/images/icon/stat/fire.svg" decoding="async" data-nimg="fixed" style={{ position: "absolute", inset: "0px", boxSizing: "border-box", padding: "0px", border: "none", margin: "auto", display: "block", width: "0px", height: "0px", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%" }} />
                                                    </span>
                                                    <span className='ml-2'>Fire</span>
                                                </div>
                                                <div className="slider-value">
                                                    <div className="value-number">0</div>
                                                    <div className="value-slider">
                                                        <span label="true" className="MuiSlider-colorPrimary MuiSlider-sizeMedium MuiSlider-root MuiSlider-marked css-9cct2k">
                                                            <span className="MuiSlider-rail css-b04pc9">
                                                            </span>
                                                            <span className="MuiSlider-track css-1t2bqnt" style={{ left: "0%", width: "100%" }}></span>
                                                            <span data-index="0" className="MuiSlider-mark MuiSlider-markActive css-17lmo96" style={{ left: "0%" }}>
                                                            </span>
                                                            <span aria-hidden="true" data-index="0" className="MuiSlider-markLabel MuiSlider-markLabelActive css-sxo8tj" style={{ left: "0%" }}>0</span>
                                                            <span data-index="1" className="MuiSlider-mark MuiSlider-markActive css-17lmo96" style={{ left: "11.1111%" }}>
                                                            </span>
                                                            <span aria-hidden="true" data-index="1" className="MuiSlider-markLabel MuiSlider-markLabelActive css-sxo8tj" style={{ left: "11.1111%" }}>1</span>
                                                            <span data-index="2" className="MuiSlider-mark MuiSlider-markActive css-17lmo96" style={{ left: "22.2222%" }}></span>
                                                            <span aria-hidden="true" data-index="2" className="MuiSlider-markLabel MuiSlider-markLabelActive css-sxo8tj" style={{ left: "22.2222%" }}>2</span>
                                                            <span data-index="3" className="MuiSlider-mark MuiSlider-markActive css-17lmo96" style={{ left: "33.3333%" }}></span>
                                                            <span aria-hidden="true" data-index="3" className="MuiSlider-markLabel MuiSlider-markLabelActive css-sxo8tj" style={{ left: "33.3333%" }}>3</span>
                                                            <span data-index="4" className="MuiSlider-mark MuiSlider-markActive css-17lmo96" style={{ left: "44.4444%" }}></span>
                                                            <span aria-hidden="true" data-index="4" className="MuiSlider-markLabel MuiSlider-markLabelActive css-sxo8tj" style={{ left: "44.4444%" }}>4</span>
                                                            <span data-index="5" className="MuiSlider-mark MuiSlider-markActive css-17lmo96" style={{ left: "55.5556%" }}></span>
                                                            <span aria-hidden="true" data-index="5" className="MuiSlider-markLabel MuiSlider-markLabelActive css-sxo8tj" style={{ left: "55.5556%" }}>5</span>
                                                            <span data-index="6" className="MuiSlider-mark MuiSlider-markActive css-17lmo96" style={{ left: "66.6667%" }}></span>
                                                            <span aria-hidden="true" data-index="6" className="MuiSlider-markLabel MuiSlider-markLabelActive css-sxo8tj" style={{ left: "66.6667%" }}>6</span>
                                                            <span data-index="7" className="MuiSlider-mark MuiSlider-markActive css-17lmo96" style={{ left: "77.7778%" }}></span>
                                                            <span aria-hidden="true" data-index="7" className="MuiSlider-markLabel MuiSlider-markLabelActive css-sxo8tj" style={{ left: "77.7778%" }}>7</span>
                                                            <span data-index="8" className="MuiSlider-mark MuiSlider-markActive css-17lmo96" style={{ left: "88.8889%" }}></span>
                                                            <span aria-hidden="true" data-index="8" className="MuiSlider-markLabel MuiSlider-markLabelActive css-sxo8tj" style={{ left: "88.8889%" }}>8</span>
                                                            <span data-index="9" className="MuiSlider-mark MuiSlider-markActive css-17lmo96" style={{ left: "100%" }}></span>
                                                            <span aria-hidden="true" data-index="9" className="MuiSlider-markLabel MuiSlider-markLabelActive css-sxo8tj" style={{ left: "100%" }}>9</span>
                                                            <span data-index="0" className="MuiSlider-thumbColorPrimary MuiSlider-thumbSizeMedium MuiSlider-thumb css-7drnjp" style={{ left: "0%", pointerEvents: "none" }}>
                                                                <input aria-orientation="horizontal" aria-valuemax="9" aria-valuemin="0" type="range" min="0" max="9" step="1" data-index="0" aria-label="Minimum distance" aria-valuenow="0" aria-valuetext="0" value="0" style={{ border: "0px", clip: "rect(0px, 0px, 0px, 0px)", height: "100%", margin: "-1px", overflow: "hidden", padding: "0px", position: "absolute", whiteSpace: "nowrap", width: "100%", direction: "ltr" }} />
                                                                <span className="MuiSlider-valueLabel css-1s3sa3n" aria-hidden="true">
                                                                    <span className="MuiSlider-valueLabelCircle">
                                                                        <span className="MuiSlider-valueLabelLabel">0</span>
                                                                    </span>
                                                                </span>
                                                            </span>
                                                            <span data-index="1" className="MuiSlider-thumbColorPrimary MuiSlider-thumbSizeMedium MuiSlider-thumb css-7drnjp" style={{ left: "100%", pointerEvents: "none" }}>
                                                                <input aria-orientation="horizontal" aria-valuemax="9" aria-valuemin="0" type="range" min="0" max="9" step="1" data-index="1" aria-label="Minimum distance" aria-valuenow="9" aria-valuetext="9" value="9" style={{ border: "0px", clip: "rect(0px, 0px, 0px, 0px)", height: "100%", margin: "-1px", overflow: "hidden", padding: "0px", position: "absolute", whiteSpace: "nowrap", width: "100%", direction: "ltr" }} />
                                                                <span className="MuiSlider-valueLabel css-1s3sa3n" aria-hidden="true">
                                                                    <span className="MuiSlider-valueLabelCircle">
                                                                        <span className="MuiSlider-valueLabelLabel">9</span>
                                                                    </span>
                                                                </span>
                                                            </span>
                                                        </span>
                                                    </div>
                                                    <div className="value-number">9</div>
                                                </div>
                                            </div>

                                            <div className="filterSlider">
                                                <div className="slider-title">
                                                    <span style={{ boxSizing: "border-box", display: "inline-block", overflow: "hidden", width: "16px", height: "16px", background: "none", opacity: "1", border: "0px", margin: "0px", padding: " 0px", position: "relative" }}>
                                                        <img alt="Slider fire" src="https://cdn.pegaxy.io/statics/marketplace/public/v3/images/icon/stat/water.svg" decoding="async" data-nimg="fixed" style={{ position: "absolute", inset: "0px", boxSizing: "border-box", padding: "0px", border: "none", margin: "auto", display: "block", width: "0px", height: "0px", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%" }} />
                                                    </span>
                                                    <span className='ml-2'>Water</span>
                                                </div>
                                                <div className="slider-value">
                                                    <div className="value-number">0</div>
                                                    <div className="value-slider">
                                                        <span label="true" className="MuiSlider-colorPrimary MuiSlider-sizeMedium MuiSlider-root MuiSlider-marked css-9cct2k">
                                                            <span className="MuiSlider-rail css-b04pc9">
                                                            </span>
                                                            <span className="MuiSlider-track css-1t2bqnt" style={{ left: "0%", width: "100%" }}></span>
                                                            <span data-index="0" className="MuiSlider-mark MuiSlider-markActive css-17lmo96" style={{ left: "0%" }}>
                                                            </span>
                                                            <span aria-hidden="true" data-index="0" className="MuiSlider-markLabel MuiSlider-markLabelActive css-sxo8tj" style={{ left: "0%" }}>0</span>
                                                            <span data-index="1" className="MuiSlider-mark MuiSlider-markActive css-17lmo96" style={{ left: "11.1111%" }}>
                                                            </span>
                                                            <span aria-hidden="true" data-index="1" className="MuiSlider-markLabel MuiSlider-markLabelActive css-sxo8tj" style={{ left: "11.1111%" }}>1</span>
                                                            <span data-index="2" className="MuiSlider-mark MuiSlider-markActive css-17lmo96" style={{ left: "22.2222%" }}></span>
                                                            <span aria-hidden="true" data-index="2" className="MuiSlider-markLabel MuiSlider-markLabelActive css-sxo8tj" style={{ left: "22.2222%" }}>2</span>
                                                            <span data-index="3" className="MuiSlider-mark MuiSlider-markActive css-17lmo96" style={{ left: "33.3333%" }}></span>
                                                            <span aria-hidden="true" data-index="3" className="MuiSlider-markLabel MuiSlider-markLabelActive css-sxo8tj" style={{ left: "33.3333%" }}>3</span>
                                                            <span data-index="4" className="MuiSlider-mark MuiSlider-markActive css-17lmo96" style={{ left: "44.4444%" }}></span>
                                                            <span aria-hidden="true" data-index="4" className="MuiSlider-markLabel MuiSlider-markLabelActive css-sxo8tj" style={{ left: "44.4444%" }}>4</span>
                                                            <span data-index="5" className="MuiSlider-mark MuiSlider-markActive css-17lmo96" style={{ left: "55.5556%" }}></span>
                                                            <span aria-hidden="true" data-index="5" className="MuiSlider-markLabel MuiSlider-markLabelActive css-sxo8tj" style={{ left: "55.5556%" }}>5</span>
                                                            <span data-index="6" className="MuiSlider-mark MuiSlider-markActive css-17lmo96" style={{ left: "66.6667%" }}></span>
                                                            <span aria-hidden="true" data-index="6" className="MuiSlider-markLabel MuiSlider-markLabelActive css-sxo8tj" style={{ left: "66.6667%" }}>6</span>
                                                            <span data-index="7" className="MuiSlider-mark MuiSlider-markActive css-17lmo96" style={{ left: "77.7778%" }}></span>
                                                            <span aria-hidden="true" data-index="7" className="MuiSlider-markLabel MuiSlider-markLabelActive css-sxo8tj" style={{ left: "77.7778%" }}>7</span>
                                                            <span data-index="8" className="MuiSlider-mark MuiSlider-markActive css-17lmo96" style={{ left: "88.8889%" }}></span>
                                                            <span aria-hidden="true" data-index="8" className="MuiSlider-markLabel MuiSlider-markLabelActive css-sxo8tj" style={{ left: "88.8889%" }}>8</span>
                                                            <span data-index="9" className="MuiSlider-mark MuiSlider-markActive css-17lmo96" style={{ left: "100%" }}></span>
                                                            <span aria-hidden="true" data-index="9" className="MuiSlider-markLabel MuiSlider-markLabelActive css-sxo8tj" style={{ left: "100%" }}>9</span>
                                                            <span data-index="0" className="MuiSlider-thumbColorPrimary MuiSlider-thumbSizeMedium MuiSlider-thumb css-7drnjp" style={{ left: "0%", pointerEvents: "none" }}>
                                                                <input aria-orientation="horizontal" aria-valuemax="9" aria-valuemin="0" type="range" min="0" max="9" step="1" data-index="0" aria-label="Minimum distance" aria-valuenow="0" aria-valuetext="0" value="0" style={{ border: "0px", clip: "rect(0px, 0px, 0px, 0px)", height: "100%", margin: "-1px", overflow: "hidden", padding: "0px", position: "absolute", whiteSpace: "nowrap", width: "100%", direction: "ltr" }} />
                                                                <span className="MuiSlider-valueLabel css-1s3sa3n" aria-hidden="true">
                                                                    <span className="MuiSlider-valueLabelCircle">
                                                                        <span className="MuiSlider-valueLabelLabel">0</span>
                                                                    </span>
                                                                </span>
                                                            </span>
                                                            <span data-index="1" className="MuiSlider-thumbColorPrimary MuiSlider-thumbSizeMedium MuiSlider-thumb css-7drnjp" style={{ left: "100%", pointerEvents: "none" }}>
                                                                <input aria-orientation="horizontal" aria-valuemax="9" aria-valuemin="0" type="range" min="0" max="9" step="1" data-index="1" aria-label="Minimum distance" aria-valuenow="9" aria-valuetext="9" value="9" style={{ border: "0px", clip: "rect(0px, 0px, 0px, 0px)", height: "100%", margin: "-1px", overflow: "hidden", padding: "0px", position: "absolute", whiteSpace: "nowrap", width: "100%", direction: "ltr" }} />
                                                                <span className="MuiSlider-valueLabel css-1s3sa3n" aria-hidden="true">
                                                                    <span className="MuiSlider-valueLabelCircle">
                                                                        <span className="MuiSlider-valueLabelLabel">9</span>
                                                                    </span>
                                                                </span>
                                                            </span>
                                                        </span>
                                                    </div>
                                                    <div className="value-number">9</div>
                                                </div>
                                            </div>

                                            <div className="filterSlider">
                                                <div className="slider-title">
                                                    <span style={{ boxSizing: "border-box", display: "inline-block", overflow: "hidden", width: "16px", height: "16px", background: "none", opacity: "1", border: "0px", margin: "0px", padding: " 0px", position: "relative" }}>
                                                        <img alt="Slider fire" src="https://cdn.pegaxy.io/statics/marketplace/public/v3/images/icon/stat/wind.svg" decoding="async" data-nimg="fixed" style={{ position: "absolute", inset: "0px", boxSizing: "border-box", padding: "0px", border: "none", margin: "auto", display: "block", width: "0px", height: "0px", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%" }} />
                                                    </span>
                                                    <span className='ml-2'>Wind</span>
                                                </div>
                                                <div className="slider-value">
                                                    <div className="value-number">0</div>
                                                    <div className="value-slider">
                                                        <span label="true" className="MuiSlider-colorPrimary MuiSlider-sizeMedium MuiSlider-root MuiSlider-marked css-9cct2k">
                                                            <span className="MuiSlider-rail css-b04pc9">
                                                            </span>
                                                            <span className="MuiSlider-track css-1t2bqnt" style={{ left: "0%", width: "100%" }}></span>
                                                            <span data-index="0" className="MuiSlider-mark MuiSlider-markActive css-17lmo96" style={{ left: "0%" }}>
                                                            </span>
                                                            <span aria-hidden="true" data-index="0" className="MuiSlider-markLabel MuiSlider-markLabelActive css-sxo8tj" style={{ left: "0%" }}>0</span>
                                                            <span data-index="1" className="MuiSlider-mark MuiSlider-markActive css-17lmo96" style={{ left: "11.1111%" }}>
                                                            </span>
                                                            <span aria-hidden="true" data-index="1" className="MuiSlider-markLabel MuiSlider-markLabelActive css-sxo8tj" style={{ left: "11.1111%" }}>1</span>
                                                            <span data-index="2" className="MuiSlider-mark MuiSlider-markActive css-17lmo96" style={{ left: "22.2222%" }}></span>
                                                            <span aria-hidden="true" data-index="2" className="MuiSlider-markLabel MuiSlider-markLabelActive css-sxo8tj" style={{ left: "22.2222%" }}>2</span>
                                                            <span data-index="3" className="MuiSlider-mark MuiSlider-markActive css-17lmo96" style={{ left: "33.3333%" }}></span>
                                                            <span aria-hidden="true" data-index="3" className="MuiSlider-markLabel MuiSlider-markLabelActive css-sxo8tj" style={{ left: "33.3333%" }}>3</span>
                                                            <span data-index="4" className="MuiSlider-mark MuiSlider-markActive css-17lmo96" style={{ left: "44.4444%" }}></span>
                                                            <span aria-hidden="true" data-index="4" className="MuiSlider-markLabel MuiSlider-markLabelActive css-sxo8tj" style={{ left: "44.4444%" }}>4</span>
                                                            <span data-index="5" className="MuiSlider-mark MuiSlider-markActive css-17lmo96" style={{ left: "55.5556%" }}></span>
                                                            <span aria-hidden="true" data-index="5" className="MuiSlider-markLabel MuiSlider-markLabelActive css-sxo8tj" style={{ left: "55.5556%" }}>5</span>
                                                            <span data-index="6" className="MuiSlider-mark MuiSlider-markActive css-17lmo96" style={{ left: "66.6667%" }}></span>
                                                            <span aria-hidden="true" data-index="6" className="MuiSlider-markLabel MuiSlider-markLabelActive css-sxo8tj" style={{ left: "66.6667%" }}>6</span>
                                                            <span data-index="7" className="MuiSlider-mark MuiSlider-markActive css-17lmo96" style={{ left: "77.7778%" }}></span>
                                                            <span aria-hidden="true" data-index="7" className="MuiSlider-markLabel MuiSlider-markLabelActive css-sxo8tj" style={{ left: "77.7778%" }}>7</span>
                                                            <span data-index="8" className="MuiSlider-mark MuiSlider-markActive css-17lmo96" style={{ left: "88.8889%" }}></span>
                                                            <span aria-hidden="true" data-index="8" className="MuiSlider-markLabel MuiSlider-markLabelActive css-sxo8tj" style={{ left: "88.8889%" }}>8</span>
                                                            <span data-index="9" className="MuiSlider-mark MuiSlider-markActive css-17lmo96" style={{ left: "100%" }}></span>
                                                            <span aria-hidden="true" data-index="9" className="MuiSlider-markLabel MuiSlider-markLabelActive css-sxo8tj" style={{ left: "100%" }}>9</span>
                                                            <span data-index="0" className="MuiSlider-thumbColorPrimary MuiSlider-thumbSizeMedium MuiSlider-thumb css-7drnjp" style={{ left: "0%", pointerEvents: "none" }}>
                                                                <input aria-orientation="horizontal" aria-valuemax="9" aria-valuemin="0" type="range" min="0" max="9" step="1" data-index="0" aria-label="Minimum distance" aria-valuenow="0" aria-valuetext="0" value="0" style={{ border: "0px", clip: "rect(0px, 0px, 0px, 0px)", height: "100%", margin: "-1px", overflow: "hidden", padding: "0px", position: "absolute", whiteSpace: "nowrap", width: "100%", direction: "ltr" }} />
                                                                <span className="MuiSlider-valueLabel css-1s3sa3n" aria-hidden="true">
                                                                    <span className="MuiSlider-valueLabelCircle">
                                                                        <span className="MuiSlider-valueLabelLabel">0</span>
                                                                    </span>
                                                                </span>
                                                            </span>
                                                            <span data-index="1" className="MuiSlider-thumbColorPrimary MuiSlider-thumbSizeMedium MuiSlider-thumb css-7drnjp" style={{ left: "100%", pointerEvents: "none" }}>
                                                                <input aria-orientation="horizontal" aria-valuemax="9" aria-valuemin="0" type="range" min="0" max="9" step="1" data-index="1" aria-label="Minimum distance" aria-valuenow="9" aria-valuetext="9" value="9" style={{ border: "0px", clip: "rect(0px, 0px, 0px, 0px)", height: "100%", margin: "-1px", overflow: "hidden", padding: "0px", position: "absolute", whiteSpace: "nowrap", width: "100%", direction: "ltr" }} />
                                                                <span className="MuiSlider-valueLabel css-1s3sa3n" aria-hidden="true">
                                                                    <span className="MuiSlider-valueLabelCircle">
                                                                        <span className="MuiSlider-valueLabelLabel">9</span>
                                                                    </span>
                                                                </span>
                                                            </span>
                                                        </span>
                                                    </div>
                                                    <div className="value-number">9</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button type="button" aria-expanded="false" className="accordion-button">
                                            <div className="title">Others</div>
                                            <div className="badge">1</div>
                                        </button>
                                    </h2>
                                    <div className="accordion-collapse collapse show">
                                        <div className="accordion-body">
                                            <div className="filterCheck">
                                                <div className="item-filter">
                                                    <label className="formCheck">For sale<input type="checkbox" />
                                                        <span className="checkmark">
                                                        </span>
                                                    </label>
                                                    <span>
                                                    </span>
                                                </div>
                                                <div className="item-filter">
                                                    <label className="formCheck">Not for sale<input type="checkbox" />
                                                        <span className="checkmark">
                                                        </span>
                                                    </label>
                                                    <span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Offcanvas.Body>
                </Offcanvas>


        </div>
    )
}
