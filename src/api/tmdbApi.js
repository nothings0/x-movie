import axiosClient from "./axiosClient";

export const category = {
    movie: 'movie',
    tv: 'tv',
    multi: 'multi'
}

export const movieType = {
    upcoming: 'upcoming',
    popular: 'popular',
    top_rated: 'top_rated',
    now_playing: 'now_playing',
    trending: 'trending',
}

export const tvType = {
    popular: 'popular',
    top_rated: 'top_rated',
    on_the_air: 'on_the_air',
    airing_today: 'airing_today',
}

export const trendType = {
    all: 'all',
    movie: 'movie',
    tv: 'tv'
}
export const trendTime = {
    day: 'day',
    week: 'week',
}

const tmdbApi = {
    getMoviesList: (type, params) => {
        const url = 'movie/' + movieType[type];
        return axiosClient.get(url, params);
    },
    getTrending: (type, time) => {
        const url = 'trending/' + category[type] + "/" + trendTime[time];
        return axiosClient.get(url, {params: {}});
    },
    getTvList: (type, params) => {
        const url = 'tv/' + tvType[type];
        return axiosClient.get(url, params);
    },
    getVideos: (cate, id) => {
        const url = category[cate] + '/' + id + '/videos';
        return axiosClient.get(url, {params: {}});
    },
    search: (cate, params) => {
        const url = 'search/' + category[cate];
        return axiosClient.get(url, params);
    },
    detail: (cate, id, params) => {
        const url = category[cate] + '/' + id;
        return axiosClient.get(url, params);
    },
    credits: (cate, id) => {
        const url = category[cate] + '/' + id + '/credits';
        return axiosClient.get(url, {params: {}});
    },
    similar: (cate, id, params) => {
        const url = category[cate] + '/' + id + '/similar';
        return axiosClient.get(url, params);
    },
}

export default tmdbApi;