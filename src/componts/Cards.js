import { useState } from 'react'

function Card(){
    const [items, setItems] = useState([
        { id:1, p: '.', stat:"" },
    ])

    return <p>Card</p>
}
export default Card;