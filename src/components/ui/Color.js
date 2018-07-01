import React from "react";
import StarRating from "./StarRating";
import TimeAgo from "./TimeAgo";
import PropTypes from "prop-types";
import "../../../stylesheets/Color.scss";
import FaTrash from "react-icons/lib/fa/trash-o";

const Color = ({ color, title, rating, timestamp, onRate = f => f, onRemove = f => f }) =>
    <section className="color">
        <h1>{title}</h1>
        <button onClick={onRemove}>
            <FaTrash />
        </button>
        <div className="color"
            style={{ backgroundColor: color }}>
        </div>
        <TimeAgo timestamp={timestamp} />
        <div>
            <StarRating starsSelected={rating}
                onRate={onRate} />
        </div>
    </section>

Color.propTypes = {
    color: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    rating: PropTypes.number,
    timestamp: PropTypes.string,
    onRate: PropTypes.func,
    onRemove: PropTypes.func
}

export default Color;