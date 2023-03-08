import React from 'react';

const MyButton = props => {
    return (
        <button className="my_button" {...props}>
            {props.children}
        </button>
    );
};

export default MyButton;