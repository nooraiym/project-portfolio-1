import React from 'react';
import { styled } from 'styled-components';
import { Link } from '../../../../components/Link';
import { theme } from '../../../../styles/Theme';
import { StyledButton } from '../../../../components/Button';

type WorkPropsType = {
    title: string
    text: string
    src: string
}

export const Work = (props: WorkPropsType) => {
    return (
        <StyledWork>
            <ImageWrapper>
                <Image src={props.src} alt="" />
                <StyledButton>view project</StyledButton>
            </ImageWrapper>
            <Description>
                <Title>{props.title}</Title>
                <Text>{props.text}</Text>
                <Link href={'#'}>demo</Link>
                <Link href={'#'}>code</Link>
            </Description>
        </StyledWork>
    );
};

const StyledWork = styled.div`
background-color: ${theme.colors.secondaryBg};
    max-width: 540px;
    width: 100%;

    ${Link} {
        padding: 10px 0;

        & + ${Link} {
            margin-left: 20px;
        }
    }
`

const ImageWrapper = styled.div`
    position: relative;

    &:hover {
        &::before {
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background-color: #0000004D;
        backdrop-filter: blur(4px);
        }

        ${StyledButton} {
            opacity: 1;
        }
    }

    ${StyledButton} {
        opacity: 0;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);

        &::before {
            width: 100%;
            height: 100%;
        }
    }
`

const Image = styled.img`
    width: 100%;
    height: 260px;
    object-fit: cover;
`

const Description = styled.div`
    padding: 25px 20px;
`

const Title = styled.h3`
    margin: 0;
`

const Text = styled.p`
    margin: 14px 0 10px;
`