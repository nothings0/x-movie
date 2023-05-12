import React from 'react'
import PropTypes from 'prop-types'


const add = require("../assets/add.png")

const Button = props => {
    const bg = props.bg ? 'bg-' + props.bg : 'bg-main'

    const text = props.text ? props.text : null

    return (
        <button
            className={`btn ${bg}`}
            onClick={props.onClick ? () => props.onClick() : null}
        >
            {
                props.icon ? (
                    <span className="btn__icon">
                        <img srcSet={`${add} 2x`} alt="" />
                    </span>
                ) : null
            }
            {
                props.text ? <span className="btn__txt">{text}</span> : null
            }
        </button>
    )
}

Button.propTypes = {
    bg: PropTypes.string,
    icon: PropTypes.bool,
    onClick: PropTypes.func
}

export default Button