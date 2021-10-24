import styled from "styled-components";
import { Button } from "./button";

export const CreateComponent = () => {
  return (
    <Container>
      <InputContainer>
        <p>Upload File</p>
        <Upload>
          <p>JPG, PNG, GIF, WEBP, MP4 or MP3. Max 30mb.</p>
          <Button>Choose file</Button>
          <input type="file" />
        </Upload>
      </InputContainer>

      <InputContainer>
        <p>Name</p>
        <input placeholder={"Enter the name of NFT"} />
      </InputContainer>

      <InputContainer>
        <p>Description</p>
        <input placeholder={"Enter the description"} />
      </InputContainer>

      <InputContainer>
        <p>Properties</p>
        <input placeholder={"Enter the description"} />
      </InputContainer>

      <InputContainer>
        <Button type={"primary"}>Create</Button>
      </InputContainer>
    </Container>
  );
};

const Container = styled.div``;

const InputContainer = styled.div`
  margin-top: 20px;

  &:first-of-type {
    margin-top: 0;
  }

  p {
    padding-bottom: 10px;
    color: black !important;
  }

  input {
    width: calc(100% - 40px);
    border-radius: 4px;
    padding: 10px 20px;
    border: 1px solid black;

    &::placeholder {
      color: grey;
      font-size: 0.85rem;
    }
  }
`;

const Upload = styled.div`
  width: 100%;
  height: 130px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border: 2px dashed black;
  border-radius: 5px;
  position: relative;

  p {
    font-size: 0.85rem;
    text-align: center;
  }

  button {
    margin-top: 10px;
  }

  input {
    position: absolute;
    height: 100%;
    width: 100%;
    opacity: 0;
  }
`;
