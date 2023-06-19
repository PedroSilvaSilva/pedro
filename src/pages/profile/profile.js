import React from "react";
import ProfileFireBase from "../../firebase/profile/profile.firebase";
import { Sidebar } from "_components/molecules";
import { ContairnerGeral, Container, SideBar } from "../profile/profile.styles";

import Footer from "_components/molecules/footer/footer";

const Profile = () => {
  return (
    <>
      <ContairnerGeral>
        <SideBar>
          <Sidebar />
        </SideBar>
        <Container>
          <ProfileFireBase />
        </Container>
      </ContairnerGeral>
      <Footer />
    </>
  );
};

export default Profile;
