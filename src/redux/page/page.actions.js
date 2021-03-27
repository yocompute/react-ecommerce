
export const SET_LOADING = 'page/SET_LOADING';
export const SET_PAGE = 'page/SET_PAGE';


// action creators
export const setPage = (name) => ({
    type: SET_PAGE,
    name
})

export const setLoading = (loading) => ({
    type: SET_LOADING,
    loading
})
