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
          html: { height: "100vh", width: "100vw" },
          body: { height: "100%", width: "100%", margin: 0, padding: 0 },
          "#root": { height: "100%", width: "100%" },
        }}
      />
      <Container
        disableGutters
        maxWidth={false}
        sx={(theme) => ({
          background: `radial-gradient(circle, ${theme.palette.secondary.main} 17%, ${theme.palette.secondary.dark} 100%)`,
          color: "primary.main",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          margin: "0",
          minHeight: "100vh",
          textAlign: "center",
          width: "100%",
        })}
      >
        <Header />
        <MusicCaller />
        <Footer />
      </Container>
    </>
  );
}

export default App;
