import styled from "styled-components"

const Gameicon = styled.div`
color: ${ props => props.color ? props.color : '#001f3fab'};
margin: auto;
background: linear-gradient(225deg, ${({theme}) => theme.neushadow.bg.first + ', ' + theme.neushadow.bg.second});
box-shadow: -8px 8px 13px ${({theme}) => theme.shadow.first}, 8px -8px 13px ${({theme}) => theme.shadow.second};

&:focus,
&:hover {
    background: ${({theme}) => theme.neushadow.hover.bg};
    box-shadow: inset -8px 8px 13px ${({theme}) => theme.neushadow.hover.first}, inset 8px -8px 13px ${({theme}) => theme.neushadow.hover.second};
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
            background: ${({theme}) => theme.neushadow.hover.bg};
            box-shadow: inset -7px 7px 14px ${({theme}) => theme.neushadow.hover.first},
                inset 7px -7px 14px ${({theme}) => theme.neushadow.hover.second};
        }
    }

    span {
        color: ${({theme}) => theme.text};
        background: linear-gradient(225deg, ${({theme}) => theme.neushadow.bg.first + ', ' + theme.neushadow.bg.second});
        box-shadow: -7px 7px 14px ${({theme}) => theme.shadow.first},
            7px -7px 14px ${({theme}) => theme.shadow.second};
    }
`

export { Gameicon, Pinnedicon, PlayButton }