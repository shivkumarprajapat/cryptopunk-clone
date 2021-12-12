import React from 'react'
import CollectionCard from '../Collection/CollectionCard';
import './punkList.scss'
const PunkList = ({ punkListData,setSelectedPunk }) => {
    return (
        <div className='punkList'>
            {
                punkListData.map((punk, index) => {
                    const { traits, name, image_url, token_id } = punk;
                    return (
                        <div
                            onClick={() => setSelectedPunk(token_id)}
                            key={index}
                        >
                            <CollectionCard
                                id={token_id}
                                name={name}
                                traits={traits}
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
