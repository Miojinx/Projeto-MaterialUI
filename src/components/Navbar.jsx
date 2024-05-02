import { AppBar, InputBase, Toolbar, Typography, styled, Badge, Avatar, MenuItem, Menu } from '@mui/material'
import React, { useState } from 'react'
import PublicIcon from '@mui/icons-material/Public';
import MailIcon from '@mui/icons-material/Mail'
import { Notifications } from '@mui/icons-material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  backgroundColor:"#795695"
})

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%"
}))

const Icons = styled("Box")(({ theme }) => ({
  display: 'none',
  gap: "20px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "flex"
  }
}))

const UserBox = styled("Box")(({ theme }) => ({
  display: 'flex',
  gap: "10px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "none"
  }
}))


const Navbar = () => {

  const [open, setOpen] = useState(false)

  return (
    <AppBar position='sticky' >

      <StyledToolbar>
        <Typography variant='h6' sx={{
          display: { xs: "none", sm: "block" }
        }}>Erik.com</Typography>
        <PublicIcon sx={{
          display: { xs: "block", sm: "none" }
        }} />

        <Search><InputBase placeholder='pesquisa...' /></Search>

        <Icons>
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
          <Badge badgeContent={2} color="error">
            <Notifications />
          </Badge>
          <Avatar sx={{ width: 30, height: 30 }} src={<AccountCircleIcon />} onClick={e => setOpen(true)} />
        </Icons>

        <UserBox>
          <Avatar sx={{ width: 30, height: 30 }} src={<AccountCircleIcon />} onClick={e => setOpen(true)} />
          <Typography variant='span'>User</Typography>
        </UserBox>
      </StyledToolbar>

      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={e=>setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem>Perfil</MenuItem>
        <MenuItem>Minha conta</MenuItem>
        <MenuItem>Sair</MenuItem>
      </Menu>

    </AppBar>
  )
}

export default Navbar