import styled from "styled-components";

export const Main = styled.main`
width: 100vw;
min-height: 100vh;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
background-image: url("./moedas.jpg");
background-size: cover;
background-repeat: no-repeat;
background-position: center;

@media (min-width: 1400px){
  background-size: 110% 120%;
}

@media (min-width: 1700px){
  background-size: 120% 130%;
}

@media (min-width: 2000px){
  background-size: 130% 140%;
}

@media (min-width: 2300px){
  background-size: 140% 150%;
}
`;

export const Title = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.8rem;
  padding: 2.5rem 2rem ;

  h1{
    font-family: "Inter";
    font-style: normal;
    padding: 0.5rem

  }
  h2{
    font-family: 'Comfortaa', cursive;
    font-weight: 700;
    color: var(--brand1);
    text-shadow: 2px 2px var(--brand3);
  }
  h3{
    font-family: "Lexend";
    font-style: italic;
    font-weight: 600;
    font-size: 1rem;
  }
`

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid var(--brand1);
  background-color: var(--grey2);
  border-radius: 8px;
  width: 22rem;
  padding: 2.75rem 3rem;
  gap: 0.625rem;
  position: relative;

  p {
    font-family: "Lexend";
    font-style: normal;
    font-weight: 500;
    font-size: 1rem;
    text-align: left;
    line-height: 1.875rem;
    color: var(--brand1);
  }
  span{
    font-family: "Lexend";
    font-style: normal;
    font-weight: 500;
    font-size: 1.2rem;
    line-height: 1.875rem;
    color: var(--sucess1);
  }
  label {
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 0.875rem;
    line-height: 1.0625rem;
    color: var(--grey1);
  }
  input {
    border: 1.5px solid var(--brand1);
    border-radius: 4px;
    width: 100%;
    height: 2.5rem;
    padding-left: 0.9375rem;
    color: var(--grey1);
  }
  select{
    border: 1.5px solid var(--brand1);
    border-radius: 4px;
    width: 100%;
    height: 2.5rem;
    padding-left: 0.9375rem;
    color: var(--grey1);
  }
  button {
    margin: 1rem 0rem;
    width: 100%;
    border: 0;
    border-radius: 0.3125rem;
    font-weight: 600;
    font-family: Inter;
    font-size: 1.2rem;
    height: 3rem;
    border: 0.0938rem solid var(--brand2);
    background-color: var(--brand2);
    color: var(--whiteFixed);

    &:hover {
      border: 0.0938rem solid var(--brand1);
      background-color: var(--brand1);
    }
  }


  @media (max-width: 370px){
    width: 18rem;
    padding: 2rem 2.5rem;    
    p {
      font-size: 0.8rem;
    }
    span{
      font-size: 1rem;
    }
    label {
      font-size: 0.6rem;
    }
    input {
      height: 2.6rem;
    }
    select{
      height: 2.6rem;
    }
    button {
      font-size: 1rem;
      height: 2.5rem;
    }

  }

  @media (min-width: 700px){
    width: 24rem;
    padding: 3rem 3.25rem;

    p {
      font-size: 1.2rem;
    }
    span{
      font-size: 1.4rem;
    }
    label {
      font-size: 1rem;
    }
    input {
      height: 2.6rem;
    }
    select{
      height: 2.6rem;
    }
    button {
      font-size: 1.3rem;
      height: 3.2rem;
    }
  }

  @media (min-width: 1100px){
    width: 26rem;
    padding: 3.2rem 3.5rem;

    p {
      font-size: 1.4rem;
    }
    span{
      font-size: 1.6rem;
    }
    label {
      font-size: 1.2rem;
    }
    input {
      height: 2.8rem;
    }
    select{
      height: 2.8rem;
    }
    button {
      font-size: 1.5rem;
      height: 3.4rem;
    }
  }
`;