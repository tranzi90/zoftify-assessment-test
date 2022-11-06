import { FC } from "react";
import BackButton from "./UI/BackButton";

interface IHeader {
    title: string;
    backButton?: boolean | false;
    link?: string;
}

const Header: FC<IHeader> = ({ title, backButton, link }) => {
    return (
        <div className="h-12 bg-white px-5 py-3 text-lg">
            {backButton && <BackButton link={link || ""} />}
            {title}
        </div>
    );
};

export default Header