import { BsGithub, BsLinkedin } from "react-icons/bs";

function Footer() {
    return (
        <footer className="select-none bg-[rgb(55_0_60)] text-white py-8 px-12 flex justify-between gap-6 max-[750px]:flex-col max-[350px]:px-4">
            <p className="font-medium max-[750px]:m-auto">
                Portfolio project by{" "}
                <span className="font-bold">Taha Çakır</span>
            </p>
            <div className="flex gap-12 max-[750px]:m-auto">
                <a
                    href="https://github.com/tahackr"
                    target="_blank"
                    rel="noreferrer"
                >
                    <div className="flex items-center gap-2">
                        <BsGithub />
                        <span className="font-semibold">tahackr</span>
                    </div>
                </a>
                <a
                    href="https://www.linkedin.com/in/tahascakir/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <div className="flex items-center gap-2">
                        <BsLinkedin />
                        <span className="font-semibold">tahascakir</span>
                    </div>
                </a>
            </div>
        </footer>
    );
}

export default Footer;
