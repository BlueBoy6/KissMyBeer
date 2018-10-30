import React from 'react'

const HeaderTextBckg = (props) => {

    const {title, img} = props

    return (
        <div className='headerText-component shadow row mb-3'>
            <div className='col-12 text-center justify-content-center py-5 px-3 radius shadow' style={{backgroundSize : "cover", backgroundPositionY : "50%" ,backgroundImage : `url(${img})`}}>
                <div className='py-5 title2 text'>
                    {title}
                </div>
            </div>
            <div className='bckg-after z0'></div>
        </div>
    )
}

export default HeaderTextBckg
