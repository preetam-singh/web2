import React from "react";
import Banner from "./banner";
import DetailAccordion from "./detailAccodion";
import MiddleSections from "./middleSections";


const DetailPage: React.FC<{
    bannerOb: {},
    middleSections: [],
    accordionList: [] 
}> = ({
    bannerOb,
    middleSections,
    accordionList
}) => {

    return (
        <React.Fragment>
            {bannerOb ? <Banner data={bannerOb}></Banner> : ''  }
            {middleSections.length > 0 ? 
                (
                    <MiddleSections data={middleSections}></MiddleSections>
                ) :
                (
                    ''
                )
                
            }
            {accordionList.length > 0 ? 
                (
                    <DetailAccordion data={accordionList}></DetailAccordion>
                ) :
                (
                    ''
                )

            }
        </React.Fragment>
    
    );
};

export default DetailPage;