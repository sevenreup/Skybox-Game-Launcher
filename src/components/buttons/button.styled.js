import styled from "styled-components"

const Gameicon = styled.div`
color: ${ props => props.color ? props.color : '#001f3fab'};
margin: auto;
background: linear-gradient(225deg, ${({ theme }) => theme.neushadow.bg.first + ', ' + theme.neushadow.bg.second});
box-shadow: -8px 8px 13px ${({ theme }) => theme.shadow.first}, 8px -8px 13px ${({ theme }) => theme.shadow.second};

&:focus,
&:hover {
    background: ${({ theme }) => theme.neushadow.hover.bg};
    box-shadow: inset -8px 8px 13px ${({ theme }) => theme.neushadow.hover.first}, inset 8px -8px 13px ${({ theme }) => theme.neushadow.hover.second};
}
`;

const Pinnedicon = styled.div`
.pin-game {
    background: transparent;
    padding: unset;
    margin: 10px auto auto auto;
    border: 0em;

    span {
        margin: auto;
        display: flex;
        align-items: center;
        text-align: center;
        width: 60px;
    height: 60px;
    border-radius: 30px;
        overflow: hidden;
        padding: 0.65rem;
        box-shadow: inset 8px 8px 16px 0 rgba(0, 0, 0, 0.2),
            inset -8px -8px 16px 0 rgba(255, 255, 255, 0.4);

        &:hover {
            box-shadow:  inset 8px 8px 16px 0 ${props => props.shadow ? props.shadow.first : 'rgba(13, 121, 223, 0.2)'},
                inset -8px -8px 16px 0 ${props => props.shadow ? props.shadow.second : 'rgba(41, 177, 231, 0.4)'};
        }
    }

    &:first-child {
        margin-top: 3px;
    }

    &:last-child {
        margin-bottom: 3px;
    }

    img {
        width: 40px;
        height: 40px;
        border-radius: 50px;
        margin: auto;
    }
}
`

const PlayButton = styled.span`
    &:focus, 
    &:hover {
        span {
            background: ${({ theme }) => theme.neushadow.hover.bg};
            box-shadow: inset -7px 7px 14px ${({ theme }) => theme.neushadow.hover.first},
                inset 7px -7px 14px ${({ theme }) => theme.neushadow.hover.second};
        }
    }

    span {
        color: ${({ theme }) => theme.text};
        background: linear-gradient(225deg, ${({ theme }) => theme.neushadow.bg.first + ', ' + theme.neushadow.bg.second});
        box-shadow: -7px 7px 14px ${({ theme }) => theme.shadow.first},
            7px -7px 14px ${({ theme }) => theme.shadow.second};
    }
`

const ToggleStyled = styled.div`
background: ${({ theme }) => theme.gradient};
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  border-radius: 30px;
  cursor: pointer;
  display: flex;
  font-size: 40sp;
  justify-content: space-between;
  margin: 0 auto;
  overflow: hidden;
  padding: 0.5rem;
  position: relative;
  width: 100px;
  height: 40px;
  
  svg {
    height: auto;
    width: 2.5rem;
    transition: all 0.3s linear;
    color: white;
    &.light {
      transform: ${({ theme }) => theme.light ? 'translateY(0)' : 'translateY(100px)'};
      
    }
    
    &.dark {
      transform: ${({ theme }) => theme.light ? 'translateY(-100px)' : 'translateY(0)'};
    }
  }`

export { Gameicon, Pinnedicon, PlayButton, ToggleStyled }