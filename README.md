# @jdthornton/modalprovider

[![npm (scoped)](https://img.shields.io/npm/v/@jdthornton/modalprovider.svg)](https://www.npmjs.com/package/@jdthornton/modalprovider)
[![npm bundle size (minified)](https://img.shields.io/bundlephobia/min/@jdthornton/modalprovider.svg)](https://www.npmjs.com/package/@jdthornton/modalprovider)

React modal context provider with hooks for easy usability.

## Install

```
$ npm install @jdthornton/modalprovider
```

## Usage

```js
import ModalProvider, { createModal, useModalHandlers } from "@jdthornton/modalprovider";
import Modal from "@jdthornton/animated-modal";
import '@jdthornton/animated-modal/styles.css';

function ModalButton({ modalKey, children }){
  const { open } = useModalHandlers(modalKey)
  return(
    <button onClick={open} type="button">{children}</button>
  )
}

function WelcomeModal({ modalKey }){
  const modal = createModal(modalKey);

  return(
    <AnimatedModal isOpen={modal.isOpen} close={modal.close}>
      Welcome
    </AnimatedModal>
  )
}

function App(){

  return(
    <ModalProvider>
      <ModalButton modalKey="welcome">Open</ModalButton>
      <WelcomeModal modalKey="welcome" />
    </ModalProvider>
  )
}
```
