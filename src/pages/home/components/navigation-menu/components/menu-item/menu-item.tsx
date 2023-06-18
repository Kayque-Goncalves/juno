import React, {FunctionComponent, lazy, ReactElement, Suspense} from "react";

import {Container, ActiveStatusContainer, ActiveStatus, MenuContainer} from './styles'

interface IMenuItemProps {
  icon: string,
  title: string,
  onClick?: any,
}

const MenuItem: FunctionComponent<IMenuItemProps> = ({ icon, title }: IMenuItemProps): ReactElement => {
  const Icon = lazy(() => import((`../../../../../../assets/icons/${icon}`)))

  return (
    <Container>
      <ActiveStatusContainer>
        {title === 'Home' ? <ActiveStatus /> : null}
      </ActiveStatusContainer>
      <MenuContainer isActive={title === 'Home'}>
        <Suspense>
          <Icon stroke={title === 'Home' ? '#486ADE' : '#D9D9D9'} />
        </Suspense>
        <p>{title}</p>
      </MenuContainer>
    </Container>
  )
}

export default MenuItem
