const TextField = ({ type = "text", ...props }) => {
    return <input type={type} className="form_control" {...props} />;
};
export default TextField;
