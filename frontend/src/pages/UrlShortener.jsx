import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  Grid,
  Container,
} from "@mui/material";

const UrlShortener = () => {
  const [urls, setUrls] = useState([
    { originalUrl: "", validity: "", customCode: "" },
  ]);

  const handleChange = (index, field, value) => {
    const updatedUrls = [...urls];
    updatedUrls[index][field] = value;
    setUrls(updatedUrls);
  };

  const addUrlField = () => {
    setUrls([...urls, { originalUrl: "", validity: "", customCode: "" }]);
  };

  const handleSubmit = () => {
    console.log("Submitted URLs:", urls);
    // TODO: Send to backend
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(to right, #2b0dd8ff, #bbdefb)",
        py: 8,
        px: 2,
      }}
    >
      <Container maxWidth="md">
        <Paper elevation={4} sx={{ p: 4, borderRadius: 3 }}>
          <Typography variant="h4" fontWeight="bold" mb={4} align="center">
            URL Shortener
          </Typography>

          {urls.map((url, index) => (
            <Grid container spacing={2} key={index} mb={2}>
              <Grid item xs={12} md={4}>
                <TextField
                  label="Original URL *"
                  fullWidth
                  value={url.originalUrl}
                  onChange={(e) =>
                    handleChange(index, "originalUrl", e.target.value)
                  }
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  label="Validity (mins)"
                  fullWidth
                  value={url.validity}
                  onChange={(e) =>
                    handleChange(index, "validity", e.target.value)
                  }
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  label="Custom Shortcode"
                  fullWidth
                  value={url.customCode}
                  onChange={(e) =>
                    handleChange(index, "customCode", e.target.value)
                  }
                />
              </Grid>
            </Grid>
          ))}

          <Box display="flex" justifyContent="center" gap={2} mt={3}>
            <Button variant="outlined" color="primary" onClick={addUrlField}>
              Add URL
            </Button>
            <Button variant="contained" color="primary" onClick={handleSubmit}>
              Submit
            </Button>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default UrlShortener;

