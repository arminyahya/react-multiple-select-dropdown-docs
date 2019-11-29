import styled from "styled-components"

export const FlexRow = styled.div`
	display: flex;
	@media only screen and (max-width: 480px) {
		flex-direction: column;
}
`

export const SectionHeader = styled.h3`
	
`;

export const SectionInner = styled.div`
	margin-inline-start: 40px;
`;