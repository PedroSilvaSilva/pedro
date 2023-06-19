import styled from "styled-components";

const FormWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 600px;
  margin: 0 auto;
  height: 100vh;
  justify-content: center;
  @media (max-width: 1133px), (max-width: 986px), (max-width: 853px) {
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 15px;
  }
`;

const FormLabel = styled.label`
  margin-bottom: 5px;
  font-weight: bold;
`;

const FormInput = styled.input`
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
`;

const FormSelect = styled.select`
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
`;

export { FormSelect, FormInput, FormLabel, FormWrapper };
