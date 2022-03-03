export const initialState = {
    pageNumber: 1,
    totalPages: 0,
    typeData: "home",
    apiData: [],
    character: [],
    location: [],
    episode: [],
    search: "",
    compare: [],
    compareResults: [],
    episodeID: 1,
    snackbar: {
        view: false,
        message: '',
        success: false
    },
}

export const actionTypes = {
    PAGE_NUMBER: "PAGE_NUMBER",
    TOTAL_PAGE: "TOTAL_PAGE",
    TYPE: "TYPE",
    CHARACTER: "CHARACTER",
    LOCATION: "LOCATION",
    EPISODE: "EPISODE",
    SEARCH: "SEARCH",
    COMPARE: "COMPARE",
    COMPARE_RESULT: "COMPARE_RESULT",
    EPISODEID: "EPISODEID",
    SNACKBAR: "SNACKBAR",

}

const reducer = (state, action) => {

    console.log(action);

    switch (action.type) {

        case "PAGE_NUMBER":
            return {
                ...state,
                pageNumber: action.pageNumber
            }
        case "TOTAL_PAGE":
            return {
                ...state,
                totalPages: action.totalPages,
            }
        case "TYPE":
            return {
                ...state,
                typeData: action.typeData,
            }
        case "CHARACTER":
            return {
                ...state,
                character: action.apiData,
            }
        case "LOCATION":
            return {
                ...state,
                location: action.apiData,
            }
        case "EPISODE":
            return {
                ...state,
                episode: action.apiData,
            }
        case "SEARCH":
            return {
                ...state,
                search: action.apiData,
            }
        case "COMPARE":
            return {
                ...state,
                compare: action.compare,
            }
        case "COMPARE_RESULT":
            return {
                ...state,
                compareResults: action.compareResults,
            }
        case "EPISODEID":
            return {
                ...state,
                episodeID: action.episodeID,
            }
        case "SNACKBAR":
            return {
                ...state,
                snackbar: action.snackbar,
            }
        default: return state;
    }
}
export default reducer