import { useState } from "react";
import InputLabel from "../components/InputLabel";
import TextField from "../components/TextField";
import GuestLayout from "../layouts/GuestLayout";
import { CiLock, CiUnlock } from "react-icons/ci";
import PrimaryButton from "../components/PrimaryButton";
import { Head, Link, useForm } from "@inertiajs/react";

const Login = () => {
    const [viewPassword, setViewPassword] = useState("password");
    const { data, setData, errors, post, processing } = useForm({
        email: "",
        password: "",
    });

    const handleLogin = (e) => {
        e.preventDefault();
    };
    return (
        <GuestLayout>
            <Head title="login" />

            <form onSubmit={handleLogin} className="form">
                <h1 className="form_title">Welcome Back!</h1>
                <div className="form_divider"></div>
                <div>
                    <InputLabel value="Email" htmlFor="email" />
                    <TextField
                        name="email"
                        value={data.email}
                        type="email"
                        onChange={(e) => setData("name", e.target.value)}
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
                <div className="form_actions">
                    <Link href="#">Forgot password?</Link>
                    <PrimaryButton type="submit">Log in</PrimaryButton>
                </div>
            </form>
        </GuestLayout>
    );
};
export default Login;
