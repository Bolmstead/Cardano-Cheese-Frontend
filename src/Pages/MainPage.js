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
                <Card variant="outlined">
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
          <Typography
            style={{
              fontSize: 80,
              color: "#24251D",
              marginBottom: "20px",
              fontWeight: "bold",
              marginBottom: "40px",
            }}
            color="black"
          >
            Cardano Rocks{" "}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <img style={{ width: "300px" }} src="rockgif.gif" alt="rockgif" />
        </Grid>
        <Grid item xs={12}>
          <Typography
            style={{
              fontSize: 20,
              color: "#24251D",
              fontWeight: "bold",
              marginTop: "50px",
            }}
            color="black"
            gutterBottom
          >
            100 Virtual Rock NFTs on the Cardano blockchain
          </Typography>
          <Typography
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
          </Typography>
          <Typography
            style={{
              fontSize: 20,
              color: "#24251D",
              fontWeight: "bold",
            }}
            color="black"
            gutterBottom
          >
            Mint Date: October 14th @ 11:00PM UTC
          </Typography>
          <Typography
            style={{
              fontSize: 16,
              color: "gray",
              fontWeight: "bold",
            }}
            gutterBottom
          >
            Policy ID: 0d832a143bd7a5e0d315af25c3879707a2ffd089dad0d370ec4977a2
          </Typography>
          <Typography
            style={{
              fontSize: 16,
              color: "gray",
              fontWeight: "bold",
              marginBottom: "100px",
            }}
            gutterBottom
          >
            (On-site trading coming soon!)
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
