import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { catalogAPI } from './catalogAPI'
import { CATALOG_REQUEST_SIZE } from 'shared/utils'

// Увеличить страницу
// Получить данные новой страницы и записать в стейт

export const getPageData = createAsyncThunk(
    'catalog/getPageData',
    async ({filterParams, incrementPage=false, initialCall=false}, {dispatch, getState}) => {

        if(incrementPage) dispatch(incrementingPage())

        const catalogData = getState().catalog.data
        const response = await dispatch(catalogAPI.endpoints.getCatalogData.initiate({
            page: catalogData.currentPage, 
            count: CATALOG_REQUEST_SIZE, 
            filters: filterParams
        }))
        const catalogDataForDispatch = {
            data: [...response.data.response.ads]
        }

        if(response.data.response.totalCount !== catalogData.totalCount)
            dispatch(setTotalCount({totalCount: response.data.response.totalCount}))
        dispatch(addCatalogData(catalogDataForDispatch))
        if(initialCall) dispatch(initCatalog())
    }
)

export const resetPageData = createAsyncThunk(
    'catalog/resetPageData',
    async ({filterParams}, {dispatch, getState}) => {

        dispatch(resetPagination())

        const catalogData = getState().catalog.data
        const response = await dispatch(catalogAPI.endpoints.getCatalogData.initiate({
            page: catalogData.currentPage,
            count: CATALOG_REQUEST_SIZE, 
            filters: filterParams
        }))

        const catalogDataForDispatch = {
            data: [...response.data.response.ads]
        }

        if(response.data.response.totalCount !== catalogData.totalCount)
            dispatch(setTotalCount({totalCount: response.data.response.totalCount}))
        dispatch(setCatalogDataOnResetPagination(catalogDataForDispatch))
    }
)

const initialState = {
    data: {
        isInit: false,
        isFetching: false,
        isError: false,
        currentPage: 1,
        adList: [],
        totalCount: null
    },
}

const catalogSlice = createSlice({
    name: 'catalog',
    initialState,
    reducers: {
        resetPagination(state) {
            state.data.currentPage = 1
            
            state.data.totalCount = null
        },
        addCatalogData(state, action) {
            state.data.adList.push(...action.payload.data)
        },
        setTotalCount(state, action) {
            state.data.totalCount = action.payload.totalCount
        },
        incrementingPage(state) {
            state.data.currentPage += 1
        },
        initCatalog(state) {
            state.data.isInit = true
        },
        setCatalogDataOnResetPagination(state, action) {
            state.data.adList = [...action.payload.data]
        }
    },
    extraReducers: builder =>
        builder
            .addCase(getPageData.pending, (state) => {
                state.data.isFetching = true
            })
            .addCase(getPageData.fulfilled, (state) => {
                state.data.isFetching = false
            })
            .addCase(getPageData.rejected, (state) => {
                state.data.isError = true
            })
            .addCase(resetPageData.pending, (state) => {
                state.data.isFetching = true
            })
            .addCase(resetPageData.fulfilled, (state) => {
                state.data.isFetching = false
            })
            .addCase(resetPageData.rejected, (state) => {
                state.data.isError = true
            })
})

export const { 
    resetPagination,
    addCatalogData,
    incrementingPage,
    initCatalog,
    setTotalCount,
    setCatalogDataOnResetPagination 
} = catalogSlice.actions
export default catalogSlice.reducer