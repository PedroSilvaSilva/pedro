import React, { useState } from "react";
import { ContainerTerms } from "./terms.style";
import { useNavigate } from "react-router-dom";

const TermsAndConditions = () => {
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  if (isChecked) {
    navigate("/welcome");
  }

  return (
    <>
      <ContainerTerms>
        <div>
          <img src="https://schedulecreation.com/logo.png" alt="logo" />
          <p>
            Bem-vindo ao [Nome do Site]! Ao utilizar este site, você concorda em
            cumprir os seguintes termos e condições. Certifique-se de ler
            atentamente todas as informações apresentadas abaixo antes de
            utilizar o site. Aceitação dos Termos Ao acessar e utilizar este
            site, você concorda em cumprir e ficar legalmente vinculado a estes
            termos e condições. Se você não concordar com qualquer parte destes
            termos, pedimos que não utilize o site. Uso do Site O site [Nome do
            Site] é destinado apenas para uso pessoal e não comercial. Você
            concorda em utilizar o site de acordo com todas as leis e
            regulamentações aplicáveis, além de se abster de qualquer atividade
            ilegal, prejudicial ou que possa causar danos ao site ou a
            terceiros. Propriedade Intelectual Todos os direitos de propriedade
            intelectual relacionados ao conteúdo e materiais disponibilizados
            neste site são de propriedade exclusiva de [Nome do Site]. Você
            concorda em respeitar todos os direitos autorais, marcas registradas
            e outros direitos de propriedade intelectual presentes no site.
            Privacidade e Proteção de Dados A privacidade dos nossos usuários é
            importante para nós. Ao utilizar o site, você concorda com a nossa
            Política de Privacidade, que explica como coletamos, armazenamos,
            utilizamos e protegemos os seus dados pessoais. Links para Sites de
            Terceiros O site [Nome do Site] pode conter links para sites de
            terceiros. Informamos que não temos controle sobre esses sites e não
            nos responsabilizamos pelo conteúdo, precisão, segurança ou práticas
            de privacidade desses sites. Recomendamos que você revise os termos
            e condições de cada site visitado. Limitação de Responsabilidade O
            uso deste site é por conta e risco do usuário. Em nenhuma
            circunstância [Nome do Site], seus colaboradores ou parceiros serão
            responsáveis por quaisquer danos diretos, indiretos, incidentais,
            consequenciais ou punitivos decorrentes do uso ou incapacidade de
            uso do site. Alterações nos Termos e Condições Reservamos o direito
            de modificar estes termos e condições a qualquer momento. Quaisquer
            alterações serão efetivas imediatamente após a publicação no site.
            Recomendamos que você reveja periodicamente os termos e condições
            atualizados. Jurisdição Estes termos e condições serão regidos e
            interpretados de acordo com as leis do [país/estado], sem considerar
            os conflitos de disposições legais. Em caso de qualquer disputa
            relacionada a estes termos, as partes concordam em submeter-se à
            jurisdição exclusiva dos tribunais competentes do [país/estado]. Se
            você tiver alguma dúvida ou preocupação em relação a estes termos e
            condições, entre em contato conosco por meio das informações
            fornecidas na seção de contato do site.
          </p>
          <label>
            <input
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            Aceito os termos e condições.
          </label>
        </div>
      </ContainerTerms>
    </>
  );
};

export default TermsAndConditions;
