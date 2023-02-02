import * as S from "./style.js";

export default function IncompleteFeatureModal() {
  return (
    <S.Modal>
      <p>Not implemented yet</p>
      <S.ClickableIcon title="Feature not implemented yet">
        <ion-icon name="build-outline"></ion-icon>
      </S.ClickableIcon>
    </S.Modal>
  );
}
