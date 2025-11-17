'use client'

import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import CssBaseline from '@mui/material/CssBaseline'

export default function CarAppBar() {
  return (
    <Container maxWidth="xl">
      <CssBaseline />
      <AppBar position="static" sx={{ backgroundColor: '#1976d2' }}>
        <Toolbar>
          <Typography variant="h6" component="div">
            Car Shop
          </Typography>
        </Toolbar>
      </AppBar>
    </Container>
  )
}
