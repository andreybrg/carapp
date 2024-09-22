import React from "react"
import { Link } from "react-router-dom"
import style from './Layout.module.sass'
import { Picture } from "../Picture/Picture"
import { Price } from "../Price/Price"
import { Title } from "../Title/Title"

export const Layout = ({ data }) => {
    return(
        <Link to={'/card/2'} className={style.item}>
            <Picture
                images={[]}
                mainImageId={null}
                />
            <Price
                price={data.content.price}
                />
            <Title
                data={data.content}
                />
        </Link>
    )
}
