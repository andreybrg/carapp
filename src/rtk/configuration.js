import { configureStore } from "@reduxjs/toolkit"
import { appSlice } from "app"
import { catalogAPI, catalogSlice } from "modules/catalog"
import { cardAPI, cardSlice } from "modules/card"
import { mainModalSlice } from "modules/modals/mainModal"

const store = configureStore({
    reducer: {
        app: appSlice,
        catalog: catalogSlice,
        card: cardSlice,
        mainModal: mainModalSlice,
        [catalogAPI.reducerPath]: catalogAPI.reducer,
        [cardAPI.reducerPath]: cardAPI.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(catalogAPI.middleware)
            .concat(cardAPI.middleware)
})

export default store

window.reduxStore = store