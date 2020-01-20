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
	@import url('https://fonts.googleapis.com/css?family=Roboto+Mono&display=swap');

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

	/* Fonts */
	
	/* Roboto */

	@font-face {
	font-family: "Roboto";
	src: local("Roboto Thin"), local("Roboto-Thin"),
		url("../fonts/Roboto/Roboto-Thin.woff2") format("woff2");
	font-weight: 100;
	font-style: normal;
	}

	@font-face {
	font-family: "Roboto";
	src: local("Roboto Black"), local("Roboto-Black"),
		url("../fonts/Roboto/Roboto-Black.woff2") format("woff2");
	font-weight: 900;
	font-style: normal;
	}

	@font-face {
	font-family: "Roboto";
	src: local("Roboto Light"), local("Roboto-Light"),
		url("../fonts/Roboto/Roboto-Light.woff2") format("woff2");
	font-weight: 300;
	font-style: normal;
	}

	@font-face {
	font-family: "Roboto";
	src: local("Roboto"), local("Roboto-Regular"),
		url("../fonts/Roboto/Roboto-Regular.woff2") format("woff2");
	font-weight: normal;
	font-style: normal;
	}

	@font-face {
	font-family: "Roboto";
	src: local("Roboto Bold"), local("Roboto-Bold"),
		url("../fonts/Roboto/Roboto-Bold.woff2") format("woff2");
	font-weight: bold;
	font-style: normal;
	}

	@font-face {
	font-family: "Roboto";
	src: local("Roboto Medium"), local("Roboto-Medium"),
		url("../fonts/Roboto/Roboto-Medium.woff2") format("woff2");
	font-weight: 500;
	font-style: normal;
	}

	/* Inter */

	@font-face {
		font-family: 'Inter';
		font-style:  normal;
		font-weight: 300;
		font-display: swap;
		src: url("../fonts/Inter/Inter-Light-BETA.woff2?v=3.11") format("woff2");
	}

	@font-face {
		font-family: 'Inter';
		font-style:  normal;
		font-weight: 400;
		font-display: swap;
		src: url("../fonts/Inter/Inter-Regular.woff2?v=3.11") format("woff2");
	}

	@font-face {
		font-family: 'Inter';
		font-style:  normal;
		font-weight: 500;
		font-display: swap;
		src: url("../fonts/Inter/Inter-Medium.woff2?v=3.11") format("woff2");
	}

	@font-face {
		font-family: 'Inter';
		font-style:  normal;
		font-weight: 600;
		font-display: swap;
		src: url("../fonts/Inter/Inter-SemiBold.woff2?v=3.11") format("woff2");
	}

	@font-face {
		font-family: 'Inter';
		font-style:  normal;
		font-weight: 700;
		font-display: swap;
		src: url("../fonts/Inter/Inter-Bold.woff2?v=3.11") format("woff2");
	}
	@font-face {
		font-family: 'Inter';
		font-style:  normal;
		font-weight: 800;
		font-display: swap;
		src: url("../fonts/Inter/Inter-ExtraBold.woff2?v=3.11") format("woff2");
	}

	@font-face {
		font-family: 'Inter';
		font-style:  normal;
		font-weight: 900;
		font-display: swap;
		src: url("../fonts/Inter/Inter-Black.woff2?v=3.11") format("woff2");
	}

`
