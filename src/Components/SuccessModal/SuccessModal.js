import * as S from "./Style";

export default function SuccessModal() {
  return (
    <S.Modal>
      <p>Success!</p>
      <S.ClickableIcon>
        <ion-icon name="checkmark"></ion-icon>
      </S.ClickableIcon>
    </S.Modal>
  );
}
