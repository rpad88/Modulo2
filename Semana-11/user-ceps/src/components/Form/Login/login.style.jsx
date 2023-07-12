import styled from 'styled-components'
import PropTypes from 'prop-types'

export const Form = styled.form`
    display: inline-flex;
    padding: 2rem;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 1rem;

    border-radius: 0.625rem;
    background: #fff;
    box-shadow: 10px 10px 10px 0 rgba(82, 129, 220, 0.25);
`

export const Header = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	gap: 8px;
	align-self: stretch;
`

export const Subtitle = styled.p`
	color: rgba(105, 105, 105, 0.93);
	font-family: Segoe UI;
	font-size: 12px;
	font-style: normal;
	font-weight: 400;
	line-height: normal;
`

export const Title = styled.legend`
	color: #5281dc;
	font-family: Segoe UI;
	font-size: 32px;
	font-style: normal;
	font-weight: 700;
	line-height: normal;
`


export const InputGroup = styled.div`
	display: flex;
	padding: 10px;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 10px;

	.input-group {
		display: flex;
		width: 360px;
		flex-direction: column;
		align-items: flex-start;
		gap: 8px;
	}

	label {
		display: flex;
		align-items: flex-start;
		gap: 10px;
		align-self: stretch;
	}
`

export const Button = styled.button`
	display: flex;
	padding: 0.5rem 1rem;
	justify-content: center;
	align-items: flex-start;
	align-self: stretch;

	border-radius: 0.3125rem;
    background: ${({$outlined}) => {return $outlined ? 'transparent' : 'rgba(82, 129, 220, 0.5);'}};
    border: ${({$outlined}) => {return !$outlined ? 0 : '1px solid rgba(82, 129, 220, 0.5);'}};

    color: ${({$outlined}) => {return !$outlined ? '#EFEFEF' : 'rgba(82, 129, 220, 0.5);'}};
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;

    &:disabled {
        cursor: not-allowed;
    }
`

Button.propTypes = {
    $outlined: PropTypes.bool
}

export const LabelWrapper = styled.label`
	display: flex;
	align-items: flex-start;
	gap: 10px;
	align-self: stretch;
`

export const Input = styled.input`
	display: flex;
	padding: 8px;
	align-items: flex-start;
	align-self: stretch;
	border-radius: 5px;
	border: 1px solid #5281dc;
`

export const Action = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	align-self: stretch;
`