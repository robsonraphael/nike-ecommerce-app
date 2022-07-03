import styled from "styled-components";
import { MediaQuery } from "../../styles/global";

export const Container = styled.footer`
    width :100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.5);

    ${MediaQuery.Desktop}{
        margin-top: 6em;
    }
`;
export const Wrap = styled.div`
    display: flex;
    align-items :center;
    justify-content :space-between;
    padding: 0.5em;
`;
export const List = styled.ul`
    display :flex;
    align-items :center;
    gap: 1.5em;
`;
export const Item = styled.li`
    cursor: pointer;
    width: fit-content;
    height: fit-content;
`;
export const Image = styled.img`
    width: 80%;
    border-radius: 0.2em;
`;
export const Button = styled.button`
    display: flex;
    align-items :center;
    justify-content :center;

    border: 0.1em solid #877C78;
    font-size: 1.3em;
    padding: 1.2em;
    border-radius: 50%;
    color: #877C78;
    cursor :pointer;
`;
