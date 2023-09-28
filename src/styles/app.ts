import styled from "styled-components";

export const TerminalBackgroupContainer = styled.div<{ color: string }>`
    height: 100%;
    background-color: ${(props: { color: string }) => props.color};
`

export const TerminalContainer = styled.div`
    
    height: 99%;

    .index_terminal__teubZ {
        border-radius: 0;
    }

    #terminalEditor {
        padding-bottom: 0;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
        height: 98%;
    }
`