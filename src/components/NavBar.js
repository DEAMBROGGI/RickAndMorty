import React, { useEffect } from 'react';
import { Search, SearchIconWrapper, StyledInputBase } from '../styles/NavBarStyles'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import SearchIcon from '@mui/icons-material/Search';
import { useStateValue } from '../core/StateProvider';
import { actionTypes } from '../core/reducer';
import PaginationControl from '../core/Pagination'
import { Grid } from '@mui/material';
import logo from '../assets/Logo.png'


const pages = ['Character', 'Location', 'Episode'];

const NavBar = () => {

  const [{ typeData, compare }, dispatch] = useStateValue()
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  if (typeData !== "compare" && typeData !== "detail") {
    setTimeout(() => {
      document.getElementById(typeData.charAt(0).toUpperCase() + typeData.slice(1)).classList.add("typeSelected")
    }, 1000)
  }
  var buttonSelected = document.querySelectorAll('button[name="type"]')

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  function searchInput(event) {
    let search = event.target.value
    dispatch({
      type: actionTypes.SEARCH,
      apiData: search
    })
    dispatch({
      type: actionTypes.PAGE_NUMBER,
      pageNumber: 1
    })
  }
  function handleClose() {
    setAnchorElNav(null);
  }

  const selectTypeData = (page) => {

    dispatch({
      type: actionTypes.TYPE,
      typeData: page.target.textContent.toLowerCase()
    })
    dispatch({
      type: actionTypes.PAGE_NUMBER,
      pageNumber: 1
    })
  };

  useEffect(() => {
    setTimeout(() => {
      buttonSelected.forEach(btn => {
        btn.id.toLocaleLowerCase() !== typeData ?
          btn.classList.remove("typeSelected") :
          btn.classList.add("typeSelected")
      })
    }, 300)
    // eslint-disable-next-line
  }, [typeData])

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              style={{ color: "rgb(198, 158, 235)" }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleClose}
              sx={{
                display: { xs: 'block', md: 'none' }
              }}
            >
              <MenuItem key="home" onClick={() => dispatch({
                type: actionTypes.TYPE,
                typeData: "home"
              })}
                className="menuResponsive" >
                <Typography textAlign="center">Home</Typography>
              </MenuItem>
              {pages.map((page) => (
                <MenuItem key={page} onClick={selectTypeData} className="menuResponsive" >
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
              {compare.length > 0 &&
                <MenuItem key="compare"
                  onClick={() => dispatch({
                    type: actionTypes.TYPE,
                    typeData: "compare"
                  })}
                  sx={{ display: { xs: 'flex', sm: 'none', md: "none" } }} className='compareResponsive'>
                  {compare?.map(char =>
                    <div className='imgCharResponsive' key={char.id} style={{ backgroundImage: "url(" + char.image + ")" }} />
                  )}

                </MenuItem>
              }
            </Menu>
          </Box>

          <Grid item md={3} sx={{ display: { xs: 'none', md: 'block' } }}>
            <div onClick={() =>
              dispatch({
                type: actionTypes.TYPE,
                typeData: "home"
              })}
              style={{ position: "absolute", left: "-26px", top: "3px", height: "135px", width: "135px", zIndex: 3, cursor: "pointer" }}>
              <img src={logo} style={{ height: "100%" }} alt="logo rick y morty" />
            </div>
          </Grid>
          <Grid sx={{ display: { sx: 'none', md: 'flex', width: "100%", flexDirection: "row", justifyContent: "center" } }} item md={6} >
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', width: "100%", flexDirection: "row", justifyContent: "center" } }}
            >
              {pages.map((page) => (
                <Button
                  className='btnNav'
                  key={page}
                  id={page}
                  name="type"
                  onClick={selectTypeData}
                  style={{ marginRight: "10px", fontSize: "1.2rem", fontFamily: "Comic Sans MS", color: "white" }}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {page}
                </Button>
              ))}
            </Box>
          </Grid>
          <Grid item xs={9} md={3} >
            {typeData !== "detail" && typeData !== "compare" && <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
                onKeyUp={searchInput}
              />
            </Search>}
          </Grid>
        </Toolbar>
      </Container>
      <Box sx={{ display: { sm: 'block', md: "flex" } }} className='pagination'>

        {
          typeData === "compare" ?
            <h1 className="subtitleNavBar ">Comparing characters</h1> :
            typeData === "detail" ?
              <h1 className="subtitleNavBar ">Episode details</h1> :
              <PaginationControl />
        }

        <Box onClick={() => dispatch({
          type: actionTypes.TYPE,
          typeData: "compare"
        })}
          sx={{ display: { xs: 'none', sm: 'flex' } }} className='compare'>
          {compare?.map(char =>
            <div className='imgChar' key={char.id} style={{ backgroundImage: "url(" + char.image + ")" }} />
          )}
        </Box>
      </Box>
    </AppBar>
  );
};
export default NavBar;
