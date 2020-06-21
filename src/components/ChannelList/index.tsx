import React from 'react';

import ChannelButton from '../ChannelButton';

import { Container, Category, AddCategoryIcon } from './styles';

const ChannelList: React.FC = () => (
  <Container>
    <Category>
      <span>Canais de texto</span>
      <AddCategoryIcon />
    </Category>

    <ChannelButton channelName="chat-livre" selected />
    <ChannelButton channelName="só-frontend" />
    <ChannelButton channelName="só-backend" />
    <ChannelButton channelName="desafios" />
    <ChannelButton channelName="oportunidades" />
  </Container>
);

export default ChannelList;
