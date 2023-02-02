import * as S from "./style.js";

export default function SuccessModal() {
  return (
    <S.Modal>
      <p>Success!</p>
      <S.ClickableIcon title="Saved correctly!">
        <ion-icon name="checkmark"></ion-icon>
      </S.ClickableIcon>
    </S.Modal>
  );
}
