import React from 'react';
import { styled } from 'styled-components';
import { SectionTitle } from '../../../components/SectionTitle';
import { Icon } from '../../../components/icon/Icon';
import { Slider } from '../../../components/slider/Slider';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { IconWrapper } from '../../../components/IconWrapper';

export const Testimony = () => {
    return (
        <StyledTestimony>
            <SectionTitle>Testimony</SectionTitle>
            <FlexWrapper direction={'column'} align={'center'}>
                <IconWrapper>
                    <Icon iconId={'backTicksSvg'}/>
                </IconWrapper>
                <Slider />
            </FlexWrapper>
        </StyledTestimony>
    );
};


const StyledTestimony = styled.section`

    ${IconWrapper} {
        margin: 40px 0 72px;
    }
`