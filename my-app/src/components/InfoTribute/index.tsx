import { FC } from "react";
import * as S from "./styled";

type Props = {
  title: string;
  description: string;
  image_url: string;
};

export const TributeInfoForm : FC<Props> = ({
  title, 
  description, 
  image_url,
}) => {
  return (
    <S.FormBody>
      <div>{title}</div>
      <div>{description}</div>
      <div>{image_url}</div>
    </S.FormBody>
  );
};

export default TributeInfoForm;