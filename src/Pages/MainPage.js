import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";
import API from "../Api";
import Chip from "@mui/material/Chip";

export default function MainPage() {
  const [allNFTs, setAllNFTs] = useState(0);

  useEffect(() => {
    async function grabAllNFTs() {
      const result = await API.getNfts();
      console.log(
        "🚀 ~ file: MainPage.js ~ line 17 ~ grabAllNFTs ~ result",
        result
      );

      let counter = 0;
      for (let cheese of result) {
        if (cheese.state === "free" || cheese.state === "reserved") {
          counter++;
        }
      }

      result.sort((a, b) => (a.name > b.name ? 1 : -1));

      let nftComponents = [];

      if (!result) {
        return;
      } else {
        result.map((item) => {
          nftComponents.push(
            <Grid item key={item.id}>
              <Box>
                <Card variant="outlined" style={{ backgroundColor: "#F2F2F2" }}>
                  <CardContent>
                    <img
                      src={item.gatewayLink}
                      style={{ width: 150, height: 150, marginBottom: "15px" }}
                      alt="image"
                    />
                    <Typography
                      style={{
                        color: "#24251D",
                        fontWeight: "bold",
                        textDecoration: "none",
                      }}
                    >
                      {item.name}
                    </Typography>
                    {item.minted ? (
                      <Chip label="Minted" color="success" size="small" />
                    ) : (
                      <Chip label="Not Minted" color="primary" size="small" />
                    )}
                  </CardContent>
                </Card>{" "}
              </Box>
            </Grid>
          );
        });
      }
      setAllNFTs(nftComponents);
    }

    grabAllNFTs();
  }, []);

  return (
    <Container
      maxWidth="lg"
      style={{ height: "100vh", justifyContent: "center" }}
      justify="center"
    >
      <Grid container spacing={0}>
        <Grid item xs={12} sx={{ display: { lg: "block", xs: "none" } }}>
          <img
            style={{ maxWidth: "800px", marginTop: "50px" }}
            src="half1.jpeg"
            alt="cheese"
          />
          <img
            style={{ maxWidth: "590px", marginBottom: "20px" }}
            src="half2.jpeg"
            alt="cheese"
          />
        </Grid>
        <Grid
          item
          xs={12}
          sx={{ display: { lg: "none", md: "block", xs: "none" } }}
        >
          <img
            style={{ maxWidth: "600px", marginTop: "50px" }}
            src="half1.jpeg"
            alt="cheese"
          />
          <br />
          <img
            style={{ maxWidth: "450px", marginBottom: "20px" }}
            src="half2.jpeg"
            alt="cheese"
          />
        </Grid>
        <Grid item xs={12} sx={{ display: { md: "none", xs: "block" } }}>
          <img
            style={{ maxWidth: "350px", marginTop: "50px" }}
            src="half1.jpeg"
            alt="cheese"
          />
          <br />
          <img
            style={{ maxWidth: "225px", marginBottom: "20px" }}
            src="half2.jpeg"
            alt="cheese"
          />
        </Grid>
        <Grid item xs={12}>
          <img style={{ width: "220px" }} src="cheeseGif.gif" alt="cheese" />
        </Grid>
        <Grid item xs={12}>
          <Typography
            style={{
              fontSize: 20,
              color: "#24251D",
              fontWeight: "bold",
              marginTop: "20px",
            }}
            color="black"
            gutterBottom
          >
            100 Virtual Cheese NFTs on the Cardano blockchain!
          </Typography>

          <Typography
            style={{
              fontSize: 20,
              color: "#24251D",
              fontWeight: "bold",
            }}
            gutterBottom
          >
            All cheeses have been minted, but you can buy them on{" "}
            <a href="https://cnft.io/marketplace?project=Cardano%20Cheese" className="link">
              CNFT.io{" "}
            </a>{" "}
          </Typography>{" "}
          <Typography
            style={{
              fontSize: 20,
              color: "#24251D",
              fontWeight: "bold",
            }}
            gutterBottom
          >
            Check out our latest sales and other data {" "}
            <a href="https://opencnft.io/BV6pEJykjQi9RX34xRjjH9xdE" className="link">
              here
            </a>
          </Typography>{" "}
          <Typography
            style={{
              fontSize: 16,
              color: "gray",
              fontWeight: "bold",
              marginBottom: "20px",
            }}
            gutterBottom
          >
            Policy ID: e22927ac8a20ca5b8897aa02efdaf27ade0272de8c8b441d3dea0401
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={3} justifyContent="center">
            {allNFTs ? allNFTs : null}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
