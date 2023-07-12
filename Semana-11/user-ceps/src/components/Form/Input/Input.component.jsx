import PropTypes from 'prop-types'
import * as Styled from './input.style'

import { MdVisibility, MdVisibilityOff } from 'react-icons/md'
import { useState } from 'react'

export default function InputComponent({
	label,
	type = 'text',
	id,
	placeholder,
}) {
	const [showPassword, setShowPassword] = useState(false)

	const handleShowPassword = () => {
		setShowPassword(!showPassword)
	}

	return (
		<Styled.InputGroup>
			<Styled.Label htmlFor={id}>{label}</Styled.Label>

			{type !== 'textarea' && (
				<Styled.InputContainer>
					<Styled.Input
						type={showPassword ? 'text' : type}
						id={id}
						placeholder={placeholder}
						className="Input"
					/>
					{type === 'password' && (
						<Styled.Icon type='button' onClick={handleShowPassword}>
							{!showPassword ? <MdVisibility /> : <MdVisibilityOff />}
						</Styled.Icon>
					)}
				</Styled.InputContainer>
			)}
			{type === 'textarea' && (
				<textarea id={id} placeholder={placeholder} className="TextArea" />
			)}
		</Styled.InputGroup>
	)
}

InputComponent.PropTypes = {
	label: PropTypes.string,
	type: PropTypes.string,
	id: PropTypes.string.isRequired,
	placeholder: PropTypes.string,
}
