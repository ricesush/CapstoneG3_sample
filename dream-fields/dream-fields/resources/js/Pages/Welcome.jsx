import { Link, Head } from '@inertiajs/react';

export default function Welcome(props) {
    return (
        <>
            <Head title="Welcome" />
            <div className="">
                <div className="fixed top-0 right-0 px-6 py-4 sm:block">
                    {props.auth.user ? (
                        <Link href={route('dashboard')} className="text-sm text-gray-700 dark:text-gray-500 underline">
                            Dashboard
                        </Link>
                    ) : (
                        <>
                            <Link href={route('login')} className="text-sm text-gray-700 dark:text-gray-500 underline">
                                Log in
                            </Link>

                            <Link
                                href={route('register')}
                                className="ml-4 text-sm text-gray-700 dark:text-gray-500 underline"
                            >
                                Register
                            </Link>
                        </>
                    )}
                </div>
            </div>
            <div className="container">
                    <div className="row text-center d-grid align-items-end  mainContainer">
                        <section>
                            <h1 className="fw-bolder">
                                Find Your <span className="greenText">Dream Property</span>
                            </h1>
                            <h4>
                                Turning Your Dream Realty To Reality
                            </h4>

                        </section>

                        <div className="quickSearchBg d-flex align-items-center justify-content-around mb-lg-3 pt-lg-2 pb-lg-2 rounded-3">
                            <section className="col-3 dropdown">
                                <button className="btn bg-transparent text-light border-0 border-bottom rounded-0 dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Select Property Type
                                </button>
                                <ul className="dropdown-menu ">
                                    <li><button className="dropdown-item" type="button">Action</button></li>
                                    <li><button className="dropdown-item" type="button">Another action</button></li>
                                    <li><button className="dropdown-item" type="button">Something else here</button></li>
                                </ul>
                            </section>
                            <section className="col-3 dropdown text-light">
                                <button className="btn bg-transparent text-light border-0 border-bottom rounded-0 dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Select Location
                                </button>
                                <ul className="dropdown-menu">
                                    <li><button className="dropdown-item" type="button">Action</button></li>
                                    <li><button className="dropdown-item" type="button">Another action</button></li>
                                    <li><button className="dropdown-item" type="button">Something else here</button></li>
                                </ul>
                            </section>
                            <section className="col-3">
                                <div>**Price range goes here**</div>
                            </section>
                            <section className="col-3">
                                <div>**Search Icon**</div>
                            </section>
                        </div>
                    </div>
                </div>
        </>
    );
}
