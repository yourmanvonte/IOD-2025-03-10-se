import { TextField, Button, Box, Typography } from "@mui/material";

const Login = () => {
  return (
    <Box sx={{ maxWidth: 400, mx: "auto", mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Login
      </Typography>
      <TextField fullWidth label="Username" margin="normal" />
      <TextField fullWidth label="Password" type="password" margin="normal" />
      <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
        Submit
      </Button>
    </Box>
  );
};

export default Login;
