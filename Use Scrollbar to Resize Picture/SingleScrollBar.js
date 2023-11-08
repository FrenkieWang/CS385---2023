import React, {useState} from 'react';

const Scrollbar = () => {
   const [size, setSize] = useState(250);

  const handleSizeChange = (value) => {
    setSize(value);
  };

    const handScroll = (e) => {
        const value = e.target.value;
        handleSizeChange (value);
    };

    return (
        <div className = "Scrollbar">
          <h4>{size}</h4>
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