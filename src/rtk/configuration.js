import { configureStore } from "@reduxjs/toolkit"
import { appSlice } from "app"
import { catalogAPI, catalogSlice } from "modules/catalog"
import { cardAPI, cardSlice, carRequestAPI, carRequestSlice } from "modules/card"
import { mainModalSlice } from "modules/modals/mainModal"
import { progressbarSlice } from "modules/progressbar"


const store = configureStore({
    reducer: {
        app: appSlice,
        catalog: catalogSlice,
        card: cardSlice,
        mainModal: mainModalSlice,
        carRequest: carRequestSlice,
        progressbar: progressbarSlice,
        [catalogAPI.reducerPath]: catalogAPI.reducer,
        [cardAPI.reducerPath]: cardAPI.reducer,
        [carRequestAPI.reducerPath]: carRequestAPI.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(catalogAPI.middleware)
            .concat(cardAPI.middleware)
            .concat(carRequestAPI.middleware)
})

export default store

window.reduxStore = store