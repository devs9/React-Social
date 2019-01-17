import React from 'react'
import Div from '../atom/Div'
import Link from '../atom/Link'
import Button from '../atom/Button'
import HeaderItem from '../atom/Header'

export default ({ isAuth, signOut }) => (
  <HeaderItem>
    <Div>
      <Link exact to="/" children="Home" />
      <Link exact to="/news" children="News" />
      <Link
        exact
        to={isAuth ? '/profile' : '/registration'}
        children={isAuth ? 'Profile' : 'Registration'}
      />
    </Div>
    {isAuth && (
      <Button
        width="75px"
        height="50px"
        children="Sign Out"
        onClick={signOut}
      />
    )}
  </HeaderItem>
)
