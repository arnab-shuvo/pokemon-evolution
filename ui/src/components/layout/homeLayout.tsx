import React, { PropsWithChildren } from "react";
import { ContentBox, UserLayoutWrapper } from "./styled";

const UserLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <UserLayoutWrapper
      container
      justifyContent={"center"}
      alignItems={"center"}
    >
      <ContentBox container item md={6} justifyContent={"center"}>
        {children}
      </ContentBox>
    </UserLayoutWrapper>
  );
};

export default UserLayout;
