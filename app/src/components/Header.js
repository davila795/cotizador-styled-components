import styled from '@emotion/styled'

const HeaderContainer = styled.header`
    background-color:#26C6DA;
    padding:10px;
    font-weight:bold;
    color:#FFFFFF;
`
const TextoHeadr = styled.h1`
    font-size:2rem;
    margin:0;
    font-family:'Slabo 27px',serif;
    text-align:center;
`

const Header = ({ titulo }) => {
    return (
        <HeaderContainer>
            <TextoHeadr>{titulo}</TextoHeadr>
        </HeaderContainer>
    )
}

export default Header