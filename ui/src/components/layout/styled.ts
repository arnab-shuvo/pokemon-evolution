import styled from "@emotion/styled";
import { Grid } from "@mui/material";
import PokeBg from "../../assets/images/bg.jpeg";
export const UserLayoutWrapper = styled(Grid)({
  height: "100vh",
  width: "100vw",

  "&::before": {
    backgroundImage: `url(${PokeBg})`,
    backgroundSize: "cover",
    position: "absolute",
    content: "''",
    height: "100%",
    width: "100%",
    zIndex: 1,
  },
});
export const ContentBox = styled(Grid)({
  position: "relative",
  zIndex: 22222,
  padding: "50px",
  background: "rgba(255,255,255,0.8)",
  borderRadius: "10px",
});
