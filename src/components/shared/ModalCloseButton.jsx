import { AiOutlineClose } from "react-icons/ai";
import PropTypes from "prop-types";
function ModalCloseButton({ setIsModalOpen, backgroundColor }) {
    ModalCloseButton.propTypes = {
        setIsModalOpen: PropTypes.func,
        backgroundColor: PropTypes.string,
    };
    return (
        <button
            onClick={(e) => {
                e.stopPropagation();
                setIsModalOpen(false);
            }}
            className={`absolute top-0 right-0 p-1 cursor-pointer z-50 ${
                backgroundColor.split(" ").includes("to-white")
                    ? "text-black"
                    : ""
            }`}
        >
            <AiOutlineClose className="w-6 h-6" />
        </button>
    );
}

export default ModalCloseButton;
