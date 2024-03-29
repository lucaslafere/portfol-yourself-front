import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";
import * as S from "./Style";
import TokenContext from "../../Contexts/TokenContext";
import api from "../../Services/api";

export default function CreationScreen() {
  const [disabled, setDisabled] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorText, setErrorText] = useState("");
  const [logo, setLogo] = useState("");
  const [title, setTitle] = useState("");
  const navigate = useNavigate();
  const body = {
    title,
    logo,
  };
  const { token } = useContext(TokenContext);

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  function create(event) {
    event.preventDefault();
    setDisabled(true);
    setLoading(true);
    creationSchema();
  }
  function creationSchema() {
    const regexImageUrl = new RegExp(
      /(http)?s?:?(\/\/[^"']*\.(?:png|jpg|jpeg|gif|png|svg))/g
    );

    if (logo.length < 1) {
      setDisabled(true);
      setLoading(true);
      setErrorText("The Logo field is obligatory");
      setError(true);
      return;
    }
    if (title.length < 1) {
      setDisabled(true);
      setLoading(true);
      setErrorText("The Title field is obligatory");
      setError(true);
      return;
    }
    if (title.length > 20) {
      setDisabled(true);
      setLoading(true);
      setErrorText("The Title field can only be 20 characters long");
      setError(true);
      return;
    }
    const testUrl = regexImageUrl.test(logo);
    if (!testUrl) {
      setDisabled(true);
      setLoading(true);
      setErrorText("The Logo must be an image URL");
      setError(true);
      return;
    } else {
      api
        .post("/portfolios", body, config)
        .then(() => {
          setDisabled(true);
          setLoading(true);
          navigate("/dashboard");
        })
        .catch((err) => {
          setLoading(false);
          setDisabled(false);
          setErrorText(
            `There was an error creating your portfolio. ${err.message}.
            Are you sure you don't have a portfolio yet?`
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
          <ion-icon name="image-outline"></ion-icon>
          <h1>Create your Portfolio</h1>
        </S.Title>
        <S.Form onSubmit={create}>
          <S.Input
            placeholder="Portfolio Title, 20 characters limit *"
            type="text"
            autoComplete="off"
            disabled={disabled}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <S.Input
            placeholder="Logo Image URL *"
            type="url"
            autoComplete="off"
            disabled={disabled}
            value={logo}
            onChange={(e) => setLogo(e.target.value)}
          />
          <S.Button disabled={disabled} type="submit">
            {loading ? (
              <ThreeDots color="#1976d2" height={80} width={80} />
            ) : (
              "Create now"
            )}
          </S.Button>
        </S.Form>
        <S.ContainerLinks>
          <Link to={"/"}>
            <S.TextLink>Main page</S.TextLink>
          </Link>
          <Link to={"/sign-up"}>
            <S.TextLink>
              Don't have an account yet? Click here to sign up
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
