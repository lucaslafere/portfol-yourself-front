import * as S from "./Style";

export default function FailureModal() {
  return (
    <S.Modal>
      <p>Failure!</p>
      <S.ClickableIcon title="Action failed">
        <ion-icon name="close"></ion-icon>
      </S.ClickableIcon>
    </S.Modal>
  );
}
