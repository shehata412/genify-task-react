//import logo from './logo.svg';
//import './App.css';
import './custom.css';
import {React, useState, useEffect} from 'react';



function App() {
  const mainarray = [{"currency": "EGP", "country":"Egypt", "sign":"£"}, {"currency": "USD", "country":"USA", "sign":"$"}]
  const [allValues, setAllvalues] = useState({"currency": "EGP", "country": "Egypt", "sign":"£"});
  const [toggles, setToggles] = useState({"category": false, "merchantlogo": false, "merchantwebsite": false, "cleandesc": false, "co": false})


  function currencyChange (curr) {
    const filteredarray = mainarray.filter((item)=>item.currency===curr)
    setAllvalues({currency: filteredarray[0].currency, country: filteredarray[0].country, sign: filteredarray[0].sign})

    console.log(filteredarray[0]);
  }
  const countryChange = (coun)=>{
    const filteredarray = mainarray.filter((item)=>item.country===coun)
    setAllvalues({currency: filteredarray[0].currency, country: filteredarray[0].country, sign: filteredarray[0].sign})

    console.log(filteredarray[0]);
  }

  const toggleChange = (change)=>{
    console.log(change)
  }

  return (
    <div className="content">
        <div className="container">
            <h1>Transaction Categorization API</h1>
            <div className="form-wrapper">
                    <div className="custom-grid">
                        <div className="fields">
                            <div className="form-group">
                                <label for="query">query</label>
                                <input type="text" name="query" id="query" autocomplete="off" placeholder={ allValues.sign + ": Starbucks 25"}/>
                            </div>

                            <div className="form-group">
                                <label for="amount">amount</label>
                                <input type="text" name="amount" id="amount" autocomplete="off" placeholder={ allValues.sign + ": Starbucks 25"}/>
                            </div>

                                <div className="form-group custom-select">
                                <div>
                                    <input type="hidden" name="currency" value="" />
                                    <select className="open-select" name="currency" id="currency" value = {allValues.currency} onChange={(e)=>currencyChange(e.target.value)}  >
                                    {mainarray.map((item)=><option value={item.currency}>Currency: {item.currency}</option>)}
                                    
                                    </select>
                                </div>
                            </div>

                            <div className="form-group custom-select">
                                <div>
                                    <input type="hidden" name="country" value="" />
                                    <select className="open-select" name="country" id="country"  value = {allValues.country} onChange={(e)=>countryChange(e.target.value)} >
                                    {mainarray.map((item)=><option value={item.country}>Country: {item.country}</option>)}
                                    
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="radio-buttons">

                            <div className="pretty-check-outer">
                                <div className="pretty-check">
                                    <input type="checkbox" name="category" id="check-1" onChange={(e)=>toggleChange(e.target.value)}/>
                                    <label for="check-1" className="pretty"></label>
                                    <label for="check-1">category</label>
                                </div>
                            </div>

                            <div className="pretty-check-outer">
                                <div className="pretty-check">
                                    <input type="checkbox" name="logo" id="check-2"/>
                                    <label for="check-2" className="pretty"></label>
                                    <label for="check-2">Merchant Logo</label>
                                </div>
                            </div>

                            <div className="pretty-check-outer">
                                <div className="pretty-check">
                                    <input type="checkbox" name="merchant_website" id="check-3"/>
                                    <label for="check-3" className="pretty"></label>
                                    <label for="check-3">Merchant Website</label>
                                </div>
                            </div>

                            <div className="pretty-check-outer">
                                <div className="pretty-check">
                                    <input type="checkbox" name="description" id="check-4"/>
                                    <label for="check-4" className="pretty"></label>
                                    <label for="check-4">clean description</label>
                                </div>
                            </div>

                            <div className="pretty-check-outer">
                                <div className="pretty-check">
                                    <input type="checkbox" name="footprint" id="check-5"/>
                                    <label for="check-5" className="pretty"></label>
                                    <label for="check-5">CO2 Footprint</label>
                                </div>
                            </div>
                        </div>
                        <div className="terminal">
                            <div className="terminal-wrapper">

                                <div className="col-md-6">
                                    <div className="fakeMenu">
                                        <div className="fakeButtons fakeClose"></div>
                                        <div className="fakeButtons fakeMinimize"></div>
                                        <div className="fakeButtons fakeZoom"></div>
                                    </div>
                                    <div className="fakeScreenDemo">
                                        <div className="terminal-input-request">
                                            <code>
                                                <div className="fragment">
                                                    <span styles="color:#79e7f4">&#123;</span>
                                                    <br/>
                                                </div>
                                                <div className="container-tab">
                                                    <div className="fragment">
                                                        <span styles="color:#79e7f4">"Status":</span>
                                                        <span styles="color:#b0ec6d"> ""Online"
                        </span>
                                                        <br/>
                                                    </div>
                                                    <div className="fragment">
                                                        <span styles="color:#79e7f4">"Category":</span>
                                                        <span styles="color:#b0ec6d">"
                                                            ""Category one"
                        </span>
                                                        <br/>
                                                    </div>
                                                    <div className="fragment">
                                                        <span styles="color:#79e7f4">"Carbon Footprint":</span>
                                                        <span styles="color:#b0ec6d">"
                                                            "Footprint here"
                        </span>
                                                        <br/>
                                                    </div>
                                                    <div className="fragment">
                                                        <span styles="color:#79e7f4">"Logo":</span>
                                                        <span styles="color:#b0ec6d">"Logo comes here"</span>
                                                        <br/>
                                                    </div>
                                                    <div className="fragment">
                                                        <span styles="color:#79e7f4">"Clean Description":</span>
                                                        <span styles="color:#b0ec6d">
                                                            "this is the description"
                        </span>
                                                        <br/>
                                                    </div>
                                                </div>
                                                <div className="fragment">
                                                    <span styles="color:#79e7f4" data-v-5d621296="true" data-v-0bd6bc83="true">&#125;</span>
                                                </div>
                                            </code>
                                        </div>
                                    </div>
                                    <div className="fakeScreenFooter">
                                        <div className="screenLanguage">json</div>

                                        <div className="twoToneCenter ">
                                            <button type="submit" className="twoToneButton gr-hover-y disabled">Run</button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
            </div>
        </div>
    </div>
  );
}

export default App;
