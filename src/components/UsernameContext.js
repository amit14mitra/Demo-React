import React from 'react'

const userContext=React.createContext();
const dataContext=React.createContext();

const UnameProvider=userContext.Provider;
const UnameConsumer=userContext.Consumer;


export { UnameProvider , UnameConsumer ,dataContext};