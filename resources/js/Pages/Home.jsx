import {Head, Link, useForm} from "@inertiajs/react";
import AppLayout from "@/Layouts/AppLayout.jsx";
import {useEffect} from "react";
import playActionSound from "@/Helpers/play_action_sound.js";

function Home({auth}) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const login = (e) => {
        e.preventDefault();
        playActionSound();
        post(route('login'));
    };

    return (
        <>
            <Head title="Home"/>
            <div className="login-layout">
                <h1 className="pretty-font gradient-text">Wonderland of Wisdom</h1>
                <p className="gradient-text">
                    Welcome dear wanderer,
                    please sign in to continue
                </p>

                <form className="login-form" onSubmit={login}>
                    <div className="form-group">
                        <label>Email</label>
                        <input className="form-control" type="email" name="email" value={data.email} autoComplete="username" onChange={(e) => setData('email', e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input className="form-control" type="password" name="password" value={data.password} autoComplete="current-password" onChange={(e) => setData('password', e.target.value)}/>
                    </div>
                    <p className="login-text">
                        Don't have an account?<br/>
                        <Link href={route('sign_up')}>Sign up right now</Link>
                    </p>
                    <button className="btn btn-primary" type="submit">Log in</button>
                </form>
            </div>
        </>
    )
}

Home.layout = page => <AppLayout children={page}/>
export default Home;
