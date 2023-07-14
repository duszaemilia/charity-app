import React, {useEffect, useState} from "react";
import HomeHeader from "./HomeHeader";
import {app} from "../../configs/firebase";
import { getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged  } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';

export default function Home() {
    const auth = getAuth(app);
    const [user, setUser] = useState(null);
    const login = () => {
        signInWithEmailAndPassword(auth, 'test@test.com', 'password');
    };
    const logout = () => {
        signOut(auth);
    };

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            // if (user) {
            //     // User is signed in, see docs for a list of available properties
            //     // https://firebase.google.com/docs/reference/js/auth.user
            //     const uid = user.uid;
            //     console.log(user)
            //     // ...
            // } else {
            //     // User is signed out
            //     // ...
            //     console.log("")
            // }
            setUser(user)
        });
    }, [])
    return (
        <>
            <HomeHeader/>
            {
                user ? <button onClick={logout}>Log out</button> : <button onClick={login}>Log in</button>
            }
        </>
    )
}