import styled from "styled-components";

export default styled.div`
.wallpaper {
    background-image: url(${({wallpaper}) => wallpaper});
    filter: brightness(0.5) grayscale(1) blur(1px);
    background-position: 50% 0%;
        background-size: cover;
        background-repeat: repeat;
        opacity: 0.8;
}
.header-section {
    .holder {
        background: ${({theme}) => theme.sideneu.bg};
        box-shadow: inset -14px 14px 41px ${({theme}) => theme.shadow.first}, inset 14px -14px 41px ${({theme}) => theme.shadow.second};
    }
}
`;