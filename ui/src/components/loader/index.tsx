import * as React from "react";
import { PokeBall, LoaderWrapper } from "./styled";

const Loader: React.FC = () => {
  return (
    <LoaderWrapper>
      <PokeBall />
    </LoaderWrapper>
  );
};

export default Loader;
