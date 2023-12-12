import React, { FC } from "react";
import styled from "styled-components";

interface BaseMessageProps {
  content: string;
}

const BaseMessageContainer = styled.div`
  padding: 10px;
`;

const OutgoingMessageContainer = styled(BaseMessageContainer)`
  background-color: #3e7ba4;
  color: #ffffff;
`;

const IncomingMessageContainer = styled(BaseMessageContainer)`
  background-color: #0c7631;
  color: #ffffff;
`;

const OutgoingMessage: FC<BaseMessageProps> = ({ content }) => {
  return <OutgoingMessageContainer>{content}</OutgoingMessageContainer>;
};

const IncomingMessage: FC<BaseMessageProps> = ({ content }) => {
  return <IncomingMessageContainer>{content}</IncomingMessageContainer>;
};

export { OutgoingMessage, IncomingMessage };
