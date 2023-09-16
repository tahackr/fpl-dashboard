import PropTypes from "prop-types";

function PageHeader({ children, className }) {
    PageHeader.propTypes = {
        children: PropTypes.string,
        className: PropTypes.string,
    };
    return (
        <header
            className={`relative py-12 bg-[url('https://www.premierleague.com/resources/rebrand/v7.129.0/i/elements/backgrounds/primary-bg.svg')] bg-cover mb-8 after:bg-[url('https://www.premierleague.com/resources/rebrand/v7.129.0/i/elements/backgrounds/primary-graphic.svg')] after:absolute after:top-0 after:h-full after:w-full after:left-0 ${className}`}
        >
            <div className="container m-auto">
                <h1 className="relative z-10 text-[3rem] font-bold pl-2 max-[750px]:text-3xl max-[750px]:py-4">
                    {children}
                </h1>
            </div>
        </header>
    );
}

export default PageHeader;
