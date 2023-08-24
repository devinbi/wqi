import React,{useState , useEffect} from 'react';
import axios from 'axios';
import "../../NavigateBar.css";
import { FiLogOut } from 'react-icons/fi';
import { AiOutlineBars } from 'react-icons/ai';
import Swal from 'sweetalert2'
import './AddAllocating.css';


function AddAllocating(){ 

  const [isSidebarOpen, setIsSidebarOpen] = useState(false); 
  const handleSidebarToggle = () => { setIsSidebarOpen(!isSidebarOpen); };

  const [pHLevel, setPHLevel] = useState('');
  const [turbidity, setTurbidity] = useState('');
  const [nitrateLevel, setNitrateLevel] = useState('');
  const [chlorineConcentration, setChlorineConcentration] = useState('');
  const [dissolvedOxygen, setDissolvedOxygen] = useState('');
  const [result, setResult] = useState(0);
  const [result1, setResult1] = useState(0);


  
   

  function sendData(e){
      e.preventDefault();

     




    
      const newAllocating = {
        pHLevel,
        turbidity,
        nitrateLevel,
        chlorineConcentration,
        dissolvedOxygen,
        result,
        result1
      }
      
  


    };


return(

   
    <div class="wrapper">
        
        <nav id="sidebar" className={isSidebarOpen ? "active" : ""}>
            <div class="sidebar-header">
                <h3></h3>
                <div class="logo">
                {/* <img src={require('./images/logo1.png')} alt="logo" /> */}
                <img src="/images/logo1.png" alt="logo"/>
                
                </div>
            </div>

            <ul class="list-unstyled components">
                {/* <p>SIDE NAVIGATE BAR</p> */}
                <li >
                <a href="#pageSubmenu2" data-toggle="collapse" aria-expanded="false" >Water Quality Index </a>
                    <ul class="collapse list-unstyled" id="pageSubmenu2">
                   </ul>
                </li>
                <li>
                    <a href="#pageSubmenu2" data-toggle="collapse" aria-expanded="false" >Water Quality Index</a>
                    <ul class="collapse list-unstyled" id="pageSubmenu2">
                        
                    </ul>
                </li>
                <li>
                    <a href="#pageSubmenu2" data-toggle="collapse" aria-expanded="false" >Water Quality Index</a>
                    <ul class="collapse list-unstyled" id="pageSubmenu2">
                        
                    </ul>
                </li>
                <li>
                    <a href="#pageSubmenu2" data-toggle="collapse" aria-expanded="false" >Water Quality Index</a>
                    <ul class="collapse list-unstyled" id="pageSubmenu2">
                        
                    </ul>
                </li>
            </ul>
            
            
            <button class="logout-button"><FiLogOut />Logout</button>


        </nav>

        
        <div id="content">
        <div class="see-more-icon">
          <span onClick={handleSidebarToggle}>
            {' '}
            <AiOutlineBars />
          </span>
        </div>

        <div class="page-component-body p-5 " style={{ backgroundColor: '#B6D0E2' }}>
          <div class="container input-main-form-emp pt-3 border border-success" style={{ backgroundColor: 'white' }}>
            <div class="container border-top ">
              <div
                class="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-uppercase headerNameFont"
                style={{ backgroundColor: '#01013d', color: 'white' }}
              >
                <h3 className="topic text-center mt-3 mb-3">
                  water quality prediction using physical parameters of water
                </h3>
              </div>
            </div>

            <form class="form" onSubmit={sendData}>
              <div class="form-container">
                <div class="input-fields">
                  <div class="form pt-5 mb-2">
                  <h6>Input Parameters</h6>
                  <div class = "hr">
                     <hr></hr>
                     </div>
                    <label for="pHLevel">pH Level:</label>
                    <input
                      type="text"
                      class="form-control formInput"
                      id="pHLevel"
                      placeholder="Enter pH Level"
                      onChange={(e) => {
                        setPHLevel(e.target.value);
                      }}
                    />
                  </div>

                  <div class="form mb-2">
                    <label for="turbidity">Turbidity:</label>
                    <input
                      type="text"
                      class="form-control formInput"
                      id="turbidity"
                      placeholder="Enter Turbidity"
                      onChange={(e) => {
                        setTurbidity(e.target.value);
                      }}
                    />
                  </div>

                  <div class="form mb-2">
                    <label for="nitrateLevel">Nitrate Level:</label>
                    <input
                      type="text"
                      class="form-control formInput"
                      id="nitrateLevel"
                      placeholder="Enter Nitrate Level"
                      onChange={(e) => {
                        setNitrateLevel(e.target.value);
                      }}
                    />
                  </div>

                  <div class="form mb-2">
                    <label for="chlorineConcentration">Chlorine Concentration:</label>
                    <input
                      type="text"
                      class="form-control formInput"
                      id="chlorineConcentration"
                      placeholder="Enter Chlorine Concentration"
                      onChange={(e) => {
                        setChlorineConcentration(e.target.value);
                      }}
                    />
                  </div>

                  <div class="form mb-2">
                    <label for="dissolvedOxygen">Dissolved Oxygen:</label>
                    <input
                      type="text"
                      class="form-control formInput"
                      id="dissolvedOxygen"
                      placeholder="Enter Dissolved Oxygen"
                      onChange={(e) => {
                        setDissolvedOxygen(e.target.value);
                      }}
                    />
                  </div>
                </div>

                
                <div class="results">
                  <br></br>
                  <br></br>
                  <h6>Results</h6>
                  <div class = "hr">
                     <hr></hr>
                     </div>

                  <div class="result-box">
                    <label for="totalamount">Water quality index</label>
                    <input type="text" class="form-control" id="net_weight" disabled value={result} />
                  </div>
                  <br></br>
                  <div class="result-box">
                    <label for="totalamount">Water quality</label>
                    <input type="text" class="form-control" id="net_weight" disabled value={result1} />
                  </div>
                </div>
              </div>
              <br></br>

              <div className="col py-3 text-center">
                <button type="submit" class="btn-wk1">
                  Show results
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>


            

            
        </div>
        
              
    )

}


                        export default AddAllocating;
  
  
