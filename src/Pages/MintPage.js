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

  const { hash } = useParams();

  let allNftIds = [
    680452, 680496, 680536, 680577, 680640, 680698, 680733, 680775, 680906,
    680946, 680970, 680989, 680991, 680994, 680996, 681002, 681003, 681006,
    681008, 681012, 681014, 681016, 681019, 681021, 681022, 681025, 681028,
    681030, 681032, 681035, 681038, 681039, 681041, 681043, 681044, 681047,
    681049, 681051, 681053, 681058, 681060, 681062, 681064, 681067, 681069,
    681072, 681074, 681076, 681079, 681081, 681084, 681085, 681090, 681093,
    681095, 681097, 681099, 681102, 681105, 681107, 681111, 681113, 681117,
    681119, 681121, 681124, 681126, 681128, 681130, 681132, 681135, 681139,
    681145, 681147, 681149, 681151, 681153, 681154, 681157, 681160, 681161,
    681163, 681165, 681166, 681170, 681172, 681173, 681174, 681175, 681176,
    681178, 681179, 681181, 681183, 681184, 680410, 681000, 681056, 681116,
    681141,
  ];

  let finalArray = [
    ["4TGgHvq1XC", 681028],
    ["JRo1AX295l", 681099],
    ["DoXyQXG5yn", 681051],
    ["4Fzn5gNb3N", 681008],
    ["82NW92d0tG", 681154],
    ["Rh6OOmuIpl", 681035],
    ["pWDqZQhplGk17LZ", 681166],
    ["Kp2dhC1ifiGj8lR", 681149],
    ["7zuErn1Bbpv127y", 681119],
    ["lJga6C8UDhE0geH", 681014],
    ["vmibIgMuJ8loDYj", 681038],
    ["jmaip6FaETk1Fyw", 681069],
    ["pGw9CkOwsFfzxU6", 680577],
    ["ulMTSytkyXZ7uvg", 681081],
    ["1vPqFsFJj1kNvTn", 681132],
    ["F2d528dcj65QYDn", 681173],
    ["8AUlbG0P7upGyI7", 681041],
    ["FIjivzJqYe9EXUp", 680970],
    ["QLAp2BZGm1XwsM9", 681085],
    ["YM7OSR89DRCQJ6I", 681179],
    ["vr2rLqOBo9cM2nF", 681032],
    ["T2YQxWlgJkugnJU", 681043],
    ["Jl1ZKqeEDu3vebw", 681064],
    ["2CScIq99RhXh5IN", 681021],
    ["4BQaLF9vemSEjRs", 681157],
    ["t1MoSKS2s8N9pfA", 681030],
    ["9ZWFZbCCB01IyDp", 681128],
    ["SaQBoJYNBLyydH9", 680775],
    ["LWl61Yul0UUjmr7", 681012],
    ["pjmxE4cpd9vSxFR", 680496],
    ["xnNdeQEKh3mEQQG", 681016],
    ["oAD2sd74e362Ai0", 681093],
    ["vaotgdceSx5z9Yf", 681049],
    ["AJX6N8d0WghCCYM", 681145],
    ["WMJncilsnyde4ND", 681072],
    ["nVmTISPkazXU7Pz", 681044],
    ["VmBup6IZZ6gXTxC", 681053],
    ["C1P6wt5klFvjvE6", 681135],
    ["MA9K0W7ogOCmaui", 681060],
    ["OASY415hRS4PG0a", 680640],
    ["dQle5BF3bWjRkj7", 681161],
    ["rWSSPYlMRX8oYPX", 680994],
    ["sycKdW6PkoOFrAn", 681002],
    ["IXIIJdQ2mw9coix", 681074],
    ["rzt8BQzjBrXeO1p", 680991],
    ["vRPTjrCrOd8K3lD", 680698],
    ["dGXxWLQB7nXXDQz", 681124],
    ["fjS8lxz5l8uV2RT", 681062],
    ["THDuMTtySAZ9SIj", 681130],
    ["4HNdlv8HAx15OB9", 681172],
    ["EBYPZG7VgFj4ZAK", 681165],
    ["FBvjHWXVS06oB5c", 681178],
    ["89Wiuo48zcuq9Mg", 681139],
    ["UH4rnzCBl2UxnLL", 681076],
    ["4WmJnbaLPvcRdUl", 681184],
    ["eTz45KqurwJ7xOQ", 681019],
    ["MOqo4rsdKKzi2fp", 681126],
    ["X4exPRW7pnOejOa", 681175],
    ["XjvWzuW1NVBJMkA", 681090],
    ["e4c4jnHVnW0v1CA", 681107],
    ["BHoCWlC0frV2eQ0", 680906],
    ["BSfQnoF2zejUK1D", 681151],
    ["8GL9dLPRt0iUpL4", 681084],
    ["WpLVX2wsuKMMxLn", 681160],
    ["z7iGcpBg3EZOlfG", 681058],
    ["eYGe1SybmP7C8MC", 681174],
    ["WfhXxgrJlcalYy5", 681067],
    ["owma5i42ONSEKon", 681003],
    ["8LMBqJFfiWJroAr", 681006],
    ["T93JCD2EqCSVHdA", 681183],
    ["WxKbmgj1CtLhCkY", 681025],
    ["DbH404t2hRjUpN1", 680996],
    ["eHAEomTw4SZwCrq", 681102],
    ["uyvoJI1Yx5StdaC", 681117],
    ["1ddQCsiRTPbF2Ho", 680989],
    ["K9IaoCr3OyYcpdm", 681047],
    ["vL8KgbSJNhVeq32", 681170],
    ["freUZsiADt3hAjt", 681181],
    ["anvZQFLp0bBb10R", 681147],
    ["RhHHV6RAVCjUd5k", 680946],
    ["mmlgTOVHilxy8rp", 681105],
    ["nJl29mi0lhrTwib", 681176],
    ["a4rxZutxnMuumBn", 681095],
    ["aJJS3Zjp7o24tu7", 680536],
    ["KPMO9X28F3L8W8M", 681079],
    ["7KO84WK0PFZ12R7", 681022],
    ["UMZFA0WV60ZKF3T", 681113],
    ["2300ZHEJY9DAPKV", 681111],
    ["DHJ770BO35GIU6V", 681097],
    ["C4IT2NDOP4F13U9", 681153],
    ["L3IUD0P7MX75082", 681121],
    ["UO9B8W78AS3VM18", 680733],
    ["T5NJFQENXFL2VU1", 681163],
  ];

  let usersNftId = null;
  for (let item of finalArray) {
    if (hash === item[1]) {
      usersNftId = item[2];
    }
  }

  async function getAddress(nftId) {
    if (!nftId) {
      setShowError(true);
      return;
    }
    let result = await API.getAddressForSpecificNftSale(nftId);
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
            Mint a Cardano Rock
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
              onClick={() => getAddress(usersNftId)}
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
                You do not have access to mint a rock
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
              Send 25 ADA to the above address within 20 minutes of receiving
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
              Once the ADA is sent, a random Cardano Rock NFT will be sent to
              your wallet.
            </Typography>{" "}
            <Typography
              style={{
                fontSize: 16,
                color: "black",
                fontWeight: "bold",
              }}
            >
              Please be patient, as it can take some time to receive the NFT :)
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
        <Grid item xs={12}>
          <Grid container spacing={3} justifyContent="center"></Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
