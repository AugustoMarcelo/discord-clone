import React from 'react';

import ServerButton from '../ServerButton';

import { Container, Separator } from './styles';

const ServerList: React.FC = () => (
  <Container>
    <ServerButton isHome />

    <Separator />

    <ServerButton hasNotifications/>
    <ServerButton />
    <ServerButton hasNotifications mentions={1} selected />
    <ServerButton />
    <ServerButton />
    <ServerButton mentions={3} />
    <ServerButton mentions={355} />
    <ServerButton />
    <ServerButton mentions={3} />
    <ServerButton hasNotifications mentions={3} />
    <ServerButton mentions={3} />
  </Container>
);

export default ServerList;
