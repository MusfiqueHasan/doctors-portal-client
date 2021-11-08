import { useEffect, useState } from "react";
import initializeFirebase from "../Pages/Login/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile, getIdToken } from "firebase/auth";
import axios from "axios";



// initialize firebase app
initializeFirebase()
const useFirebase = () => {

    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true)
    const [authError, setAuthError] = useState('')
    const [admin, setAdmin] = useState(false);
    const [token, setToken] = useState('')
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const registerUser = (email, password, name, history) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setAuthError('')
                const newUser = { email, displayName: name }
                setUser(newUser);
                // save user to database
                savedUser(email, name)
                // send name to firebase after creation
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {

                }).catch((error) => {

                });
                history.replace('/')

            })
            .catch((error) => {
                setAuthError(error.message)

            })
            .finally(() => setIsLoading(false))
    }

    const loginUser = (email, password, location, history) => {
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/'
                history.replace(destination)
                setAuthError('')

            })
            .catch((error) => {
                setAuthError(error.message)
            })
            .finally(() => setIsLoading(false))
    }


    const signInWithGoogle = (location, history) => {
        setIsLoading(true)
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                savedUserForGoogle(user.email, user.displayName)
                setAuthError('')
                const destination = location?.state?.from || '/'
                history.replace(destination)

            }).catch((error) => {
                setAuthError(error.message)

            })
            .finally(() => setIsLoading(false))

    }
    // observe user state
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
                getIdToken(user)
                    .then(idToken => {
                        setToken(idToken)
                    })
            } else {
                setUser({})
            }
            setIsLoading(false)
        });

        return () => unsubscribe
    }, [auth])

    useEffect(() => {
        axios.get(`https://dry-ocean-42817.herokuapp.com/users/${user.email}`)
            .then(res => {
                setAdmin(res.data.admin)
            })
    }, [user.email])

    const logOut = () => {
        setIsLoading(true)
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        })
            .finally(() => setIsLoading(false))
    }

    const savedUser = (email, displayName) => {
        const user = { email, displayName };
        axios.post('https://dry-ocean-42817.herokuapp.com/users', user)
            .then(res => {

            })
    }
    const savedUserForGoogle = (email, displayName) => {
        const user = { email, displayName };
        axios.put('https://dry-ocean-42817.herokuapp.com/users', user)
            .then(res => {

            })
    }
    return {
        user,
        admin,
        token,
        registerUser,
        logOut,
        loginUser,
        isLoading,
        authError,
        signInWithGoogle
    }

};

export default useFirebase;