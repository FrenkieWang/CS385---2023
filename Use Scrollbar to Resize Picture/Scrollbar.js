import React from 'react';

var scrollValue = 400;

const Scrollbar = ({onChange}) => {
    const handScroll = (e) => {
        const value = e.target.value;
        onChange(value);
        scrollValue = value;
    };

    return (
        <div className = "Scrollbar">
            <h4>{scrollValue}</h4>
            <input
                type="range"
                min = "50"
                max = "500"
                defaultValue = "400"
                onChange = {handScroll}
            />
        </div>

    )
};

export default Scrollbar;