import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import auth from "../firebase.init";
import PropTypes from 'prop-types';

export const AuthContext = createContext(null)

const Provider = ({children}) => {
   const [user, setUser] = useState(null)
   const [newses, setNewses] = useState([])
   const [categories, setCategories] = useState([])
   const [matchesID, setMatchesID] = useState(null)
   const [loading, setLoading] = useState(true)

   const createUser = (email, password) => {
      setLoading(true)
      return createUserWithEmailAndPassword(auth, email, password)
   }

   const LogIn = (email, password) => {
      setLoading(true)
      return signInWithEmailAndPassword(auth, email, password)
   }

   const googleLogin = (googleProvider) => {
      setLoading(true)
      return signInWithPopup(auth, googleProvider)
   }

   const githubLogin = (githubProvider) => {
      setLoading(true)
      return signInWithPopup(auth, githubProvider)
   }

   useEffect(() => {
      fetch('news.json')
         .then(res => res.json())
         .then(data => setNewses(data))
      
      fetch('categories.json')
         .then(res => res.json())
         .then(data => setCategories(data))

      const unSubscribe = onAuthStateChanged(auth, currentUser => {
         setUser(currentUser)
         setLoading(false)
      })
      return () => {
         unSubscribe()
      }
   },[])

   const info = {user, createUser, LogIn, newses, categories, loading, googleLogin, githubLogin, matchesID, setMatchesID}

   return (
      <AuthContext.Provider value={info}>
         {children}
      </AuthContext.Provider>
   );
};

Provider.propTypes = {
   children: PropTypes.object.isRequired,
}

export default Provider;