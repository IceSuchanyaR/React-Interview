import React from 'react';


class TestResume extends React.Component {
  render() {
    let { pic } = this.props
    return (
      <div className="ice">
        <header className="w3-container w3-theme w3-padding" id="myHeader">
          <div class="row">
            <div class="col-lg-3">
              <img src={pic} className="App-logo" alt="logo" />
            </div>
            <div class="col-lg-9">
              <div class="row ">
                <div class="col-lg-10 bgg box" >
                  <div className="Text">
                    <h1>SAMUEL ANDERSON</h1>
                  </div>
                </div>
                <div class="col-lg-2 box3" >
                <div class="w3-col w3-center w3-container m2 w3-xlarge ">  <i className="fa fa-download"/></div> 
               
                </div>
                <div class="col-lg-10 box2">
                  <div className="w3-center Text">
                    <div className="Text">
                      <h2>THE EXPERIENCE UI/UX</h2>
                    </div>
                  </div>
                </div>
                <div class="col-lg-2 box3" >
                <div class="w3-col w3-center w3-container m2 w3-xlarge "> <i className="fab fa-behance "/></div> 
                </div>
                <div class="w3-row w3-xlarge col-lg-12">
                  <div class="w3-col w3-center w3-container m2 w3-teal"><i class="fa fa-home" /><p>HOME</p></div>
                  <div class="w3-col w3-center w3-container m2 w3-blue"><i class="fa fa-graduation-cap" /><p>RESUME</p></div>
                  <div class="w3-col w3-center w3-container m2 w3-purple"><i class="fa fa-book" /><p>PORTFOLIO</p></div>
                  <div class="w3-col w3-center w3-container m2 w3-orange"><i class="fa fa-map-marker" /><p>CONTATCS</p></div>
                  <div class="w3-col w3-center w3-container m2 w3-red"><i class="fa fa-headphones" /><p>FEEDBACK</p></div>
                  <div class="w3-col w3-center w3-container m2 w3-yellow"><i class="fa fa-pencil" /><p>BLOG</p></div>
                </div>
              </div>
            </div>
          </div>


        </header>
        <div className="row no-gutters">
          <div className="col-md-8">
            <div className="row no-gutters">
              <div className="d-flex flex-fill flex-column  bd-highlight  ">
                <div className="row no-gutters">
                  <div className="col-md-12">
                    <br></br>
                    <h2 className="Text padText">GRIDUS RESUME HTML TEMPLATE</h2>
                    <h6 className="Text textRed padText">PERFECT FOR CV/RESUME OR PORTFOLIO WEBSITE</h6>
                  </div>
                </div>
                <br />
                <div className="row no-gutters">


                  <div className="col-md-4 1">
                    <div className="row">
                      <div className="col-md-3 "><i className="far fa-clock iconBlue" /></div>
                      <div className="col-md-9">
                        <h4 className="Text">MODERN</h4>
                        <p className="Text">On small screens (max 600 pixels) it automatically resizes to full screen width. </p></div>
                    </div>
                  </div>
                  <div className="col-md-4 2">
                    <div className="row">
                      <div className="col-md-3 "><i className="fas fa-chart-pie iconBlue" /></div>
                      <div className="col-md-9">
                        <h4 className="Text">SIMPLE CV</h4>
                        <p className="Text">On small screens (max 600 pixels) it automatically resizes to full screen width. </p></div>
                    </div>
                  </div>
                  <div className="col-md-4 3">
                    <div className="row">
                      <div className="col-md-3 ">  <i class="fa fa-gear iconBlue" /></div>
                      <div className="col-md-9">
                        <h4 className="Text">RESPONSIVE</h4>
                        <p className="Text">On small  resizes to full screen width.  </p></div>
                    </div>
                  </div>

                </div>
              </div>
            </div>


          </div>
          <div className="col-md-4 " >

            <div className="row no-gutters">
              <div className="col-md-12 ">
                <div className="d-flex padding-around flex-column w3-grey" >
                  <br></br>
                  <h3 className="pText">PERSONAL INFO</h3>
                  <div class="row ">
                    <div className="app-left padText">
                      <p class="font-weight-bold padText">NAME  :  </p>
                      <p class="font-weight-bold padText" >BIRTH DATE   : </p>
                      <p class="font-weight-bold padText">ADDRESS      : </p>
                      <p class="font-weight-bold padText">PHONE :   </p>
                      <p class="font-weight-bold padText">EMAILL : </p>
                    </div>
                    <div className="app-right Text padText">
                      <p> Ice Suchanya </p>
                      <p> 10/10/39</p>
                      <p> 166/16 , Chalongkrung Road ,LadKrabang,Bangkok  10520</p>
                      <p>096-7104026 </p>
                      <p> suchanya.ro@gmail.com</p>
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
}
export default TestResume;
