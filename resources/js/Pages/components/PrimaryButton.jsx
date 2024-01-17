const PrimaryButton = ({ type = "button", children }) => {
    return (
        <button type={type} className="btn">
            {children}
        </button>
    );
};
export default PrimaryButton;
