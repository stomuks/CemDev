import React from 'react'
import { Button, type ButtonProps } from './button'

export interface LinkProps extends ButtonProps {
	href: string
	children: React.ReactNode
}

const MyLink: React.FC<LinkProps> = ({ href, children, ...props }) => {
	return (
		<Button {...props} asChild>
			<a href={href}>{children}</a>
		</Button>
	)
}

export { MyLink }
