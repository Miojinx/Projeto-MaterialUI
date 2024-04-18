import { Button, styled, Typography } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";

function App() {

  const BlueButton = styled(Button)({
    backgroundColor: "skyblue",
    color: "#888",
    margin:5,
    "&:hover":{
      backgroundColor:"lightblue",
    },
    "&:disabled":{
      backgroundColor:"gray",
      color: 'white',
    }
  })


  return (
    <div className="App">
      <Button variant="text">Text</Button>
      <Button startIcon={<SettingsIcon />} variant="contained" color="secondary">Contained</Button>
      <Button variant="outlined">Outlined</Button>
      <Typography variant="h1">
        it uses h1 style but its p
      </Typography>
      <BlueButton>testeee</BlueButton>
    </div>
  );
}

export default App;
