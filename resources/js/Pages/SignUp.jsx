import {Head, Link, useForm} from "@inertiajs/react";
import AppLayout from "@/Layouts/AppLayout.jsx";
import {useEffect} from "react";
import playActionSound from "@/Helpers/play_action_sound.js";
function SignUp({auth}) {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const login = (e) => {
        e.preventDefault();
        playActionSound();
        post(route('register'));
    };

    return (
        <>
            <Head title="Sign up"/>
            <div className="login-layout">
                <h1 className="pretty-font gradient-text">Wonderland of Wisdom</h1>
                <p className="gradient-text">
                    Welcome dear wanderer,
                    please sign up to continue
                </p>

                <form className="login-form" onSubmit={login}>
                    <div className="form-group">
                        <label>Name</label>
                        <input className="form-control" type="text" name="name" value={data.name} autoComplete="username" onChange={(e) => setData('name', e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input className="form-control" type="email" name="email" value={data.email} autoComplete="username" onChange={(e) => setData('email', e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input className="form-control" type="password" name="password" value={data.password} autoComplete="current-password" onChange={(e) => setData('password', e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label>Confirm your password</label>
                        <input className="form-control" type="password" name="password_confirmation" value={data.password_confirmation} autoComplete="current-password" onChange={(e) => setData('password_confirmation', e.target.value)}/>
                    </div>
                    <p className="login-text">
                        Already have an account?<br/>
                        <Link href={route('home')}>Login instead</Link>
                    </p>
                    <button className="btn btn-primary" type="submit">Sign up</button>
                </form>
            </div>
        </>
    )
}

SignUp.layout = page => <AppLayout children={page}/>
export default SignUp;
