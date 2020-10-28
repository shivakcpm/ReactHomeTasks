export const URLS = {
    BASE_URL:'http://localhost:4000/',
    MOVIES_URL:'movies',
    MOVIE_BY_ID:'movies/:id',

    getUrl: (api, pathParams, queryParams) => {
        api = pathParams
            ? URLS.replacePathParams(api, pathParams)
            : api;
        api = queryParams
            ? URLS.appendQueryParams(api, queryParams)
            : api;
        return `${URLS.BASE_URL}${api}`;
    },

    replacePathParams: (api, params) => {
        Object.keys(params).forEach(element => {
            if (params[element]) {
                api = api.replace(`:${element}`, params[element]);
            }
        });
        return api;
    },

    appendQueryParams: (api, params) => {
        api = params
            ? `${api}?`
            : api;
        Object.keys(params).forEach(element => {
            if (params[element]) {
                api = `${api}${element}=${params[element]}&`;
            }
        });
        return api;
    }
};
