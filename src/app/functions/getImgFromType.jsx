export const getImgFromType = (imgArray, imgRef, imgAspect) => {
    let imgHref = '';
    imgArray.forEach((img)=>{
        if( imgRef ){
            if(img.imageType === imgRef){
                imgHref = img.href;
            }
        }
        if( imgAspect ){
            if(img.aspectRatio === imgAspect){
                imgHref = img.href;
            }
        }
    });
    
    return imgHref;
}