import styled from "styled-components";

export default styled.div`
.sidebar {
    padding-top: 10px !important;
    background: ${({theme}) => theme.sideneu.bg};
    box-shadow: inset -20px 20px 60px ${({theme}) => theme.shadow.first},
        inset 20px -20px 60px ${({theme}) => theme.shadow.second};

    .all {
        margin-top: 80px;
    }

    .pinnedGames {
        margin: 30px 6px;
        border-radius: 34px;
        background: ${({theme}) => theme.sideneu.bg};
        box-shadow: inset -7px 7px 12px ${({theme}) => theme.shadow.first}, 
                    inset 7px -7px 12px ${({theme}) => theme.shadow.second};

    }
}`;