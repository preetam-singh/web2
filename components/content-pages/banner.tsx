import classes from './banner.module.css';
import React from 'react';

const Banner = (props: any) => {

    console.log(props)
    return (
        <section className={`${classes['banner']} container-fluid`} style={{backgroundImage: "url(" + props.data.banner_image_url + ")"}}>
            <h1 
                className={`d-flex align-items-center ${classes['bannerHeading']}`}
                dangerouslySetInnerHTML={{__html: props.data.section_title}} 
            ></h1>  
        </section>
    );
}

export default Banner;