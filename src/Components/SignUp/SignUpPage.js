import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";
import * as S from './Style'

export default function SignUpPage() {
  const [disabled, setDisabled] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorText, setErrorText] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const URL = "http://localhost:5000/sign-up";
  const navigate = useNavigate();
  const body = {
    email,
    password,
    confirmPassword,
  };

  function signUp(event) {
    event.preventDefault();
    setDisabled(true);
    setLoading(true);
    signUpSchema();
  }
  function signUpSchema() {
    if (password !== confirmPassword) {
      setDisabled(false);
      setLoading(false);
      setErrorText("as senhas são diferentes!");
      setError(true);
      return;
    }
    if (email.length < 1) {
      setDisabled(false);
      setLoading(false);
      setErrorText("o campo 'e-mail' deve ser preenchido");

      setError(true);
      return;
    } else {
      axios
        .post(URL, body)
        .then(() => {
          setLoading(false);
          navigate("/");
        })
        .catch((err) => {
          setLoading(false);
          setDisabled(false);
          setErrorText(
            `não foi possível criar sua conta, falha no servidor, erro: ${err}`
          );
          setError(true);
        });
    }
  }
  function openModal() {
    if (error) {
      return (
        <S.Modal onClick={() => setError(false)}>
          <h5>Houve um erro: {errorText}</h5>
          <h5>Clique em qualquer lugar da caixa para retornar</h5>
        </S.Modal>
      );
    }
  }
  const openError = openModal();

  return (
    <>
      {error ? openError : null}
      <S.Container>
        <S.Title>
          <h1>Sign up</h1>
        </S.Title>
        <S.Form onSubmit={signUp}>
          <S.Input></S.Input>
          <S.Input></S.Input>
          <S.Input></S.Input>
          <S.Button></S.Button>
        </S.Form>
        <S.ContainerLinks>
          <Link to={"/"}>
            <S.TextLink>Main page</S.TextLink>
          </Link>
          <Link to={"/login"}>
            <S.TextLink>
              Already registered? Click here to login and start your portfolio
            </S.TextLink>
          </Link>
        </S.ContainerLinks>
      </S.Container>
    </>
  );
}
