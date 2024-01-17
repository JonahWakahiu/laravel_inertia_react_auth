import { Head, Link } from "@inertiajs/react";

const AuthenticatedLayout = () => {
    return (
        <main className="authenticated_layout">
            <Head title="dDashboard" />
            <aside className="sidebar">
                <p>sidebar</p>
            </aside>
            <article>
                <nav className="navbar">
                    <h5>Welcome to dashboard</h5>
                    <Link
                        href="/logout"
                        method="post"
                        as="button"
                        className="btn"
                    >
                        Logout
                    </Link>
                </nav>
                <section className="main_content">
                    <p>You have successfully login</p>
                </section>
            </article>
        </main>
    );
};
export default AuthenticatedLayout;
