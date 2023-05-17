import React from 'react';

function Button({buttonType, clickHandler, buttonDisabled, children}) {

    return (
        <button
            type={buttonType}
            onClick={clickHandler}
                disabled={buttonDisabled}
        >{children}</button>
    );
}

export default Button;