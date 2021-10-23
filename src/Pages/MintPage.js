import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import { useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import CheckIcon from "@mui/icons-material/Check";

import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";
import API from "../Api";

export default function MintPage() {
  const [mintingAddress, setMintingAddress] = useState(null);
  const [showError, setShowError] = useState(false);



  async function getAddress() {

    let result = await API.GetAddressForRandomNftSale();
    console.log("resutl", result)
    if (result === "error") {
      setShowError(true);
      return;
    }
    if (result.paymentAddress) {
      setMintingAddress(
        <Alert
          icon={<CheckIcon fontSize="inherit" />}
          severity="success"
          style={{
            marginTop: "20px",
            textAlign: "center",
            justifyContent: "center",
          }}
        >
          {result.paymentAddress}
        </Alert>
      );
    }
  }

  // if (!walletAddresses.includes(address)) {
  //   return (
  //     <Grid container spacing={2} justify="center" align="center">
  //       <br />
  //       <br />
  //       <br />
  //       <Grid xs={12} item>
  //         <br />
  //         <br />
  //         <br />
  //         <Typography component="h1" variant="h3">
  //           404
  //         </Typography>
  //         <Typography component="h1" variant="h6">
  //           The resource requested could not be found on this server
  //         </Typography>
  //       </Grid>
  //     </Grid>
  //   );
  // } else {
  return (
    <Container
      maxWidth="md"
      style={{ height: "100vh", justifyContent: "center" }}
      justify="center"
    >
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <Typography
            style={{
              fontSize: 40,
              color: "#24251D",
              marginBottom: "20px",
              fontWeight: "bold",
            }}
            color="black"
          >
            Mint a Cardano Cheese
          </Typography>
        </Grid>
        <Grid item xs={12}></Grid>
        <Grid item xs={12}>
          <Grid item xs={12}>
            <Button
              variant="contained"
              style={{
                textTransform: "none",
                backgroundColor: "green",
                marginTop: "30px",
              }}
              onClick={getAddress}
            >
              Click to Get Minting Address
            </Button>
          </Grid>
          <Grid item xs={12} justify="center">
            {showError ? (
              <Alert
                severity="error"
                style={{
                  marginTop: "20px",
                  textAlign: "center",
                  justifyContent: "center",
                }}
              >
                You do not have access to mint a Cardano Cheese
              </Alert>
            ) : null}
            {mintingAddress}
          </Grid>
          <Grid item xs={12}>
            <Typography
              style={{
                fontSize: 16,
                color: "black",
                fontWeight: "bold",
                marginTop: "30px",
              }}
            >
              Send 25 ADA to the above address within 10 minutes of receiving
              it.
            </Typography>{" "}
            <Typography
              style={{
                fontSize: 16,
                color: "black",
                fontWeight: "bold",
                marginTop: "30px",
              }}
            >
              Once the ADA is sent, a random Cardano Cheese NFT will be sent to
              your wallet.           <br/>   Please be patient, as it can take some time to receive the NFT

            </Typography>{" "}
            <Typography
              style={{
                fontSize: 16,
                color: "black",
                fontWeight: "bold",
                marginTop: "30px",
              }}
            >
              Keep an eye on our Twitter. It is likely not all addresses generated will be used to mint a cheese. <br/>If this is the case, we will tweet when you can try to mint any leftover cheese!
            </Typography>{" "}

          </Grid>
          <Grid item xs={12}>
            <Typography
              style={{
                fontSize: 16,
                color: "red",
                fontWeight: "bold",
                marginTop: "30px",
              }}
            >
              Do not send ADA from an Exchange Wallet!
            </Typography>{" "}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
