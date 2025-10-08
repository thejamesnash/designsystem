export const returnImg = (imgRef,tileWidth,tileHeight) => {
    let newImgRef = `${imgRef.split('?')[0]}?output-quality=10&resize=${tileWidth}:${tileHeight}&informat=chrome&interpolation=progressive-bicubic`;
    return newImgRef
};