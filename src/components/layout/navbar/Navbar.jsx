import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Badge,
  Grid,
  IconButton,
  styled,
  Switch,
  TextField,
} from "@mui/material"
import "./Navbar.css"
import {
  HomeOutlined,
  Search,
  AccountCircleOutlined,
  Inventory2Outlined,
  ExpandMore,
  ShoppingCartOutlined,
} from "@mui/icons-material"
import { useContext, useState } from "react"
import { Link as CustomLink, useNavigate } from "react-router-dom"
import { AuthContext } from "../../../context/AuthContext"
import { CartContext } from "../../../context/CartContext"

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -0,
    top: -0,
    border: `1px solid ${theme}`,
    padding: "0 4px",
  },
}))

export const Navbar = ({ onThemeChange }) => {
  const [themeHanlder, setThemeHanlder] = useState(true)
  const handleThemeChange = () => {
    const newThemeHandler = !themeHanlder
    setThemeHanlder(newThemeHandler)
    onThemeChange(newThemeHandler)
  }
  const [expanded, setExpanded] = useState(false)
  const handleMouseEnter = () => {
    setExpanded(true)
  }
  const handleMouseLeave = () => {
    setExpanded(false)
  }
  const { userData } = useContext(AuthContext)
  const { getTotalQuantity } = useContext(CartContext)
  const navigate = useNavigate()

  return (
    <>
      <Grid container className="container">
        <Grid container item action="" xs={12} className="search">
          <Grid className="searchBox" item xs={8}>
            <TextField
              id="outlined-basic"
              label="Buscar"
              variant="outlined"
              className="searchFields"
            />
          </Grid>
          <Grid item xs={2}>
            <IconButton className="searchFields" color="primary">
              <Search />
            </IconButton>
          </Grid>
          <Grid item xs={2}>
            <Switch checked={themeHanlder} onChange={handleThemeChange} />
          </Grid>
        </Grid>
        <Grid container item className="navigation">
          <Grid container item xs={8} className="navigationLinks">
            <HomeOutlined
              className="icons"
              color="primary"
              onClick={() => navigate("/")}
            />
            <Accordion
              className="prodAccordion"
              expanded={expanded}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <AccordionSummary
                className="accordionSummary"
                expandIcon={<ExpandMore color="primary" />}
              >
                <Inventory2Outlined className="icons" color="primary" />
              </AccordionSummary>
              <AccordionDetails className="prodCategory">
                <CustomLink onClick={handleMouseLeave} to="/">
                  Todo
                </CustomLink>
              </AccordionDetails>
              <AccordionDetails className="prodCategory">
                <CustomLink onClick={handleMouseLeave} to="category/urbanas">
                  Urbanas
                </CustomLink>
              </AccordionDetails>
              <AccordionDetails>
                <CustomLink onClick={handleMouseLeave} to="category/deportivas">
                  Deportivas
                </CustomLink>
              </AccordionDetails>
            </Accordion>
            <CustomLink to="/cart">
              <StyledBadge badgeContent={getTotalQuantity()} color="warning">
                <ShoppingCartOutlined color="primary" className="icons" />
              </StyledBadge>
            </CustomLink>
            {userData.user !== undefined ? (
              <img
                className="profilePicture"
                src={userData.user.photoURL}
                alt={userData.user.displayName}
              />
            ) : (
              <AccountCircleOutlined
                onClick={() => navigate("/login")}
                className="icons"
                color="primary"
              />
            )}
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}
