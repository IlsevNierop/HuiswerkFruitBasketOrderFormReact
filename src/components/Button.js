import React from 'react';

function Button({buttonType, clickHandler, buttonDisabled,className, children}) {

    return (
        <button className={className}
            type={buttonType}
            onClick={clickHandler}
                disabled={buttonDisabled}
        >{children}</button>
    );
}

export default Button;