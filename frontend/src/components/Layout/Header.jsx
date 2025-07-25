import React from 'react'
import headerLogo from "../../assets/images/websitelogo/white-transparent-phonoria-logo.png"
function Header() {
  return (
    <>
      <header className='container mx-auto bg-(--phonoria-color-violet) '>
        <img src={headerLogo} alt="phonoria-header-logo" />

      </header>
    </>
  )
}

export default Header