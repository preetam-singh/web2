import React, { useRef, useState } from 'react';
import classes from './headerDesktop.module.css'
import useDetectOutsideClick from './useDetectOutsideClick';
import Link from 'next/link';

const HeaderDesktop = () => {

    const itemsRef: any = useRef<Array<HTMLDivElement | null>>([]);
    const [isMenuOneActive, setIsMenuOneActive] = useDetectOutsideClick(itemsRef[0], false);
    const [isMenuTwoActive, setIsMenuTwoActive] = useDetectOutsideClick(itemsRef[1], false);
    const [isMenuThreeActive, setIsMenuThreeActive] = useDetectOutsideClick(itemsRef[2], false);
    const [isMenuFourActive, setIsMenuFourActive] = useDetectOutsideClick(itemsRef[3], false);

    return (
            <nav className={`container-fluid py-3 d-none d-sm-flex justify-content-between`}>

            <Link href="/">
                <a className={classes['navbar-brand']}>
                    <img src="https://images.netcomlearning.com/logo/netcom-logo-black.webp" alt="NetCom Logo" />
                </a>
                </ Link>

            <div className={`${classes['navbar-nav']} d-flex flex-row align-items-end justify-content-between ml-3`}>
                 <span className="position-static">
                    <span className={classes.toggler} onClick={() => {setIsMenuOneActive(!isMenuOneActive)}}>
                        Training
                        <img className="px-2" src="https://netcomlearning.s3.amazonaws.com/website-img/icon/download-arrow.svg" alt="" />
                    </span>

                    <div ref={itemsRef[0]} className={`${classes['training-menu']} ${isMenuOneActive ? classes.active : classes.inactive}`}>
                        <div className='row h-100'>
                            <div className="col-3">
                                <div className={`${classes['left-nav']} ${classes['grey-bg']} d-flex flex-column h-100`}>
                                <h5 className={classes['sub-heading']}>FIND YOUR TRAINING</h5>
                                <Link href="/">
                                    <a>Courses By Vendor</a>
                                </ Link>
                                <Link href="/">
                                    <a>Content Pages</a>
                                </ Link>
                                <ul className="list-unstyled">
                                    <li>
                                        <Link href="/">
                                            <a>e-Learning Library</a>
                                        </ Link>
                                    </li>
                                    <li>
                                        <Link href="/">
                                            <a >Delivery Format</a>
                                        </ Link>
                                    </li>
                                    <li>
                                        <Link href="/">
                                            <a> Group Training</a>
                                        </ Link>
                                    </li>
                                    <li>
                                        <Link href="/">
                                            <a >Learning Plan</a>
                                        </ Link>
                                    </li>
                                    <li>
                                        <Link href="/">
                                            <a >Testimonials</a>
                                        </ Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className={`col-9  ${classes['right-nav']}`}>
                            <div className='row mr-0 h-100'>
                                <div className={`col-2 d-flex flex-column justify-content-between`}>
                                    <div>
                                        <h5 className={classes['sub-heading']}>VENDORS</h5>
                                        <ul className="list-unstyled list-group">
                                            <li>
                                                <Link href="/">
                                                    <a >Microsoft</a>
                                                </ Link>
                                            </li>
                                            <li>
                                                <Link href="/">
                                                    <a >Cisco</a>
                                                </ Link>
                                            </li>
                                            <li>
                                                <Link href="/">
                                                    <a >Adobe</a>
                                                </ Link>
                                            </li>
                                            <li>
                                                <Link href="/">
                                                    <a >AWS</a>
                                                </ Link>
                                            </li>
                                            <li>
                                                <Link href="/">
                                                    <a >CompTIA</a>
                                                </ Link>
                                            </li>
                                            <li>
                                                <Link href="/">
                                                    <a >PMI</a>
                                                </ Link>
                                            </li>
                                            <li>
                                                <Link href="/">
                                                    <a >Autodesk</a>
                                                </ Link>
                                            </li>
                                            <li>
                                                <Link href="/">
                                                    <a >ITIL</a>
                                                </ Link>
                                            </li>
                                            <li>
                                                <Link href="/">
                                                    <a >EC-Council</a>
                                                </ Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <button className={`${classes['right-nav-btn']} btn btn-primary`}>All Vendors</button>
                                </div>
                                <div className="col-6 d-flex flex-column">
                                    <h5 className={classes['sub-heading']}>PRODUCTS</h5>
                                        <div className="d-flex flex-column h-100">
                                            <div className="d-flex h-100">
                                                <ul className="list-unstyled">
                                                    <li>
                                                        <Link href="/">
                                                            <a href='/products/microsoft-azure-training.phtml'>Microsoft Azure</a>
                                                        </ Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/">
                                                            <a>Microsoft Dynamics 365</a>
                                                        </ Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/">
                                                            <a>Microsoft Office</a>
                                                        </ Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/">
                                                            <a>Cisco Cloud Track</a>
                                                        </ Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/">
                                                            <a>Cisco Collaboration Track</a>
                                                        </ Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/">
                                                            <a>Cisco Routing &amp; Switching Track</a>
                                                        </ Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/">
                                                            <a>Cisco Security Track</a>
                                                        </ Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/">
                                                            <a>CompTIA A+</a>
                                                        </ Link>
                                                    </li>
                                                </ul>

                                                <ul className="list-unstyled">
                                                    <li>
                                                        <Link href="/">
                                                            <a>CompTIA Security+</a>
                                                        </ Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/">
                                                            <a>ITIL<sup>®</sup> 4</a>
                                                        </ Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/">
                                                            <a>Citrix (NetScaler) ADC</a>
                                                        </ Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/">
                                                            <a>Project Management Professional (PMP)<sup>®</sup></a>
                                                        </ Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/">
                                                            <a>Agile Project Management<sup>®</sup></a>
                                                        </ Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/">
                                                            <a>Autodesk AutoCAD</a>
                                                        </ Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/">
                                                            <a>Autodesk Revit</a>
                                                        </ Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/">
                                                            <a>Citrix Hypervisor</a>
                                                        </ Link>
                                                    </li>
                                                </ul>
                                                
                                            </div>
                                            <button className={`${classes['right-nav-btn']} btn btn-primary`}>All Products</button>
                                        <div>
                                            
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4 pl-0 d-flex flex-column">
                                    <h5 className={classes['sub-heading']}>CERTIFICATIONS</h5>
                                    <ul className="list-unstyled h-100">
                                        <li>
                                            <Link href="/">
                                                <a>Microsoft Certified Azure Fundamentals</a>
                                            </ Link>
                                        </li>
                                        <li>
                                            <Link href="/">
                                                <a>Cisco Certified Network Associate (CCNA)</a>
                                            </ Link>
                                        </li>
                                        <li>
                                            <Link href="/">
                                                <a>Cisco Certified DevNet Associate</a>
                                            </ Link>
                                        </li>
                                        <li>
                                            <Link href="/">
                                                <a>Citrix Certified Professional - Virtualization (CCP-V)</a>
                                            </ Link>
                                        </li>
                                        <li>
                                            <Link href="/">
                                                <a>Project Management Professional (PMP)<sup>®</sup></a>
                                            </ Link>
                                        </li>
                                        <li>
                                            <Link href="/">
                                                <a>PMI Agile Certified Practitioner (PMI-ACP)<sup>®</sup></a>
                                            </ Link>
                                        </li>
                                    </ul>
                                    <button className={`${classes['right-nav-btn']} btn btn-primary`}>All Certifications</button>
                                </div>
                            </div>
                        </div>
                        <div className={`col-12 ${classes['menu-footer-col']}`}>
                            <div className="row px-3">
                                <div className="col-4 text-center">
                                    <Link href="/">
                                        <a >
                                            <img className="img-thumbnail" src="https://images.netcomlearning.com/cms/home-page_header-menu-image-0d80.webp" alt="FREE OFFICIAL AWS DIGITAL TRAINING COURSES" />
                                        </a>
                                    </ Link>
                                </div>
                                <div className="col-4 text-center">
                                    <Link href="/">
                                    <a>
                                        <img className="img-thumbnail" src="https://images.netcomlearning.com/cms/home-page_header-menu-image-2-2533.webp" alt="Free Microsoft Master Class: AZ 104" />
                                    </a>
                                    </ Link>
                                </div>
                                <div className="col-4 text-center">
                                    <Link href="/">
                                    <a>
                                        <img className="img-thumbnail" src="https://images.netcomlearning.com/cms/home-page_header-menu-image-2-2533.webp" alt="Learning Passes" />
                                    </a>
                                    </ Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>             
            </span>

            <span>
                <span className={classes.toggler}  onClick={() => {setIsMenuTwoActive(!isMenuTwoActive)}}>
                    Solutions
                    <img className="px-2" src="https://netcomlearning.s3.amazonaws.com/website-img/icon/download-arrow.svg" alt="" />
                </span>
                <div ref={itemsRef[1]} className={`${classes['simple-menu']} ${isMenuTwoActive ? classes.active : classes.inactive}`} >
                    <Link href="/"><a>Managed Learning Services</a>
                    </ Link>
                    <Link href="/"><a>Business Solutions</a>
                    </ Link>
                    <Link href="/"><a>Department of Defense (DoD)</a>
                    </ Link>
                    <Link href="/"><a>Army Credentialing Assistance (Army CA)</a>
                    </ Link>
                    <Link href="/"><a>NetCom Skilling Initiative (SI)</a>
                    </ Link>
                    <Link href="/"><a>Learning Passes</a>
                    </ Link>
                    <Link href="/"><a>Microsoft CIE</a>
                    </ Link>
                    <Link href="/"><a>Microsoft SATVs</a>
                    </ Link>
                    <Link href="/"><a>Microsoft Partner Training</a>
                    </ Link>
                    <Link href="/"><a>AWS Learning Needs Analysis (LNA)</a>
                    </ Link>
                    <Link href="/"><a>Cisco Learning Credits (CLCs)</a>
                    </ Link>
                    <Link href="/"><a>Citrix Training Pass (CTP)</a>
                    </ Link>
                    <Link href="/"><a>CompTIA Continuing Education (CE)</a>
                    </ Link>
                </div>
            </span>

            <span >
                <span className={classes.toggler}  onClick={() => {setIsMenuThreeActive(!isMenuThreeActive)}}>
                    Resources
                    <img className="px-2" src="https://netcomlearning.s3.amazonaws.com/website-img/icon/download-arrow.svg" alt="" />
                </span>
                <div ref={itemsRef[2]} className={`${classes['simple-menu']} ${isMenuThreeActive ? classes.active : classes.inactive}`}>
                    <Link href="/"><a>Webinars</a>
                    </ Link>
                    <Link href="/"><a >Blogs</a>
                    </ Link>
                    <Link href="/"><a >Assessments</a>
                    </ Link>
                    <Link href="/"><a >Case Studies</a>
                    </ Link>
                    <Link href="/"><a >Media</a>
                    </ Link>
                    <Link href="/"><a>Course Catalog</a>
                    </ Link>
                    <Link href="/"><a >Instructors</a>
                    </ Link>
                </div>
            </span>

            <span>
                <span  className={classes.toggler}>
                    Promotions
                </span>
            </span>

            <span>
                <span className={classes.toggler}>
                    Schedules
                </span>
            </span>
            
            <span  className="mr-3" >
                <span  className={classes.toggler} onClick={() => {setIsMenuFourActive(!isMenuFourActive)}}>
                    About Us
                    <img className="px-2" src="https://netcomlearning.s3.amazonaws.com/website-img/icon/download-arrow.svg" alt="" />
                </span>
                <div ref={itemsRef[3]} className={`${classes['simple-menu']} ${isMenuFourActive ? classes.active : classes.inactive}`} >
                    <Link href="/"><a >About Us</a>
                    </ Link>
                    <Link href="/"><a >Leadership</a>
                    </ Link>
                    <Link href="/"><a >Awards</a>
                    </ Link>
                    <Link href="/"><a >Instructors</a>
                    </ Link>
                    <Link href="/"><a >Learning Movement</a>
                    </ Link>
                </div>
            </span>

            <span>
                <span className={classes.toggler}>
                    NetCom365
                </span>
            </span>						     
        </div>

        <div className={`${classes['navbar-nav']} d-flex flex-row align-items-end`}>
            <span className="mr-3">
                <img src="https://netcomlearning.s3.amazonaws.com/website-img/icon/header-search-icon.svg" alt="" className="nav-extra-icons" />
            </span>
            <span className="mr-3">
                <img src="https://netcomlearning.s3.amazonaws.com/website-img/icon/cart-black.png" alt="" className="nav-extra-icons" />
            </span>
            <span className="mr-3">
                <img src="https://netcomlearning.s3.amazonaws.com/website-img/icon/phone-black.png" alt="" className="nav-extra-icons" />
            </span>
        </div>
    </nav>


    );
};

export default HeaderDesktop;

