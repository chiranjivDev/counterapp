import "./App.css";
import Counter from "./components/Counter.js";
import { AppBar, Toolbar, Typography, Container } from "@mui/material";

function App() {
  return (
    <Container>
      <div className="App">
        <header className="App-header">
          <AppBar sx={{ background: "#2E8A99" }}>
            <Toolbar>
              <Typography variant="h5" sx={{ fontFamily: "Pacifico" }}>
                Counterapp
              </Typography>
            </Toolbar>
          </AppBar>
          <Counter />
        </header>
      </div>
    </Container>
  );
}

export default App;
