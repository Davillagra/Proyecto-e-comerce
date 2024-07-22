import { Button, Grid } from "@mui/material"
import { useContext } from "react"
import { AuthContext } from "../../../context/AuthContext"
import GoogleIcon from "@mui/icons-material/Google"
import MicrosoftIcon from "@mui/icons-material/Microsoft"
import FacebookIcon from "@mui/icons-material/Facebook"
import "./Login.css"

export const Login = () => {
  const { handleSubmitWithGoogle } = useContext(AuthContext)

  return (
    <div className="buttonList">
      <Grid className="grid" container>
        <Button
          className="loginButton"
          xs={8}
          variant="outlined"
          onClick={handleSubmitWithGoogle}
        >
          <p>Continuar con Google</p>
          <GoogleIcon />
        </Button>
      </Grid>
      <Grid className="grid" container>
        <Button
          className="loginButton"
          disabled="true"
          variant="outlined"
          onClick={handleSubmitWithGoogle}
        >
          <p>Continuar con Microsoft</p>
          <MicrosoftIcon />
        </Button>
      </Grid>
      <Grid className="grid" container>
        <Button
          className="loginButton"
          disabled="true"
          variant="outlined"
          onClick={handleSubmitWithGoogle}
        >
          <p>Continuar con Facebook</p>
          <FacebookIcon />
        </Button>
      </Grid>
    </div>
  )
}
