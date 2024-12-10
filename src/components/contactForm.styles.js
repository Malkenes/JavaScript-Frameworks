import styled from "styled-components";

export const FormInputContainer = styled.div`
  margin-bottom: 1em;
  input,
  textarea {
    width: 100%;
    box-sizing: border-box;
    background: inherit;
    padding: 0.5em;
    border: 2px solid #787373;
    border-radius: 4px;
    outline: none;
    margin-top: 10px;
    &:focus {
      outline: solid #787373;
    }
  }
  textarea {
    resize: none;
    height: 8em;
  }
  label {
    font-weight: 600;
  }

  small {
    float: right;
  }
  p {
    margin: 0;
    color: red;
    font-size: 12px;
    position: absolute;
  }
`;
