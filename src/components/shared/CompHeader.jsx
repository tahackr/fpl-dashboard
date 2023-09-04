import PropTypes from "prop-types";

function CompHeader({ children, className }) {
    CompHeader.propTypes = {
        children: PropTypes.string,
        className: PropTypes.string,
    };
    return (
        <h2 className={`p-1 mb-2 font-bold text-xl ${className}`}>
            {children}
        </h2>
    );
}

export default CompHeader;
