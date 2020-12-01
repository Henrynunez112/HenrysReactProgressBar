import React from 'react';
import "./ProgressBar.css";

const ProgressBar = ({ bgColor, completed }) => {
  const containerStyles = {
    height: 20,
    width: '100%',
    backgroundColor: "#e0e0de",
    borderRadius: 50,
    // margin: 50
  }

  const fillerStyles = {
    height: '100%',
    width: `${completed}%`,
    backgroundColor: bgColor,
    borderRadius: 'inherit',
    textAlign: 'right',
    // transition: 'width 0.5s ease-in-out'
  }

  const labelStyles = {
    padding: 5,
    color: 'white',
    fontWeight: 'bold'
  }

  return (
    <div style={containerStyles} className="containerStyles">
      <div style={fillerStyles}>
        <span style={labelStyles}>{`${completed}`}</span>
      </div>

    </div>
  )

}
export default ProgressBar;