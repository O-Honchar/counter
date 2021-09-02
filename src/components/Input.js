import React from 'react';
import PropTypes from 'prop-types';

function Input({ value, renewValue }) {

    function chargeHandler(event) {
        if (!Number.isNaN(+event.target.value)) {
            renewValue(+event.target.value);
        }
    }

    return (
        <input type="text" value={value} onChange={chargeHandler} />
    );
}

Input.propTypes = {
    value: PropTypes.number.isRequired,
    renewValue: PropTypes.func.isRequired,
};

export default Input;
