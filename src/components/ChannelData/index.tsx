import React, { useRef, useEffect } from 'react';

import ChannelMessage, { Mention } from '../ChannelMessage';
import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';

const ChannelData: React.FC = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const div = messagesRef.current;

    if (div) {
      div.scrollTop = div.scrollHeight;
    }
  }, [messagesRef]);

  return (
    <Container>
      <Messages ref={messagesRef}>
        {Array.from(Array(9).keys()).map((n) => (
          <ChannelMessage
            key={n}
            author="Aluno do GoStack"
            date={`${String((n + 1)).padStart(2, "0")}/10/2020`}
            content="Algum dos instrutores está por aí? Tenho uma dúvida"
          />
        ))}
        <ChannelMessage
          author="Diego Fernandes"
          date="10/10/2020"
          hasMention
          isBot
          content={
            <>
              Fala, <Mention>@Marcelo Augusto</Mention>, beleza? Gostaria de 
              trabalhar conosco aqui na Rocketseat?
            </>
          }
        />

        <ChannelMessage
          author="Marcelo Augusto"
          date="10/10/2020"
          content="Claro que sim, cara! Quando posso começar?"
        />
      </Messages>

      <InputWrapper>
        <Input type="text" placeholder="Conversar em #chat-livre" />
        <InputIcon />
      </InputWrapper>
    </Container>
  );
}

export default ChannelData;
