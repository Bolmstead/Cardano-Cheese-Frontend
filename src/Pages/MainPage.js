import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Container, TextField, FormControl } from "@mui/material";

import API from "../Api";

export default function MainPage() {
  const [numToMint, setNumToMint] = useState(0);

  

  let numOfUnmintedNfts;

  useEffect(() => {
    async function grabnumberOfUnmintedNfts() {
      numOfUnmintedNfts = await API.getCounts();
      console.log("numOfUnmintedNfts", numOfUnmintedNfts);
    }
    grabnumberOfUnmintedNfts();
  }, []);

  return (
    <Container maxWidth="sm">
      <Card sx={{ minWidth: 275 }} variant="outlined">
        <CardContent>
          <Typography sx={{ fontSize: 30 }} color="text.secondary" gutterBottom>
            Cardano Cheese{" "}
          </Typography>
          <Typography sx={{ fontSize: 22 }} color="text.secondary" gutterBottom>
            Number of unminted NFTs:{" "}
            {/* {numOfUnmintedNfts ? null : { numOfUnmintedNfts }} */}
          </Typography>
          <FormControl>
            <TextField
              type="number"
              value={numToMint}
              onChange={(e) => setNumToMint(e.target.value)}
              inputProps={{ min: 0, max: 3, style: { textAlign: "right" } }}
            >
              {numToMint}
            </TextField>
            <Button size="small">Mint</Button>
          </FormControl>
        </CardContent>
      </Card>
    </Container>
  );
}
