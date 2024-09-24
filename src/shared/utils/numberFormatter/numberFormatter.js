export const numberFormatter = (price) => {

    const formattedNumber = Number(price).toLocaleString(
        'ru-RU',
        {
            minimumFractionDigits: 0 
        }
    )

    return formattedNumber
}