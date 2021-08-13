import { useState } from 'react';
import classes from './headerMobile.module.css';
import Link from 'next/link'

const HeaderMobile = () => {

    const [isActive, setIsActive] = useState(false);

    const onClick = () => {
        console.log('hi')
    };

    return (
        <ul className={`${classes['nav-mobile']} d-sm-none`}>
            <li className={classes['logo']}>
                <Link href="/">
                    <a ><img src="https://images.netcomlearning.com/cms/netcom-learning-logo-9e59.webp" alt="NetCom Learning" /></a>
                </ Link>
            </li>  
                  
            <li className={classes['menu-container']}>  */}
                <input id="menu-toggle" className={classes['menu-toggle']} type="checkbox" />
                <label htmlFor="menu-toggle" className={classes['menu-button']}>  
                    <svg className={classes['icon-open']} viewBox="0 0 24 24"> <path xmlns="http://www.w3.org/2000/svg" className={classes['a']} d="M0,3.78a1.955,1.955,0,0,1,2-1.9H22.75a1.955,1.955,0,0,1,2,1.9,1.955,1.955,0,0,1-2,1.9H2A1.955,1.955,0,0,1,0,3.78ZM22.75,9.97H2a1.907,1.907,0,1,0,0,3.81H22.75a1.907,1.907,0,1,0,0-3.81Zm0,8.1H2a1.907,1.907,0,1,0,0,3.81H22.75a1.907,1.907,0,1,0,0-3.81Z"></path></svg>
                    <svg className={classes['icon-close']} viewBox="0 0 100 100">
                        <path d="M83.288 88.13c-2.114 2.112-5.575 2.112-7.69 0L53.66 66.188c-2.113-2.112-5.572-2.112-7.686 0l-21.72 21.72c-2.114 2.113-5.572 2.113-7.687 0l-4.693-4.692c-2.114-2.114-2.114-5.573 0-7.688l21.72-21.72c2.112-2.115 2.112-5.574 0-7.687L11.87 24.4c-2.114-2.113-2.114-5.57 0-7.686l4.842-4.842c2.113-2.114 5.57-2.114 7.686 0l21.72 21.72c2.114 2.113 5.572 2.113 7.688 0l21.72-21.72c2.115-2.114 5.574-2.114 7.688 0l4.695 4.695c2.112 2.113 2.112 5.57-.002 7.686l-21.72 21.72c-2.112 2.114-2.112 5.573 0 7.686L88.13 75.6c2.112 2.11 2.112 5.572 0 7.687l-4.842 4.84z"></path>
                    </svg> 
                </label>  
                <ul className={classes['menu-sidebar']}>
                    <li><Link href="/">
                        <a >Home</a>
                        </ Link>
                    </li>      
                    <li>
                        <input type="checkbox" id="sub-two" className={classes['submenu-toggle']} />        
                        <label className={classes['submenu-label']} htmlFor="sub-two">Training</label>
                        <div className={`${classes['arrow']} ${classes['right']}`}>›</div>          
                        <ul className={classes['menu-sub']}>
                            <li className={classes['menu-sub-title']}>
                                <label className={classes['submenu-label']} htmlFor="sub-two">Back to Main Menu</label>
                                <div className={`${classes['arrow']} ${classes['left']}`}>‹</div>              
                            </li> 
                            <li><label><strong>Training</strong></label></li>
                            <li><Link href="/">
                                <a >Content Pages</a>
                                </ Link></li>
                            <li><Link href="/">
                                <a >Promotions</a>
                                </ Link></li>                    
                            <li><Link  href="/vendors/">
                                <a>Vendors</a>
                                </ Link></li>  
                            <li><Link href="/products/">
                                <a >Products</a>
                                </ Link></li> 
                            <li><Link href="/certifications/">
                                <a >Certifications</a>
                                </ Link></li> 
                            <li>
                                <input type="checkbox" id="sub-one" className={classes['submenu-toggle']} />        
                                <label className={classes['submenu-label']} htmlFor="sub-one">Practice Area</label>
                                <div className={`${classes['arrow']} ${classes['right']}`}>›</div>  
                                <ul className={classes['menu-sub']}>
                                    <li className={classes['menu-sub-title']}>
                                        <label className={classes['submenu-label']} htmlFor="sub-one">Back to Training</label>
                                        <div className={`${classes['arrow']} ${classes['left']}`}>‹</div>              
                                    </li> 
                                    <li>
                                        <label><strong>Practice Area</strong></label>      
                                    </li>
                                    <li>
                                        <Link href="/practice-area/2/design-multimedia.html/">
                                            <a >Design and Multimedia</a>
                                            </ Link>
                                    </li>
                                    <li><Link href="/practice-area/3/application-development.html/">
                                        <a >Application Development</a>
                                        </ Link></li>
                                    <li><Link href="/practice-area/4/cloud.html/">
                                        <a >Cloud</a>
                                        </ Link></li><li><Link href="/practice-area/5/business-process.html/">
                                        <a >Business Process</a>
                                        </ Link></li>
                                    <li><Link href="/practice-area/6/business-leadership.html/">
                                        <a >Business and Leadership</a>
                                        </ Link></li>
                                    <li><Link href="/practice-area/7/security.html/">
                                        <a >Security</a>
                                        </ Link></li>
                                    <li><Link href="/practice-area/8/networking.html/">
                                        <a >Networking</a>
                                        </ Link></li>
                                    <li><Link href="/practice-area/9/business-applications.html/">
                                        <a >Business Applications</a>
                                        </ Link></li>
                                    <li><Link href="/practice-area/10/data-ai.html/">
                                        <a >Data and AI</a>
                                        </ Link></li>
                                </ul>                              
                            </li> 
                           
                            <li>
                                <input type="checkbox" id="sub-five" className={classes['submenu-toggle']} />        
                                <label className={classes['submenu-label']} htmlFor="sub-five">Resources</label>
                                <div className={`${classes['arrow']} ${classes['right']}`}>›</div>           
                                <ul className={classes['menu-sub']}>
                                    <li className={classes['menu-sub-title']}>
                                        <label className={classes['submenu-label']} htmlFor="sub-five">Back to Main Menu</label>
                                        <div className={`${classes['arrow']} ${classes['left']}`}>‹</div>              
                                    </li>
                                    <li>
                                        <label><strong>Resources</strong></label>      
                                    </li>
                                    <li><Link href="/webinars/">
                                        <a >Webinars On-demand</a>
                                        </ Link></li>
                                    <li><Link href="/blogs/">
                                        <a >Blogs</a>
                                        </ Link></li>
                                    <li><Link href="/case-studies/">
                                        <a >Case Studies</a>
                                        </ Link></li>
                                    <li><Link  href="/assessment/quiz-sign-up.phtml">
                                        <a>Assessments Quiz</a>
                                        </ Link></li>
                                    <li><Link href="https://netcomlearning.s3.amazonaws.com/pdf/NetCom_Corporate_Catalog.pdf">
                                        <a >Download Catalog</a>
                                        </ Link></li>
                                </ul>
                            </li>  
                            <li><Link href="/digital-learning-library/">
                                <a >e-Learning Library</a>
                                </ Link></li>
                        </ul>
                    </li>
                    <li>
                        <input type="checkbox" id="sub-three" className={classes['submenu-toggle']} />        
                        <label className={classes['submenu-label']} htmlFor="sub-three">Solutions</label>
                        <div className={`${classes['arrow']} ${classes['right']}`}>›</div>           
                        <ul className={classes['menu-sub']}>
                            <li className={classes['menu-sub-title']}>
                                <label className={classes['submenu-label']} htmlFor="sub-three">Back to Main Menu</label>
                                <div className={`${classes['arrow']} ${classes['left']}`}>‹</div>              
                            </li>
                            <li>
                                <label><strong>Solutions</strong></label>      
                            </li>      
                                            
                            <li><Link href="/services/">
                                <a >Managed Learning Services</a>
                                </ Link></li>
                            <li><Link href="/education/business-solutions.phtml">
                                <a >Business Solutions</a>
                                </ Link></li>
                            <li><Link href="/education/dod8140.phtml">
                                <a >Department of Defense (DoD)</a>
                                </ Link></li>
                            <li><Link href="/lp/ca-program.phtml">
                                <a >Army Credentialing Assistance (Army CA)</a>
                                </ Link></li>
                            <li><Link href="/lp/ca-program.phtml">
                                <a >NetCom Skilling Initiative (SI)</a>
                                </ Link></li>
                            <li><Link href="/promotions/learning-passes.phtml">
                                <a >Learning Passes</a>
                                </ Link></li>
                            <li><Link href="/lp/microsoft-cie.phtml">
                                <a >Microsoft CIE</a>
                                </ Link></li>
                            <li><Link href="/education/microsoft_software_assurance.phtml">
                                <a >Microsoft SATVs</a>
                                </ Link></li>
                            <li><Link href="/education/microsoft-partner-training.phtml">
                                <a >Microsoft Partner Training</a>
                                </ Link></li>
                            <li><Link href="/lp/aws-learning-needs-analysis.phtml">
                                <a >AWS Learning Needs Analysis (LNA)</a>
                                </ Link></li>
                            <li><Link href="/vendors/cisco-learning-credits.phtml">
                                <a >Cisco Learning Credits (CLCs)</a>
                                </ Link></li>
                            <li><Link href="/vendors/citrix-training-pass.phtml">
                                <a >Citrix Training Pass (CTP)</a>
                                </ Link></li>
                            <li><Link href="/vendors/comptia/comptia-continuing-education-program.phtml">
                                <a >CompTIA Continuing Education (CE)</a>
                                </ Link></li>
                        </ul>
                    </li>  

                    <li><Link href="/training/schedules.phtml">
                        <a >Schedules</a>
                        </ Link></li>  
                    <li><Link href="/education/specials.phtml">
                        <a >Promotions</a>
                        </ Link></li>  
                    <li><Link href="/about-us/about-us.html">
                        <a >About Us</a>
                        </ Link></li>                 
                    <li><Link href="/">
                        <a className={classes.normalLink}>Employee Profile</a>
                        </ Link></li>
                    <li><Link href="/">
                        <a className={classes.normalLink}>Change Password</a>
                        </ Link></li>
                                
                </ul> 
            </li>
        </ul>
    );
};

export default HeaderMobile;