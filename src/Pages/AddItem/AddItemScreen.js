import { useContext, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";
import * as S from "./Style";
import TokenContext from "../../Contexts/TokenContext";

export default function CreationScreen() {
  const [disabled, setDisabled] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorText, setErrorText] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const URL = "https://portfol-yourself.herokuapp.com/items";
  const navigate = useNavigate();
  const body = {
    title,
    imageUrl,
    description
  };
  const { token } = useContext(TokenContext)

  const config = {
    headers: {
        Authorization: `Bearer ${token}`
    }
  };

  function create(event) {
    event.preventDefault();
    setDisabled(true);
    setLoading(true);
    creationSchema();
  }
  function creationSchema() {
    const regexImageUrl = new RegExp(/(http)?s?:?(\/\/[^"']*\.(?:png|jpg|jpeg|gif|png|svg))/g);

    if (imageUrl.length < 1) {
      setDisabled(false);
      setLoading(false);
      setErrorText("The ImageURL field is obligatory");
      setError(true);
      return;
    }
    if (title.length < 1) {
      setDisabled(false);
      setLoading(false);
      setErrorText("The Title field is obligatory");
      setError(true);
      return;
    }
    if (title.length > 20){
        setDisabled(false);
      setLoading(false);
      setErrorText("The Title field can only be 20 characters long");
      setError(true);
      return;
    }
    if (description.length < 1) {
      setDisabled(false);
      setLoading(false);
      setErrorText("The description field is obligatory");
      setError(true);
      return;
    }
    if (description.length > 30){
        setDisabled(false);
      setLoading(false);
      setErrorText("The description field can only be 30 characters long");
      setError(true);
      return;
    }
    const testUrl = regexImageUrl.test(imageUrl)
  if (!testUrl) {
    setDisabled(false);
      setLoading(false);
      setErrorText("The link must be an image URL");
      setError(true);
      return;
  }
  else {
    axios.post(URL, body, config)
    .then (() => {
        setLoading(false);
        navigate("/dashboard");
    })
    .catch((err) => {
        setLoading(false);
        setDisabled(false);
        setErrorText(
            `There was an error creating your item. ${err.message}`
          );
          setError(true);
    });
  }
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
        <ion-icon name="image-outline"></ion-icon>
          <h1>Create your Item</h1>
        </S.Title>
        <S.Form onSubmit={create}>
          <S.Input
            placeholder="Item Title, 20 characters limit *"
            type="text"
            autoComplete="off"
            disabled={disabled}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <S.Input
            placeholder="Item Description, 30 characters limit *"
            type="text"
            autoComplete="off"
            disabled={disabled}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <S.Input
            placeholder="Image URL *"
            type="url"
            autoComplete="off"
            disabled={disabled}
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
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
          <Link to={"/dashboard"}>
            <S.TextLink>
              Back to dashboard
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
