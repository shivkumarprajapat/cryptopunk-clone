import React from 'react'
import CollectionCard from '../Collection/CollectionCard';
import './punkList.scss'
const PunkList = ({ punkListData }) => {
    return (
        <div className='punkList'>
            {
                punkListData.map((punk, index) => {
                    const { id, name, image_url, token_id } = punk;
                    return (
                        <div key={index}>
                            <CollectionCard
                                id={id}
                                name={name}
                                traits={[{ value: token_id }]}
                                image={image_url}
                            />

                        </div>
                    )
                })
            }
        </div>
    )
}

export default PunkList
