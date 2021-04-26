export const getImageW500 = (imagePath) => {
    return `${process.env.REACT_APP_API_BASE_URL_IMAGE}/w500${imagePath}`;
};

export const getImageOriginalOrSvg = (imagePath) => {
    return `${process.env.REACT_APP_API_BASE_URL_IMAGE}/original${imagePath}`;
};
