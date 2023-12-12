import React, { FC } from 'react'
import { OutgoingMessage, IncomingMessage } from './Message';
// import chatApi from '../../services/ChatService';

const Chat:FC = () => {
    const messages = [
        { content: "Hello", type: "incoming" },
        { content: "Hi there", type: "outgoing" },
        // другие сообщения...
      ];

    // const [] = chatApi.useFetchChatMutation();


    return (
        <div>
        {messages.map((message, index) => {
            if (message.type === "outgoing") {
            return <OutgoingMessage key={index} content={message.content} />;
            } else {
            return <IncomingMessage key={index} content={message.content} />;
            }
      })}
        </div>
    )
}

export default Chat
