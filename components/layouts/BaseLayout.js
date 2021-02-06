import React from 'react';
import Header from '../shared/Header';

import { UserProvider, useFetchUser } from '../../pages/api/utils/user'

const BaseLayout = (props) => {
  const { user, loading } = useFetchUser()
  const { className, children } = props;
  const headerType = props.headerType || 'default'

  return (
    <UserProvider value={{ user, loading }}>
      <div className="layout-container" >
        <Header className={`port-nav-${headerType}`} user={user} />
        <main className={`cover ${className}`}>
          <div className="wrapper">
            {children}
          </div>
        </main>
      </div>
    </UserProvider>
  )
}

export default BaseLayout;
