import React from 'react';

export default props => (
    <div>
        <input style={{ width: "90%", margin: "0 auto" }} type="text" value={props.result} readOnly />
    </div>
)