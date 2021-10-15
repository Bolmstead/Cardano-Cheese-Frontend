import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";
import API from "../Api";
import Chip from '@mui/material/Chip';


export default function MainPage() {
  const [allNFTs, setAllNFTs] = useState(0);

  useEffect(() => {
    async function grabAllNFTs() {
      const result = await API.getNfts();
      console.log("🚀 ~ file: MainPage.js ~ line 17 ~ grabAllNFTs ~ result", result)

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
                    {item.minted ? <Chip label="Minted" color="success" size="small"/> : <Chip label="Not Minted" color="primary" size="small"/>}
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
        <Grid item xs={12}>
        <img style={{ maxWidth: "700px", marginTop: "50px" }} src="half1.jpeg" alt="cheese" />
        <img style={{ maxWidth: "500px", marginBottom: "20px"}} src="half2.jpeg" alt="cheese" />

        </Grid>
        <Grid item xs={12}>
          <img style={{ width: "250px" }} src="cheeseGif.gif" alt="cheese" />
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
            100 Virtual Cheese NFTs on the Cardano blockchain
          </Typography>
          {/* <Typography
            style={{
              fontSize: 20,
              color: "#24251D",
              fontWeight: "bold",
            }}
            color="black"
            gutterBottom
          >
            Check out our{" "}
            <a href="https://discord.gg/ze6fu38K" className="link">
              Discord
            </a>{" "}
            and{" "}
            <a href="https://twitter.com/CardanoRocksNFT" className="link">
              Twitter
            </a>{" "}
            for upcoming announcements!
          </Typography> */}
          <Typography
            style={{
              fontSize: 20,
              color: "#24251D",
              fontWeight: "bold",
            }}
            color="black"
            gutterBottom
          >
            Mint Date: TBD
          </Typography>
          <Typography
            style={{
              fontSize: 16,
              color: "gray",
              fontWeight: "bold",
              marginBottom: "60px",

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
