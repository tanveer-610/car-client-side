import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/Login/Login/Firebase/Firebase.init";
import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword, updateProfile, getIdToken } from "firebase/auth";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [admin, setAdmin] = useState(false);
    const [token, setToken] = useState('')

    const auth = getAuth();

    const registerUser = (email, password, name, history) => {

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {

                const newUser = { email, displayName: name };
                setUser(newUser);
                //save user to database
                saveUser(email, name, "POST");

                // send name to firebase after creation 
                updateProfile(auth.currentUser, {
                    displayName: { name }
                }).then(() => {
                }).catch((error) => {
                });
                history.replace('/');
            })
            .catch((error) => {
                alert("Register Error")
                console.log(error)

            })
            .finally();
    }


    const loginUser = (email, password, location, history) => {

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/';
                history.replace(destination);
            })
            .catch((error) => {

                alert("Login Error")
            })


    }



    // observe user state 
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                getIdToken(user)
                    .then(idToken => {
                        setToken(idToken);
                    })
            } else {
                setUser({})
            }

        });
        return () => unsubscribe;
    }, [auth])

    useEffect(() => {
        fetch(`http://localhost:5000/user/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user.email])

    const logOut = () => {

        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
            alert("Logout Error")
        })

    }

    const saveUser = (email, displayName, methodName) => {
        const user = { email, displayName };
        fetch('http://localhost:5000/users', {
            method: methodName,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()
    }

    return {
        user,
        admin,
        token,
        loginUser,
        registerUser,
        logOut
    }
}
export default useFirebase;