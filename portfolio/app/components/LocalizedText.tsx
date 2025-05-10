"use client";

import { useIntl } from "react-intl";
import {Fragment} from "react";

type LocalizedTextProps = {
  id: string;
  values?: Record<string, string | number>;
};

export const LocalizedText = ({ id, values }: LocalizedTextProps) => {
  const {formatMessage} = useIntl();
  const rawMessage = formatMessage({id}, values);

  // <br> 태그를 JSX 요소로 변환
  const messageWithBreaks = rawMessage.split("<br>").map((line, index) => (
    <Fragment key={index}>
      {line}
      {index < rawMessage.split("<br>").length - 1 && <br/>}
    </Fragment>
  ))

  return <>{messageWithBreaks}</>
}