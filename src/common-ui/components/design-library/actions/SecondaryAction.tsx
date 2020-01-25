import React from 'react'
import styled from 'styled-components'
import { colorMidPurple, colorWhite } from 'src/common-ui/components/design-library/colors'
import {
    fontSizeSmall,
    TypographyActionText,
} from 'src/common-ui/components/design-library/typography'

const StyledSecondaryAction = styled.div`
    padding: 10px 20px;
    border: 1px solid ${colorMidPurple};
    box-sizing: border-box;
    border-radius: 5px;
    cursor: pointer;
    display: inline-block;

    &: hover {
        background-color: ${colorMidPurple};
        color: ${colorWhite};
        
        & * {
          color: ${colorWhite};  
        }
    }
`
const StyledSecondaryActionLinkText = styled(TypographyActionText)`
    font-size: ${fontSizeSmall}px;
    color: ${colorMidPurple};

    &: hover {
        color: ${colorWhite};
    }
`
export const SecondaryAction = ({
    label,
    onClick,
    disabled,
}: {
    label: string
    disabled?: boolean
    onClick: () => void
}) => (
    <StyledSecondaryAction 
        onClick={disabled === true ? undefined : onClick}
        disabled={disabled} 
        key={`button-${label}`}
        >
        <StyledSecondaryActionLinkText>{label}</StyledSecondaryActionLinkText>
    </StyledSecondaryAction>
)
