import styled, { createGlobalStyle } from 'styled-components'

export const Block = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  flex-direction: ${props => (props.direction ? 'column' : 'row')};
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const GlobalStyle = createGlobalStyle`
	/* global */

	* {
		padding: 0;
		margin: 0;
	}

	html,
	body,
	#___gatsby,
	div[role="group"][tabindex] {
		height: 100%;
	}
	
	@keyframes borderClose {
		to {
			border: 25px solid ${props => props.theme.white};
		}
	}

	@media (max-width: 1228px)
	{
		@keyframes borderClose {
			to {
				border: 17px solid ${props => props.theme.white};
			}
		}
	}

	@media (max-width: 768px)
	{
		@keyframes borderClose {
			to {
				border: 10px solid ${props => props.theme.white};
			}
		}
	}

	div[role="group"][tabindex]::before {
		position: absolute;
		content:"";
		top: 0px;
		left: 0px;
		right: 0px;
		bottom: 0px;
		border: 0px;

		animation: borderClose 0.25s 4.55s ease-out forwards 1;
	}

	div[role="group"][tabindex] {
		display: flex;
		justify-content: center;
		align-items: center;
		color: ${props => props.theme.white};
	}
	
	::selection {
		color: ${props => props.theme.black};
		background: ${props => props.theme.accent};
	}

	.noselect {
		user-select: none;
	}
`
