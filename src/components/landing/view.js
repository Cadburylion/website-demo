import React from 'react';
import {Link} from 'react-router-dom';
import ScrollableAnchor from 'react-scrollable-anchor';

const View = (props) => {
  return (
    <React.Fragment>
      <div className="container bluebg"></div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-12 col-md-6 leftside">
            <div className="hidden-xs hidden-sm hidden-md col-lg-3"></div>
            <div className="col-xs-12 col-lg-9 leftsideimg">
              <div className="row">
                <div className="container-fluid navbar-fixed-top">
                  <div className="col-xs-12 col-md-6">
                    <div className="hidden-xs hidden-sm hidden-md col-lg-3"></div>
                    <div className="col-xs-12 col-lg-9" style={{backgroundColor:'#97BDDC', height:'30px', textAlign:'center', paddingTop: '2px'}}>
                      <div style={{display: 'flex', flexFlow: 'row nowrap', alignItems: 'center', justifyContent: 'space-around', fontSize:'12px',fontFamily:'Muli sans-serif'}}>
                        <a href='#services' style={{color: '#0C63AE', fontSize: '18px', fontFamily: 'Muli, sans-serif', marginBottom: '10px', textDecoration: 'none'}}>Services</a>
                        <a href='#technologies' style={{color: '#0C63AE', fontSize: '18px', fontFamily: 'Muli, sans-serif', marginBottom: '10px', textDecoration: 'none'}}>Technologies</a>
                        <a href='#customers' style={{color: '#0C63AE', fontSize: '18px', fontFamily: 'Muli, sans-serif', marginBottom: '10px', textDecoration: 'none'}}>Customers</a>
                        <a href='#team' style={{color: '#0C63AE', fontSize: '18px', fontFamily: 'Muli, sans-serif', marginBottom: '10px', textDecoration: 'none'}}>Team</a>
                        <Link to='/blog' style={{color: '#0C63AE', fontSize: '18px', fontFamily: 'Muli, sans-serif', marginBottom: '10px', textDecoration: 'none'}}>Blog</Link>
                      </div>
                    </div>
                  </div>
                  <div className="hidden-xs col-md-6"></div>
                </div>
                <div className="col-xs-1"></div>
                <div className="col-xs-10 logo">
                  <img src={require('../../static/images/Lenalysis_Logo.png')} className="img-responsive len-logo" alt="sample Logo" style={{margin:'48px auto'}} />
                  <h1>Results-oriented software and cloud consulting services</h1>
                  <h2>Lenalysis provides innovative consulting services to enterprises and start-ups.</h2>
                  <p className="justify-cen">{`Lenalysis is a software consultancy specializing in custom software development, cloud, system integration, agile, and DevOps." +
                  "Lenalysis can provide expert services others can't because of our background in large-scale enterprise software, actuarial, accounting, and financial systems engineering." +
                  "If you are looking for help with a new complex solution, in optimizing your software product delivery, or in defining your architectural vision and strategy, Lenalysis can help.`}
                  </p>
                </div>
                <div className="col-xs-1"></div>
              </div>
              <div className="row">
                <div className="col-xs-5"></div>
                <div className="col-xs-5">
                  <ul className="icons">
                    <li><a href="mailto:kelly@lenalysis.com"><img src="./static/images/icon-email.png" alt="map icon" className="img-responsive" /></a></li>
                  </ul>
                </div>

              </div>
            </div>
          </div>


          <div className="col-xs-12 col-md-6 col-md-offset-6 rightside">
          
            <div className="row">
              <div className="col-xs-12 col-lg-9">
                <div className="section">Services</div>
                <img src="./static/images/idea.jpg" alt="Chess Pieces" className="img-responsive"  />
              </div>
              <div className="hidden-xs hidden-sm hidden-md col-lg-3"></div>
            </div>
            <div className="row" style={{height:'10px'}}>
              <div className="col-xs-12 col-lg-9" style={{backgroundColor:'#f9b721', marginBottom: '-8px', height: '10px'}}>
                <img src="./static/images/yellow-dot.png" alt="dot" style={{marginTop:'-8px', float:'left', marginLeft:'-13px'}} className='dot' />
                <img src="./static/images/yellow-dot.png" alt="dot" style={{marginTop:'-8px', float: 'right', marginRight:'-13px'}} className="dot" />
              </div>
              <div className="hidden-xs hidden-sm hidden-md col-lg-3"></div>
            </div>
            <ScrollableAnchor id='services'>
              <div className="row">
                <div className="col-xs-12 col-lg-9 content content-short">
                  <h2>Services</h2>

                  <h3>Custom Development</h3>
                  <p>Lenalysis provides top-quality custom software engineering.  We can jumpstart your journey developing a new solution.  We can also assist with major enhancements to existing applications.

                  Our team has developed hyper-scale mission-critical cloud solutions for global companies, built cutting-edge financial projection systems, and built many line-of-business enterprise apps.
                  </p>

                  <h3>Cloud Strategy and Implementation</h3>
                  <p>It is important to make the right decisions at the start of your cloud journey.  We have been building cloud solutions for 8 years and can help you with your cloud needs.</p>

                  <h3>Application Modernization</h3>
                  <p>Realize the benefits of modern engineering practices with your legacy systems.  We can help you with automating testing, continuous integration, continuous development, static code analysis, and architectural strategy.</p>

                  <h3>System Integration</h3>
                  <p>System integration can be difficult.  Let our multiple decades of experience in system integration help you achieve results with low-risk.</p>

                  <h3>Security Assessments</h3>
                  <p>We can work with your teams to assess your current security practices and technology, and develop a comprehensive security improvement plan.</p>

                  <h3>Actuarial, Financial, and Accounting Software</h3>
                  <p>Lenalysis can provide specialized expertise in the areas of actuarial, financial, and accounting software development.</p>

                  <h3>Agile and DevOps</h3>
                  <p>Regardless of where your team is on the agile and DevOps journey, let our expertise help you align your process to your business goals.  We can help with all flavors of agile, and can work with you on the various options of aligning your development and operations functions.</p>
                </div>
              </div>
            </ScrollableAnchor>

            <div className="row right-section">
              <div className="col-xs-12 col-lg-9">
                <div className="section">Technologies</div>
                <img src="./static/images/computer-with-code.jpg" alt="Photo of Computer with Code" className="img-responsive"  />
              </div>
            </div>
            <div className="row" style={{height:'10px'}}>
              <div className="col-xs-12 col-lg-9" style={{backgroundColor:'#f9b721', marginBottom:'-8px', height: '10px'}}>
                <img src="./static/images/yellow-dot.png" alt="dot" style={{marginTop:'-8px', float: 'left', marginLeft: '-13px'}} className="dot" />
                <img src="./static/images/yellow-dot.png" alt="dot" style={{marginTop:'-8px', float:'right', marginRight:'-13px'}} className="dot" />
              </div>
            </div>
            <ScrollableAnchor id='technologies'>
              <div className="row">
                <div className="col-xs-12 col-lg-9 content content-short">
                  <h2>Technologies</h2>

                  <p className="justify-cen">We are happy to work with you on your technology platform of choice.  No one-size-fits-all, so we first seek to assess your technology needs.  The following are the technologies we use most frequently.</p>

                  <div className="image-collection">
                    <img src="./static/images/csharp.png" style={{height:'6em', marginRight:'2em', marginBottom:'2em'}} />
                    <img src="./static/images/nodejs.png" style={{height:'6em', marginRight:'2em', marginBottom:'2em'}} />
                    <img src="./static/images/react.png" style={{height:'6em', marginRight:'2em', marginBottom:'2em'}} />
                    <img src="./static/images/golang.png" style={{height:'6em', marginRight:'2em', marginBottom:'2em'}} />
                    <img src="./static/images/azure.png" style={{height:'6em', marginRight:'2em', marginBottom:'2em'}} />
                    <img src="./static/images/aws.png" style={{height:'6em', marginRight:'2em', marginBottom:'2em'}} />
                  </div>

                </div>
              </div>
            </ScrollableAnchor>

            <div className="row right-section">
              <div className="col-xs-12 col-lg-9">
                <div className="section">Customers</div>
                <img src="./static/images/steps.jpg" alt="Photo of Man Climbing Steps" className="img-responsive"  />
              </div>
            </div>
            <div className="row" style={{height:'10px'}}>
              <div className="col-xs-12 col-lg-9" style={{backgroundColor:'#f9b721', marginBottom:'-8px', height:'10px'}}>
                <img src="./static/images/yellow-dot.png" alt="dot" style={{marginTop:'-8px',float:'left',marginLeft:'-13px'}} className="dot" />
                <img src="./static/images/yellow-dot.png" alt="dot" style={{marginTop:'-8px',float:'right',marginRight:'-13px'}} className="dot" />
              </div>
            </div>
            <ScrollableAnchor id='customers'>
              <div className="row">
                <div className="col-xs-12 col-lg-9 content content-short">
                  <h2>Our Customers</h2>

                  <div className="image-collection">


                    <img src="./static/images/govinvest.png" style={{height:'6em', marginRight:'2em', paddingBottom:'1em'}} />
                    <img src="./static/images/payscale.png" style={{height:'12em', marginRight:'2em', paddingBottom:'1em'}} />

                    <p className="justify-cen">Thank you!</p>

                  </div>

                </div>
              </div>
            </ScrollableAnchor>

            <div className="row right-section">
              <div className="col-xs-12 col-lg-9">
                <div className="section">Team</div>
                <img src="./static/images/seattle.jpg" alt="Photo of Chess Pieces" className="img-responsive"  />
              </div>
            </div>
            <div className="row" style={{height:'10px'}}>
              <div className="col-xs-12 col-lg-9" style={{backgroundColor:'#f9b721', marginBottom:'-8px', height:'10px'}}>
                <img src="./static/images/yellow-dot.png" alt="dot" style={{marginTop:'-8px', float:'left', marginLeft:'-13px'}} className="dot" />
                <img src="./static/images/yellow-dot.png" alt="dot" style={{marginTop:'-8px', float:'right', marginRight:'-13px'}} className="dot" />
              </div>
            </div>
            <ScrollableAnchor id='team'>
              <div className="row">
                <div className="col-xs-12 col-lg-9 content content-short">

                  <h2>Leadership Team</h2>

                  <img src="./static/images/kelly.jpg" style={{height:'6em'}} alt="Portrait of Kelly Leahy" className="img-responsive"  />
                  <h3>Kelly Leahy | <span className="title">Principal</span></h3>
                  <p>Kelly holds a Master’s degree in Computer Science and a Bachelor’s Degree in Actuarial Science. Kelly has a rare combination of financial systems and software development expertise.  His 18 years of experience developing financial applications has included delivering mission critical financial reporting systems, as well as large-scale cloud applications, using advanced event-oriented patterns that enable accountability and scalability.</p>
                </div>
              </div>
            </ScrollableAnchor>
            <div className="row">
              <div className="col-xs-12 col-lg-9 content">
                <img src="./static/images/adrian.jpg" style={{height:'8em'}} alt="Portrait of Adrian Withy" className="img-responsive"  />
                <h3>Adrian Withy | <span className="title">Principal</span></h3>
                <p>Adrian is an expert software architect and delivery manager.  Most recently, Adrian was a Group Manager at Avanade, a leading global consultancy.  There he architected and delivered large software projects for global 100 companies.  Prior to Avanade, Adrian was a Product Owner at Milliman, where he coordinated product development for multiple actuarial software systems.  Adrian has more than 12 years of professional software development experience, and maintains a high level of technical and delivery management expertise.
                </p>
              </div>
            </div>

            <div className="row justify-cen">
              <div className="col-xs-12 col-lg-9 content">
                <a href="mailto:info@lenalysis.com"><img src="./static/images/icon-email.png" alt="map icon" style={{marginRight:'2em'}} className="justify-cen" />  Contact Us</a>
              </div>
            </div>

          </div>
        </div>


      </div>


      <div className="container-fluid navbar-fixed-bottom">
        <div className="col-xs-12 col-md-6">
          <div className="hidden-xs hidden-sm hidden-md col-lg-3"></div>
          <div className="col-xs-12 col-lg-9" style={{backgroundColor:'white', opacity:'.3', height:'30px', textAlign:'center'}}>
            <p style={{fontSize:'12px', color:'#0063af', marginTop:'5px', fontFamily:'Muli sans-serif'}}>&copy;2016 Lenalysis Consulting Services, Inc.</p>
          </div>
        </div>
        <div className="hidden-xs col-md-6"></div>
      </div>
    </React.Fragment>
  );
};

export default View;
