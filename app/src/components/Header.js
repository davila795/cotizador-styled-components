import styled from '@emotion/styled'

const HeaderContainer = styled.header`
    background-color:#26C6DA;
    padding:10px;
    font-weight:bold;
    color:#FFFFFF;
`

const Header = ({ titulo }) => {
    return (
        <HeaderContainer>
            <h1>{titulo}</h1>
        </HeaderContainer>
    )
}

export default Header