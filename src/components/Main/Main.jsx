import React from 'react'
import './main.scss'
const Main = () => {
    return (
        <div className='main'>
            <div className="mainContent">
                <div className="punkHighlight">
                    <div className="punkContainer">
                        {/* <img src={activePunk.image_original_url} alt="" /> */}
                        <img src="https://ipfs.io/ipfs/bafkreiasgnibw32isqfyjnv5lhj4wxzp6izayculjlo4ampmmfla3j4tj4" className='selectedPunk' alt="" />
                    </div>
                </div>
                <div className="punkDetails" style={{ color: "#fff" }}>
                    <h1 className="title">Bandana Punk</h1>
                    <span className="itemNumber">#3</span>
                </div>
                <div className="owner">
                    <div className="ownerImageContainer">
                    <img src="https://ipfs.io/ipfs/bafkreiasgnibw32isqfyjnv5lhj4wxzp6izayculjlo4ampmmfla3j4tj4" className='selectedPunk' alt="" />
                    </div>
                    <div className="ownerDetails">
                        <div className="ownerNameHandle">
                            <div>19020610</div>
                            <div className='ownerHandle'>shivkumarpprajapat28@gmail.com</div>
                        </div>
                        <div className="ownerlink">
                            <img src={require('../../assets/owner/instagram.png').default} alt="" />
                        </div>
                        <div className="ownerlink">
                            <img src={require('../../assets/owner/twitter.png').default} alt="" />
                        </div>
                        <div className="ownerlink">
                            <img src={require('../../assets/owner/more.png').default} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main
