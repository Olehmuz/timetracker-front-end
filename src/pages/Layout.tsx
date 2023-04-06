import Header from 'components/Header/Header'
import React from 'react'
import { Outlet } from 'react-router-dom'

function Layout({children}: any) {
  return (
	<>
		<Header />
		<Outlet />
	</>
  )
}

export default Layout