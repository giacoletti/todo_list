import React from "react";
import { Container, Paper, List, ListItem, Typography } from "@mui/material";

const App = () => {
  return (
    <Container>
      <Typography
        data-cy="main-header"
        variant="h3"
        component="div"
        gutterBottom
      >
        To-Do List
      </Typography>
      <Paper sx={{ maxWidth: 345, boxShadow: 3 }}>
        <List sx={{ width: "100%", bgcolor: "background.paper" }}>
          <ListItem>Test</ListItem>
        </List>
      </Paper>
    </Container>
  );
};

export default App;
