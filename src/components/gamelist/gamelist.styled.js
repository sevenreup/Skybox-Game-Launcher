import styled from "styled-components";

const NormalGridStyled = styled.div`
.game-item {
    .game-circle {
        background: ${({theme}) => theme.sideneu.bg};
        box-shadow: inset 13px -13px 36px ${({theme}) => theme.shadow.first},
            inset -13px 13px 36px ${({theme}) => theme.shadow.second};

    }

    &:hover {
        .game-image {
            // filter: grayscale(1) blur(1px);
            &::before {
                background: ${({theme}) => theme.sideneu.bg};
                transform: rotate(0) translateY(30px) translateX(-19px);
                background: ${({theme}) => theme.sideneu.bg};
                box-shadow: inset 20px -20px 40px ${({theme}) => theme.shadow.first},
                    inset -20px 20px 40px ${({theme}) => theme.shadow.second};
            }
        }
    }
}

.game-image {

    &::before {
        background: #3b343427;
    }

    .game-caption {
       
        p {
            color: #001f3f;
            padding-bottom: 8px;
        }
    }
}
`


export {NormalGridStyled}