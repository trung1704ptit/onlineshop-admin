import { Box, Typography, Button } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function NotFound() {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        textAlign: "center",
      }}
    >
      <Box sx={{ margin: "20% auto" }}>
        <Typography variant="h1">404</Typography>
        <Typography variant="h3">Page Not Found</Typography>
        <Button startIcon={<ArrowBackIcon />} variant="contained" href="/">Back Home</Button>
      </Box>
    </Box>
  );
}
