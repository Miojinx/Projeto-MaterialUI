import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import React from 'react'

const Rightbar = () => {
  return (
    <Box flex={2} p={2}
      sx={{
        display: {
          xs: "none", sm: "block"
        }
      }}>
      <Box position="fixed" width={300}>


        <Typography variant='h6' fontWeight={100}>Amigos Online</Typography>
        <AvatarGroup max={7}>

          <Avatar alt="Paulo" src="https://digilander.libero.it/p_truth/the_truth/faux_paul_mccartney_airport_1967.jpg" />
          <Avatar alt="" src="" />
          <Avatar alt="João" src="https://i.pinimg.com/474x/a1/77/91/a17791584a690ccabe4c3425886e696a.jpg" />
          <Avatar alt="Rindo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT10udo4gbmlxspgnZUVH2ZrONosYQ9DF0rsB3TE4jyzg&s" />
          <Avatar alt="Jorge" src="https://i.pinimg.com/736x/06/26/ad/0626ada71c483324e37f719a8ac97409.jpg" />
          <Avatar alt="patricia" src="https://material-ui.com/static/images/avatar/3.jpg" />
          <Avatar alt="raimundo" src="https://material-ui.com/static/images/avatar/9.jpg" />
          <Avatar alt="alfredo" src="https://material-ui.com/static/images/avatar/10.jpg" />
          <Avatar alt="zé" src="https://material-ui.com/static/images/avatar/11.jpg" />

        </AvatarGroup>


     <Typography variant='h6' fontWeight={100} mt={2} mb={2}>Últimas Imagens</Typography>
        <ImageList cols={3} rowHeight={100} gap={5}>

          <ImageListItem>
            <img src='https://plus.unsplash.com/premium_photo-1675629118284-c9eb039df8cd?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8' />
          </ImageListItem>
          <ImageListItem>
            <img src='https://plus.unsplash.com/premium_photo-1711508491462-5567bb2f1e33?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8' />
          </ImageListItem>
          <ImageListItem>
            <img src='https://images.unsplash.com/photo-1714108671525-a8f722f30632?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8' />
          </ImageListItem>
          <ImageListItem>
            <img src='https://images.unsplash.com/photo-1714139009590-e397d21023d8?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
          </ImageListItem>
          <ImageListItem>
            <img src='https://images.unsplash.com/photo-1713449164257-f40040098caa?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
          </ImageListItem>
          <ImageListItem>
            <img src='https://images.unsplash.com/photo-1714368904284-1e6724de1714?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
          </ImageListItem>

        </ImageList>


        <Typography variant='h6' fontWeight={100} mt={2}>Últimas Conversas</Typography>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Rolé esse fim de semana?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Maria
              </Typography>
              {" - Esse fim de semana vou estar por aí e queria saber se..."}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src=""/>
        </ListItemAvatar>
        <ListItemText
          primary="Churrascão da Galera"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Para Jennifer, Carlos e Alexandre
              </Typography>
              {" — Rapaziada eu até passei lá no açougue pra comprar a carne mas..."}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="" />
        </ListItemAvatar>
        <ListItemText
          primary="Lista do Mercado"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Eu
              </Typography>
              {' — 1 Queijo Minas, 2 Cocas, Manteiga, 500g Alcatra...'}
            </React.Fragment>
          }
        />
      </ListItem>
    
    </List>


      </Box>
    </Box>
  )
}

export default Rightbar