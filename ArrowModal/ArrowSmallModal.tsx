import React, { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { RootState } from "config/reducers";

const TakeModal = ({ idx, address, list, dispatch, contracts, debt }) => {
	const { balances } = useSelector((state: RootState) => state.balances);
	const [value, setValue] = useState("0");

	// todo 소수점이 나와야됨

	return (
		<TakeModalItem>
			<Triangle />
			<Area onSubmit={() => getTake(value, idx, address, list, dispatch, contracts, balances)}>
				<TakeSlider
					type="range"
					min="0"
					// max={debt.toString()}
					max="200"
					step="0.01"
					value={value}
					onChange={(e) => setValue(e.target.value)}
				/>
				<InputBox>
					<img src={`/images/currencies/pUSD.png`} alt="pUSD" />
					<TakeInput
						type="number"
						placeholder="0"
						min="0"
						// max={debt.toString()}
						max={"200"} // ! temp testing value
						step="0.01"
						value={value === "0" ? "" : value}
						autoFocus={true}
						onChange={(e) => setValue(e.target.value)}
					/>
					{/* pUSD */}
				</InputBox>
				<SubmitBtn />
			</Area>
		</TakeModalItem>
	);
};

const TakeModalItem = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	width: fit-content;
	position: absolute;
	top: 20px;
	right: 1rem;
`;

const Triangle = styled.div`
	width: 0;
	height: 0;
	border-bottom: 10px solid transparent;
	border-top: 10px solid transparent;
	border-left: 15px solid #525252;
	border-right: 15px solid transparent;
	transform: rotate(270deg);
	margin-right: 1rem;
	/* margin: 0 auto; */
`;

const Area = styled.form`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 20rem;
	height: 20px;
	border-radius: 7px;
	padding: 7px;
	background: #525252;
	color: #fefffe;
	font-weight: bold;
`;

const TakeSlider = styled.input`
	width: 8rem;
	height: fit-content;
`;

const InputBox = styled.div`
	display: flex;
	align-items: center;
	width: fit-content;
	padding: 3px 8px;
	border-radius: 25px;
	background: #0e101e;

	img {
		width: 13px;
	}
`;

const TakeInput = styled.input`
	width: 4rem;
	height: fit-content;
	background: #525252;
	outline: none;
	border: none;
	color: #fefffe;
	text-align: right;
	background: #0e101e;

	&::-webkit-outer-spin-button,
	&::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}
`;

const SubmitBtn = styled.button`
	min-width: 1.8rem;
	min-height: 1.8rem;
	max-width: 1.8rem;
	max-height: 1.8rem;
	width: 1.8rem;
	height: 1.8rem;
	border: none;
	border-radius: 6px;
	padding: none;
	margin: none;
	background: #2184f8;
	box-shadow: 0px 3.5px 0px 0px #1158a9d2;

	&:hover {
		transition: 0.2s ease-in-out;
		margin-top: 2.5px;
		box-shadow: none;
	}
`;

export default TakeModal;
