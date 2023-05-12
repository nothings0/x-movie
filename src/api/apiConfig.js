const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '6e71b0fd9de84ef75e9f09789bc95e13',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
    w220Image: (imgPath) => `https://image.tmdb.org/t/p/w220_and_h330_face/${imgPath}`,
}

export default apiConfig;