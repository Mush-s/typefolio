import React, { Children, ReactNode } from 'react'

interface Children {
	children: ReactNode
}
const Styled = ({ children }: Children) => {
	return <div>{children}</div>
}

export default Styled
