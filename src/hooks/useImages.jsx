import {useCallback, useEffect, useReducer} from "react"
import {fetchImages} from "../api/fetchImages"

const initialState = {
    images: [],
    isLoading: true,
    currentPage: 0,
    totalPages: 10
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "LOAD_MORE_PAGES":
            return {...state, isLoading: true}
        case "API_SUCCESS":
            return {
                ...state,
                isLoading: false,
                currentPage: state.currentPage + 1,
                images: [...state.images, ...action.payload]
            }
        case "API_FAILED":
            return {...state, isLoading: false}
        default:
            return state
    }
}


export const makeUseImage = (fetchImages) => () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const {isLoading, currentPage} = state
    const loadMore = useCallback(() => {
        if (isLoading) return;
        dispatch({type: "LOAD_MORE_PAGES"})
    }, [isLoading])
    const apiSuccess = useCallback((payload) => {
        if (!Array.isArray(payload)) throw new Error()
        dispatch({type: "API_SUCCESS", payload})
    }, [])
    const apiFailed = useCallback(() => dispatch({action: "API_FAILED"}), [])
    useEffect(() => {
        if (isLoading) {
            fetchImages(currentPage + 1)
                .then(apiSuccess)
                .catch(apiFailed)
        }
    }, [isLoading, currentPage, apiSuccess, apiFailed])
    return {...state, loadMore}
}

export const useImages = makeUseImage(fetchImages)