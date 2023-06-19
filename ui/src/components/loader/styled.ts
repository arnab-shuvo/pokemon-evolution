import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

export const LoaderWrapper = styled("div")({
  width: "100vw",
  height: "100vh",
  position: "fixed",
  left: "0",
  right: "0",
  top: "0",
  textAlign: "center",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 33333,
  background: "rgba(255,255,255,0.5)",
  borderRadius: "10px",
});
export const PokeBall = styled("div")({
  width: "60px",
  height: "60px",
  backgroundColor: "#fff",
  borderRadius: "50%",
  position: "relative",
  overflow: "hidden",
  border: "3px solid",
  animation: `spin .8s  linear 0s infinite`,
  zIndex: 444444,
  "&::before": {
    content: "''",
    position: "absolute",
    backgroundColor: "#fff",
    width: "10px",
    height: "10px",
    border: "4px solid",
    borderRadius: "50%",
    bottom: "18px",
    right: "18px",
    left: "18px",
    margin: "auto",
    zIndex: 1,
  },
  "&::after": {
    content: "''",
    position: "absolute",
    backgroundColor: "red",
    width: "60px",
    height: "30px",
    borderBottom: "4px solid",
    left: "0px",
  },
  "@keyframes spin": {
    "0%": {
      transform: "rotate(0deg) scale(0)",
    },
    "50%": {
      transform: "rotate(180deg)  scale(3)",
    },
    "100%": {
      transform: "rotate(360deg)  scale(0)",
    },
  },
});
