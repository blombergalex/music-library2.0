import "./App.css";
import MusicCaller from "./components/MusicCaller";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Container } from "@mui/material";
import { CssBaseline, GlobalStyles } from "@mui/material";

function App() {
  return (
    <>
      <CssBaseline />
      <GlobalStyles
        styles={{
          html: { height: "100vh"},
          body: { height: "100%", margin: 0, padding: 0 },
        }}
      />
      <Container disableGutters
        sx={{
          backgroundColor: "primary.light",
          bgcolor: "primary.dark",
          color: "primary.main",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          margin: "0",
          minHeight: "100vh",
          textAlign: "center",
        }}
      >
        <Header />
        <MusicCaller />
        <Footer />
      </Container>
    </>
  );
}

export default App;
