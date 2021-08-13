import classes from './middleSections.module.css'
import React from 'react';
import detailClasses from './detailPage.module.css';

const MiddleSections = (props: any) => {

    return (
        <React.Fragment>
            {props.data.map( (section: any, i: number) => {
                return (
                    <div key={section.id} className={`${classes['section-styling']} ${detailClasses['previewDetail']} d-flex align-items-center flex-column mt-sm-5 mt-4`}>     
                
                        <h2 
                            className={`${classes['sectionTitle']} mb-4 container-fluid container-tab`} 
                            dangerouslySetInnerHTML={{__html: section.section_title}} 
                        ></h2>
                        
                        <div className={`${i === 0 ? 'container-fluid' : 'w-100'} container-tab`}>
                            <div className={i === 0 ? 'row m-0' : ''}>
                                <div className={i === 0 ? 'col-lg-8 px-0' : ''}>
                                    <div className={classes['sectionDes']} dangerouslySetInnerHTML={{__html: section.description}}></div>
                                    {section.template_type === 'lets-chat' ?
                                        (
                                            <div  className="mt-4 text-center" >
                                                <a className="btn blue_btn border-0" href="#leadForm">Contact Us Now</a>
                                            </div>
                                        ) :
                                        (
                                            ''
                                        )
                                        
                                    }
                                </div>
                                {i == 0 ? (
                                <div className={`col-12 col-lg-4 my-4 px-0 pr-lg-0 pl-lg-3 ${classes['lead-form-col']} `} >
                                    <div id="leadForm" className={classes['lead-form']}>
                                        <input type="text" placeholder="First Name *" />
                                        <input type="text" placeholder="Last Name *" />
                                        <input type="text" placeholder="Organization Name" />
                                        <input type="text" placeholder="Job Title" />
                                        <input type="email" placeholder="Email *" />
                                        <input type="phone" placeholder="Phone Number *" />
                                
                                        <a className={`btn ${classes['blue_btn']} w-100 border-0`} href="https://netcomlearning30408.activehosted.com/f/28" target="_blank" rel="noreferrer">Submit</a>
                                    </div>
                                </div>
                                ): 
                                ( '' )

                                }                
                            </div>
                        </div>
                    </div> 
                );
            })

            }
            
        </React.Fragment>
    );
}

export default MiddleSections;