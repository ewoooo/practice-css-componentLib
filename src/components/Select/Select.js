import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const Select = ({ label, value, onChange, children }) => {
	const displayedValue = getDisplayedValue(value, children);

	return (
		<Wrapper>
			<NativeSelect value={value} onChange={onChange}>
				{children}
			</NativeSelect>
			<Presentaiton>
				{displayedValue}
				<IconWrapper style={{ "--size": 24 + "px" }}>
					<Icon id={"chevron-down"} size={24} strokeWidth={2} />
				</IconWrapper>
			</Presentaiton>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	position: relative;
	width: fit-content;
`;

const NativeSelect = styled.select`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	opacity: 0;
`;

const Presentaiton = styled.div`
	background-color: ${COLORS.transparentGray15};
	color: ${COLORS.gray700};
	padding: 16px 52px 16px 12px;
	border-radius: 8px;

	${NativeSelect}:focus + & {
		outline: 1px dotted #212121;
	}

	${NativeSelect}:hover + & {
		outline: 2px solid gray;
	}
`;

const IconWrapper = styled.div`
	position: absolute;
	right: 8px;
	top: 0;
	bottom: 0;
	margin: auto;
	width: var(--size);
	height: var(--size);
	point-event: none;
`;

export default Select;
