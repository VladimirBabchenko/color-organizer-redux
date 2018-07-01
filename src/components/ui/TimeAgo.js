import React from "react";
import { ago } from "../../lib/time-helpers";
import { PropTypes } from "prop-types";

const TimeAgo = ({ timestamp }) =>
    <div className="time-age">
        {ago(timestamp)}
    </div>

TimeAgo.propTypes = {
    timestamp: PropTypes.string
}

export default TimeAgo;