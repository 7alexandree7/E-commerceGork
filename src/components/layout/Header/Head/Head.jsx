import './Head.css'
import React from 'react'

const Head = () => {
    return (
        <>
            <header className='head'>
                <div className="container d_flex">

                    <div className="left row">
                        <i className='fa fa-phone'></i>
                        <label>+88012 3457 7894</label>
                        <i className='fa fa-envelope'></i>
                        <label>example@gmail.com</label>
                    </div>

                    <div className="right row RText">
                        <label>Theme FAQ ' s</label>
                        <label>Nedd Helps</label>
                        <span>🏳️‍⚧️</span>
                        <label>EN</label>
                        <span>🏳️‍⚧️</span>
                        <label>USD</label>
                    </div>

                </div>
            </header>
        </>
    )
}

export default Head
