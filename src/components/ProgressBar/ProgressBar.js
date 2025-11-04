/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const STYLES = {
	small: {
		height: 8,
		radius: 4,
		padding: 0,
	},
	medium: {
		height: 12,
		radius: 6,
		padding: 0,
	},
	large: {
		height: 16,
		radius: 8,
		padding: 4,
	},
};

const ProgressBar = ({ value, size }) => {
	if (value > 100) value = 100;
	else if (value < 0) value = 0;

	const styles = STYLES[size];

	return (
		<Wrapper role="progressbar" aria-valuenow={value} aria-valuemin="0" aria-valuemax="100" style={{ "--padding": styles.padding + "px", "--radius": styles.radius + "px" }}>
			<VisuallyHidden>{value}%</VisuallyHidden>
			<BarWrapper>
				<Bar style={{ "--width": value + "%", "--height": styles.height + "px" }} />
			</BarWrapper>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	background-color: ${COLORS.transparentGray15};
	box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
	padding: var(--padding);
	border-radius: var(--radius);
`;

const BarWrapper = styled.div`
	border-radius: 4px;
	overflow: hidden;
`;

const Bar = styled.div`
	width: var(--width);
	height: var(--height);
	background-color: ${COLORS.primary};
	transition: width 150ms ease-out;
`;

export default ProgressBar;
