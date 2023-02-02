import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";
import * as S from "./style";
import api from "../../Services/api";

export default function SignUpScreen() {
  const [disabled, setDisabled] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorText, setErrorText] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
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
      setDisabled(true);
      setLoading(true);
      setErrorText("Passwords are different");
      setError(true);
      return;
    }
    if (email.length < 1) {
      setDisabled(true);
      setLoading(true);
      setErrorText("The Email field is obligatory");
      setError(true);
      return;
    }
    if (password.length < 1) {
      setDisabled(true);
      setLoading(true);
      setErrorText("The Password field is obligatory");
      setError(true);
      return;
    }
    if (confirmPassword.length < 1) {
      setDisabled(true);
      setLoading(true);
      setErrorText("The Confirm Password field is obligatory");
      setError(true);
      return;
    } else {
      api
        .post("/sign-up", body)
        .then(() => {
          setDisabled(true);
          setLoading(true);
          navigate("/");
        })
        .catch((err) => {
          setLoading(false);
          setDisabled(false);
          setErrorText(
            `There was an error creating your portfolio. ${err.message}`
          );
          setError(true);
        });
    }
  }
  function openModal() {
    if (error) {
      return (
        <S.Modal onClick={() => resetError()}>
          <h5>An error occurred: {errorText}</h5>
          <h5>Click anywhere inside the box to continue and try again</h5>
        </S.Modal>
      );
    }
  }
  function resetError() {
    setDisabled(false);
    setLoading(false);
    setError(false);
  }
  const openError = openModal();

  return (
    <>
      {error ? openError : null}
      <S.Container>
        <S.Title>
          <ion-icon name="lock-closed-outline"></ion-icon>
          <h1>Sign up</h1>
        </S.Title>
        <S.Form onSubmit={signUp}>
          <S.Input
            placeholder="Email Address *"
            type="email"
            autoComplete="email"
            disabled={disabled}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <S.Input
            placeholder="Password *"
            type="password"
            autoComplete="new-password"
            disabled={disabled}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <S.Input
            placeholder="Confirm your password *"
            type="password"
            autoComplete="off"
            disabled={disabled}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <S.Button disabled={disabled} type="submit">
            {loading ? (
              <ThreeDots color="#1976d2" height={80} width={80} />
            ) : (
              "SIGN UP"
            )}
          </S.Button>
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
        <S.Copyright>
          <p>Copyright © Portfol-Yourself 2022.</p>
        </S.Copyright>
      </S.Container>
    </>
  );
}
