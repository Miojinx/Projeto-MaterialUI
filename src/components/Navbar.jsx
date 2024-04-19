import { AppBar, InputBase, Toolbar, Typography, styled, Badge, Avatar,} from '@mui/material'
import React from 'react'
import PublicIcon from '@mui/icons-material/Public';
import MailIcon from '@mui/icons-material/Mail'
import { Notifications } from '@mui/icons-material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between"
})

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%"
}))

const Icons = styled("Box")(({ theme }) => ({
  display:'none',
  gap: "20px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]:{
    display: "flex"
  }
}))

const UserBox = styled("Box")(({ theme }) => ({
  display:'flex',
  gap: "10px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]:{
    display: "none"
  }
}))


const Navbar = () => {
  return (
    <AppBar position='sticky'>
      <StyledToolbar>
        <Typography variant='h6' sx={{
          display: { xs: "none", sm: "block" }
        }}>Erik.com</Typography>
        <PublicIcon sx={{
          display: { xs: "block", sm: "none" }
        }} />
        <Search><InputBase placeholder='search...' /></Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <MailIcon/>
          </Badge>
          <Badge badgeContent={2} color="error">
            <Notifications/>
          </Badge>
          <Avatar sx={{width: 30, height:30}} src={<AccountCircleIcon/>}/>
        </Icons>
        <UserBox>
        <Avatar sx={{width: 30, height:30}} src={<AccountCircleIcon/>}/>
        <Typography variant='span'>User</Typography>
        </UserBox>
      </StyledToolbar>
    </AppBar>
  )
}

export default Navbar