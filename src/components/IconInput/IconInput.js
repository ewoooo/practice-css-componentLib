import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const STYLES = {
	small: {
		fontSize: 14,
		iconSize: 16,
		borderThickness: 1,
		height: 24,
	},
	large: {
		fontSize: 18,
		iconSize: 24,
		borderThickness: 2,
		height: 36,
	},
};

const IconInput = ({ label, icon, width = 250, size, ...delegated }) => {
	const styles = STYLES[size];

	return (
		<Wrapper>
			<VisuallyHidden>{label}</VisuallyHidden>
			<IconWrapper style={{ "--size": styles.iconSize + "px" }}>
				<Icon id={icon} size={styles.iconSize} />
			</IconWrapper>
			<TextInput
				{...delegated}
				style={{ "--width": width + "px", "--height": styles.height + "px", "--border-thickness": styles.borderThickness + "px", "--font-size": styles.fontSize + "px" }}
			/>
		</Wrapper>
	);
};

const Wrapper = styled.label`
	display: block;
	position: relative;
	color: ${COLORS.gray700};

	&::hover {
		color: ${COLORS.gray300};
	}
`;

const TextInput = styled.input`
	padding-left: var(--height);
  width: var(--width);
	height: var(--height);
  font-size: var(--font-size);
	border: none;
	border-bottom: var(--border-thickness) solid ${COLORS.black};
  font-weight: 700;
  color: inherit;

  outline-offset: 4px;
  outline-color: lightblue;

  &::placeholder {
  color: ${COLORS.gray300};
  font-weight: 400;
`;

const IconWrapper = styled.div`
	position: absolute;
	height: var(--size);
	top: 0;
	bottom: 0;
	margin: auto 0;
`;

export default IconInput;
