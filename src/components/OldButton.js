import React from 'react';
import {Link} from 'react-router-dom';

const OldButton = (props) => {
    return (
        <div>
        {/* https://github.com/ReactTraining/react-router/issues/1176 */}
        <Link to="/oldApod">
            <button onClick={props.oldButton}>Check Out Past Dates</button>
            </Link>
        </div>
    )
}
export default OldButton;