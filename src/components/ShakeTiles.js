import React from 'react'

function ShakeTiles(tiles) {
    return (
        tiles.forEach(tile => {
            tile.classList.add("shake")
            tile.addEventListener("animationend", () => {
                tile.classList.remove("shake")
            }, { once: true })
        })


    )
}

export default ShakeTiles