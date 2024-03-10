import "./header.css";

const Header = ({ title }) => {
    return(
        <>
            <h1>{title}</h1>
            <hr className="custom-hr" />
        </>
    )
};

export default Header;
