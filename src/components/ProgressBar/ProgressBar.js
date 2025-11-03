/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const SIZE = {
	small: { "--height": "4px" },
	medium: { "--height": "6px" },
	large: { "--height": "8px" },
};

const ProgressBase = styled.progress`
	height: var(--height);
`;

const ProgressBar = ({ value, size }) => {
	const styles = SIZE[size];
	const Element = ProgressBase;
	return (
		<>
			<Element max={"100"} value={value} style={styles}></Element>
		</>
	);
};

export default ProgressBar;
