import { createContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { loginWithGoogle } from "../firebaseConfig"

export const AuthContext = createContext()

const AuthContextProvider = ({ children }) => {
  const [userData, setUserData] = useState({})
  /*const navigate = useNavigate()
  const handleSubmit = async () => {
    let res = await login(data)
    console.log(res)
    navigate("/")
  }*/
  const handleSubmitWithGoogle = async () => {
    let userData = await loginWithGoogle()
    setUserData(userData)
  }

  let data = {
    handleSubmitWithGoogle,
    userData,
  }
  return <AuthContext.Provider value={data}> {children} </AuthContext.Provider>
}

export default AuthContextProvider
