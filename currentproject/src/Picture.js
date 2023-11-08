import React from 'react';

const Picture = ({size}) => {
    return (
        <div style = {{width: `${size}px`, height:  `${size}px`}}>
            <img
                src = "https://source.unsplash.com/300x300/?perth,australia" 
                alt = "Resizable"
                style = {{ width: '100%', height: '100%'}}   
            />
        </div>
    )
}

export default Picture;