import React from 'react';
import { Container, Button } from '../../globalStyles';
import { InfoSec, InfoRow, InfoColumn, TextWrapper, TopLine, Heading, Subtitle, ImgWrapper, Img  } from './InfoSection.elements';

const InfoSection = ({lightBg, imgStart, lightTopLine, lightTextDesc, buttonLabel, description, headline, lightText, topline, img, alt, start}) => {
  return (
    <>
      <InfoSec lightBg={lightBg}>
        <Container>
            <InfoRow imgStart={imgStart}>
                <InfoColumn>
                    <TextWrapper>
                         <TopLine lightTopLine={lightTopLine}>{topline}</TopLine>
                         <Heading LightText={lightText}>{headline}</Heading>
                         <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                         <a href='https://www.facebook.com/profile.php?id=61563869588304' target='_blank' rel='noopener noreferrer'>
                           <Button big fontBig primary>
                            {buttonLabel}
                           </Button>
                         </a>
                    </TextWrapper>
                </InfoColumn>
                <InfoColumn>
                  <ImgWrapper start={start}>
                     <Img src={img} alt={alt} />
                  </ImgWrapper>
                </InfoColumn>
            </InfoRow>
        </Container>
      </InfoSec>
    </>
  )
}

export default InfoSection;