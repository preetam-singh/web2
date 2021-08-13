export const getList = async () => {
    let res = await fetch('https://cms.netcomlearning.com/api/v1/content_pages_website/content-pages-list-api/');
    if( !res.ok ) {
        throw new Error('Something went wrong');
    }else {
        return await res.json();
    }
    
};

export const getSections = async (id: number) => {
    let res = await fetch(`https://cms.netcomlearning.com/api/v1/content_pages_website/content-pages-section-list-api/${id}`);
    if( !res.ok && res.status == 500 ) {
        throw new Error('Something went wrong');
    }else {
        return await res.json();
    };
}