import React, { useContext }  from 'react';
import  AccordionContext  from 'react-bootstrap/AccordionContext';
import * as RB from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import classes from './detailAccordion.module.css';
import detailClasses from './detailPage.module.css';

function ContextAwareToggle({ eventKey = '', callback = (e:any) => {}}) {
    const { activeEventKey } = useContext(AccordionContext);
  
    const decoratedOnClick = RB.useAccordionButton(
      eventKey,
      () => callback && callback(eventKey),
    );
  
    const isCurrentEventKey = activeEventKey === eventKey;
  
    return (
      <button
        type="button"
        className="btn ml-3 text-white"
        onClick={decoratedOnClick}
      >
        <i className={`icon-moon ${isCurrentEventKey ? classes['icon-minus'] : classes['icon-plus']}`} aria-hidden="true"></i>
    </button>
    );
  }

const DetailAccordion = (props: any) => {
    return (
        <div  className={`container-fluid ${classes['container-tab']} d-flex justify-content-between mt-sm-5 mt-4`}>
            
            <Accordion className={`${classes['detail-accordion']} ${detailClasses['previewDetail']} w-100 `}>
            {props.data.map( (item: any, i: number) => {
                return (
                    <Accordion.Item eventKey={`${i}`} key={i}>
                    <Accordion.Header className={classes['card-header']}>
                        <div className="d-flex align-items-center justify-content-between">
                            <h5  className="mb-0" dangerouslySetInnerHTML={{__html: item.dropdown_title}} ></h5>
                            <ContextAwareToggle eventKey={`${i}`}/>
                        </div>  
                    </Accordion.Header>
                    <Accordion.Body>
                        <div dangerouslySetInnerHTML={{__html: item.dropdown_description}}></div>
                        
                    </Accordion.Body>
                </Accordion.Item>
                );
            })
            }
            </Accordion>       
            
        </div>

    );
}

export default DetailAccordion;