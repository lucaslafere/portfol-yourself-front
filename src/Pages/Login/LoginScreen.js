import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";
import TokenContext from "../../Contexts/TokenContext";
import UserDataContext from "../../Contexts/UserDataContext";
import * as S from "./Style";

export default function LoginPage() {
  const [disabled, setDisabled] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorText, setErrorText] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const URL = "https://portfol-yourself.herokuapp.com/sign-in";
  const navigate = useNavigate();

  const { setToken } = useContext(TokenContext);
  const { setUserData } = useContext(UserDataContext);

  const body = {
    email,
    password,
  };

  function login(event) {
    event.preventDefault();
    setDisabled(true);
    setLoading(true);
    requestLogin();
  }
  function requestLogin() {
    axios
      .post(URL, body)
      .then((res) => {
        setToken(res.data.token);
        setUserData({ userId: res.data.userId });
        setLoading(false);
        navigate("/");
      })
      .catch((err) => {
        setDisabled(false);
        setLoading(false);
        setErrorText(
          `There was an error creating your portfolio. ${err.message}`
        );
        setError(true);
      });
  }
  function openModal() {
    if (error) {
      return (
        <S.Modal onClick={() => setError(false)}>
          <h5>An error occurred: {errorText}</h5>
          <h5>Click anywhere inside the box to continue and try again</h5>
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
          <ion-icon name="lock-closed-outline"></ion-icon>
          <h1>Login</h1>
        </S.Title>
        <S.Form onSubmit={login}>
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
            autoComplete="current-password"
            disabled={disabled}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <S.Button disabled={disabled} type="submit">
            {loading ? (
              <ThreeDots color="#1976d2" height={80} width={80} />
            ) : (
              "Login"
            )}
          </S.Button>
        </S.Form>
        <S.ContainerLinks>
          <Link to={"/"}>
            <S.TextLink>Main page</S.TextLink>
          </Link>
          <Link to={"/sign-up"}>
            <S.TextLink>Don't have an account? Sign up!</S.TextLink>
          </Link>
        </S.ContainerLinks>
        <S.Copyright>
          <p>Copyright © Portfol-Yourself 2022.</p>
        </S.Copyright>
      </S.Container>
    </>
  );
}
