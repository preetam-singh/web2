import DetailPage from "../../components/content-pages/detailPage";
import Layout from "../../components/layout/layout";
import Head from 'next/head';


const Page = (props: any) => {
    
    let seoData: any[] = props.seoData;  

    return (
        <>
            <Head>
                <title>{seoData[0].page_title}</title>
                <meta name="keywords" content={seoData[0].meta_keyword} />
                <meta name="description" content={seoData[0].meta_description} />
                <meta property="og:description" content={seoData[0].meta_description} />
                <meta property="og:title" content={seoData[0].page_title} />
                <meta property="og:type" content={seoData[0].og_type} />
                <meta property="og:url" content={seoData[0].og_url} />
                <meta name="h1" content={seoData[0].h1} />
                <meta property="og:image:type" content="image/jpg"/>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossOrigin="anonymous" />
            </Head>
            <Layout>
                <DetailPage bannerOb={props.bannerOb} accordionList={props.accordionList} middleSections={props.middleSections}></DetailPage>
            </Layout>
        </>
        
    ); 
}


export async function getServerSideProps(context: any) {

    let sections: any = [];
    let middleSections: any[] = [];
    let bannerOb = null;
    let accordionList: any[] = [];
    let seoData : any[] = [];

    const slug = context.params.slug;
    const BASE_URL = process.env.API;

    const getList = async () => {
        let res = await fetch(`${BASE_URL}/content-pages-list-api/`);
        return res.json();
    }
    const getSections = async (id: number) => {
        let res = await fetch(`${BASE_URL}/content-pages-section-list-api/${id}/`);
        return res.json();
    }
    const getSeoData = async (id: number) => {
        let res = await fetch(`${BASE_URL}/content-pages-seo-detail-api/${id}/`);
        return res.json();
    }   

    const allSettled = function (promises: Promise<
        {
            status: string,
            value: any
        }>[]) 
    {

        let mappedPromises = promises.map((p: Promise<{status: string, value: any}>) => {
            return p
            .then((value) => {
                return {
                status: 'fulfilled',
                value,
                };
            })
            .catch((reason) => {
                return {
                status: 'rejected',
                reason,
                };
            });
        });
        return Promise.all(mappedPromises);
    };

    await getList().then( (list: any) => {
        console.log('in get list');
        let id = list.find( (page: any) => {
            return page.page_slug == slug;
        }).id;

        return allSettled([getSections(id), getSeoData(id)]);

    }).then( (data: any[]) => {
        console.log('data', data[0].value, data[1].value);
        let allSections: any[] = data[0].value;
        sections = allSections.filter( (section: any)  => {
            return section.status == true;
        });
        middleSections = sections.filter( (section: any) => { //Coupling
            return  (section.template_type != 'banner') && (section.template_type != 'dropdown');  
        });
        bannerOb = sections.find( (section: any) => {   // Coupling
            return section.template_type == 'banner';
        });
        accordionList = sections.filter( (section: any) => {   // Coupling
            return section.template_type == 'dropdown';
        }); 


        seoData = data[1].value;



    });
    

    return {
        props: {
            bannerOb,
            middleSections,
            accordionList,
            seoData
            
        }
    };
    
}

export default Page;