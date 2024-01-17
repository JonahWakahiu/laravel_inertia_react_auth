import { useState } from "react";
import InputLabel from "../components/InputLabel";
import TextField from "../components/TextField";
import GuestLayout from "../layouts/GuestLayout";
import { Head, useForm, Link } from "@inertiajs/react";
import { CiLock, CiUnlock } from "react-icons/ci";
import PrimaryButton from "../components/PrimaryButton";

const Register = () => {
    const [viewPassword, setViewPassword] = useState("password");
    const [viewPasswordConfirm, setViewPasswordConfirm] = useState("password");

    const { data, setData, errors, post, processing } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    const handleRegistration = (e) => {
        e.preventDefault();
    };
    return (
        <GuestLayout>
            <Head title="Register" />
            <form onSubmit={handleRegistration} className="form">
                <h1 className="form_title">Create an account</h1>
                <div className="form_divider"></div>
                <div>
                    <InputLabel value="Name" htmlFor="name" />
                    <TextField
                        name="name"
                        value={data.name}
                        id="name"
                        onChange={(e) => setData("name", e.target.value)}
                    />
                    {errors.name && <p className="form_error">{errors.name}</p>}
                </div>
                <div>
                    <InputLabel value="Email" htmlFor="email" />
                    <TextField
                        name="name"
                        value={data.email}
                        id="email"
                        type="email"
                        onChange={(e) => setData("email", e.target.value)}
                    />
                    {errors.email && (
                        <p className="form_error">{errors.email}</p>
                    )}
                </div>
                <div>
                    <InputLabel value="Password" htmlFor="password" />
                    <div className="form_password">
                        <TextField
                            name="password"
                            value={data.password}
                            id="password"
                            type={viewPassword}
                            onChange={(e) =>
                                setData("password", e.target.value)
                            }
                        />
                        {viewPassword === "password" ? (
                            <CiLock onClick={() => setViewPassword("text")} />
                        ) : (
                            <CiUnlock
                                onClick={() => setViewPassword("password")}
                            />
                        )}
                    </div>
                    {errors.password && (
                        <p className="form_error">{errors.password}</p>
                    )}
                </div>
                <div>
                    <InputLabel
                        value="Confirm Password"
                        htmlFor="password_confirmation"
                    />
                    <div className="form_password">
                        <TextField
                            name="password_confirmation"
                            value={data.password_confirmation}
                            id="password"
                            type={viewPasswordConfirm}
                            onChange={(e) =>
                                setData("password_confirmation", e.target.value)
                            }
                        />
                        {viewPasswordConfirm === "password" ? (
                            <CiLock
                                onClick={() => setViewPasswordConfirm("text")}
                            />
                        ) : (
                            <CiUnlock
                                onClick={() =>
                                    setViewPasswordConfirm("password")
                                }
                            />
                        )}
                    </div>
                </div>
                <div className="form_actions">
                    <Link href="#">Already registered?</Link>
                    <PrimaryButton type="submit">Register</PrimaryButton>
                </div>
            </form>
        </GuestLayout>
    );
};
export default Register;
