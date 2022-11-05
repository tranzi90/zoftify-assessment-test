import { FC } from "react";

interface IHeader {
    title: string;
    backButton?: boolean | false;
    link?: string;
}

const Header: FC<IHeader> = ({ title, backButton, link }) => {
    return (
        <div className={}>
            {backButton && <BackBtn link={link || ""} />}
            {title}
        </div>
    );
};

export default Header;