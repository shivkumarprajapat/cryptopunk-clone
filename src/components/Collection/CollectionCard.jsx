import React from 'react'
import './collectionCard.scss'
const CollectionCard = ({ id, name, image, traits }) => {
    return (
        <div className='collectionCard'>
            <img src={image} alt="" />
            <div className="details">
                <div className="name">
                    {name} <div className="id">#{id}</div>
                </div>
                <div className="priceContainer">
                    <img src={require('../../assets/weth.png').default} className='wethImage' alt="weth" />
                    <div className="price">{traits[0]?.value}</div>
                </div>
            </div>
        </div>
    )
}

export default CollectionCard
