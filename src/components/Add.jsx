import React, { useState } from 'react'
import { Add as AddIcon, DateRange, EmojiEmotions, Image, PersonAdd, VideoCameraBack } from '@mui/icons-material'
import { Avatar, Box, Button, ButtonGroup, Fab, Modal, Stack, TextField, Tooltip, Typography, styled } from '@mui/material'

const Add = () => {
  const [open, setOpen] = useState(false);
  const StyledModal = styled(Modal)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  })
  const UserBox = styled(Box)({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "20px",
  })

  return (
    <>
      <Tooltip title="Adicionar" onClick={e => setOpen(true)}
        sx={{ position: "fixed", bottom: 20, left: { xs: "calc(50% - 25px)", md: 30 }, bgcolor:"#795695"}}>
        <Fab aria-label='add'>
          <AddIcon/>
        </Fab>
      </Tooltip>


      <StyledModal
        open={open}
        onClose={e => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >

        <Box width={400} height={280} bgcolor={"background.default"} color={"text.primary"} p={3} borderRadius={5}>
          <Typography variant='h6' color="gray" textAlign="center" >Create Post</Typography>
          <UserBox>
            <Avatar sx={{ width: 30, height: 30, bgcolor: "orange" }}>E</Avatar>
            <Typography fontWeight={500} variant='span'>Erik</Typography>
          </UserBox>

          <TextField
            sx={{ width: "100%" }}
            id="standard-multiline-static"
            multiline
            rows={3}
            placeholder="O que está pensando?"
            variant="standard"
          />
          <Stack direction="row" gap={1} mt={2} mb={3}>
            <EmojiEmotions sx={{ color: 'gold' }} />
            <Image sx={{ color: "darkblue" }} />
            <VideoCameraBack color='success' />
            <PersonAdd color='error' />
          </Stack>
          <ButtonGroup fullWidth variant="contained" aria-label="Basic button group">
            <Button sx={{bgcolor:"#795695"}}>Post</Button>
            <Button sx={{width:"100px", bgcolor:"#795695"}}><DateRange/></Button>
          </ButtonGroup>
        </Box>

      </StyledModal>
    </>
  )
}

export default Add