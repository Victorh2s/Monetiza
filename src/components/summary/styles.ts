import styled from 'styled-components';

export const Container = styled.div`

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin-top: -8rem;

    div {
        background: var(--shape);
        padding: 1.5rem 2rem;
        border-radius: 0.25rem;
        color: var(--text-title);

        header {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        strong{
            margin-bottom: 1rem;
            font-size: 2rem;
            font-weight: 500;
            line-height: 3rem;
            display: block;
        }

        &.highlight-background{
           background: var(--green);
           color: #fff; 
        }
    }
`;