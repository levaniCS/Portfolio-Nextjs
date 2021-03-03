import React from 'react';
import Header from '../shared/Header';
import Head from 'next/head'

const BaseLayout = (props) => {
  const { className, children, isAuthenticated, user } = props;
  const headerType = props.headerType || 'default'

  return (
    <>
      <Head>
        <title>Levani Sar || Personal</title>
        <link 
          rel="stylesheet" 
          href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" 
          integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" 
          crossOrigin="anonymous" 
        />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      </Head>
      <div className="layout-container">
        <Header 
          isAuthenticated={isAuthenticated} 
          className={`port-nav-${headerType}`}
          user={user}
        />
        <main className={`cover ${className}`}>
          <div className="wrapper">
            {children}
          </div>
        </main>
      </div>
    </>
  )
}

export default BaseLayout;
