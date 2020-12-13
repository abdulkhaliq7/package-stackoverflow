import React from 'react';
import './PackageCard.css';

function PackageCard({ image, text, title }) {

    return (
            <div className='package' >
                <embed src={image}  className="thumbnail"/>
                <h1 className='package__text' style={{margin:'20px 25%', fontSize:'21px', color:"white", fontWeight:'lighter'}}>{title}</h1>
                <div className="package__preview">
                    <p className='package__text'>
                        {text}
                    </p>
                    <button className='btn-package'>more details</button>
                </div>
            </div>
    )
}

export default PackageCard
