import React, { useState } from "react";
import Button from "../../components/button/button";
import { ContainerCookies } from "./cookies.style";

const CookieBanner = () => {
  const [acceptedCookies, setAcceptedCookies] = useState(false);

  const handleAcceptCookies = () => {
    setAcceptedCookies(true);
  };

  if (acceptedCookies) {
    return null;
  }

  return (
    <ContainerCookies>
      <p>
        Este site utiliza cookies para melhorar a sua experiência. Ao continuar
        navegando, você concorda com o uso de cookies.
      </p>

      <Button onClick={handleAcceptCookies}>Aceitar</Button>
    </ContainerCookies>
  );
};

export default CookieBanner;
