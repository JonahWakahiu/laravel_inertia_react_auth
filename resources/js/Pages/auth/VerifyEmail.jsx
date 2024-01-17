import { Head, Link } from "@inertiajs/react";

const VerifyEmail = () => {
    return (
        <main className="email_container">
            <Head title="email verification" />

            <section className="email_verification">
                <h1 className="email_verification-title">Verify your email</h1>
                <p className="email_verification-desc">
                    Thanks for signing up! Before getting started, could you
                    verify your email address by clicking on the link we just
                    emailed to you? if you didn't receive the email, we will
                    gladly send you another.
                </p>

                <div className="email_verification-actions">
                    <Link href="/" method="post" as="button" className="btn">
                        RESEND VERIFICATION EMAIL
                    </Link>

                    <Link href="/logout">Log Out</Link>
                </div>
            </section>
        </main>
    );
};
export default VerifyEmail;
