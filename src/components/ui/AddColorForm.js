import React from "react";
import PropTypes from "prop-types";
import "../../../stylesheets/AddColorForm.scss";

const AddColorForm = ({ onNewColor = f => f }) => {
    let _title, _color;

    const submit = (e) => {
        e.preventDefault();
        onNewColor(_title.value, _color.value);
        _title.value = "";
        _color.value = "";
        _title.focus();
    }

    return (
        <form className="add-color" onSubmit={submit}>
            <input type="text"
                ref={inp => _title = inp}
                placeholder="add color" required />
            <input type="color"
                ref={inp => _color = inp} required />
            <button>ADD</button>
        </form>
    )
}

AddColorForm.propTypes = {
    onNewColor: PropTypes.func
}

export default AddColorForm;