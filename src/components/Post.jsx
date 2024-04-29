import React from 'react'
import { Favorite, FavoriteBorder, MoreVert, Share } from '@mui/icons-material'
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from '@mui/material'


const Post = () => {
  return (
    <Card sx={{margin:5}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "Orange" }} aria-label="card">
            E
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title="Erik Heringer"
        subheader="29 de Abril de 2024"
      />
      <CardMedia
        component="img"
        height="20%"
        image="https://images.unsplash.com/photo-1585771724684-38269d6639fd?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="A headset picture"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Foto que tirei de um headset brabo!!!😎😜🤙
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Checkbox icon={<FavoriteBorder/>} checkedIcon={<Favorite sx={{color: "red"}}/>}/>
        </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
      </CardActions>
    </Card>

    
  )
}

export default Post;