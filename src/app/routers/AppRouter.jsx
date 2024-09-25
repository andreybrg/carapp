import { Layout } from 'app/layout'
import { Panel } from 'pages/panel'
import { Card } from 'pages/сard'
import { Catalog } from 'pages/сatalog'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export const AppRouter = ({  }) => {
    return(
        <BrowserRouter>
            <Routes>
                <Route psth={'/'} element={<Layout/>}>
                    <Route path={'catalog'} element={<Catalog/>}/>
                    <Route path={'card/:cardId'} element={<Card/>}/>
                    <Route path={'panel'} element={<Panel/>}/>
                    <Route path={'*'} element={<>404</>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}