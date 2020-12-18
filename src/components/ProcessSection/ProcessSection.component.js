import React from 'react';

import { ProcessSectionContainer, SectionBanner, BannerText, GridContainer, Step1, Step2, Step3, Step4, SeeFullProcessLink,
         Step1Icon, Step1Text, Step2Icon, Step2Text, Step3Icon, Step3Text, Step4Icon, Step4Text  } from './ProcessSection.styles';

const ProcessSection = () => {
    return (
        <ProcessSectionContainer>
            <SectionBanner>
                <BannerText>OUR PROCESS</BannerText>
            </SectionBanner>
            <GridContainer>
                <Step1>
                    <Step1Icon/>
                    <Step1Text>Contact Us to get Your free estimate.</Step1Text>
                </Step1>
                <Step2>
                    <Step2Icon/>
                    <Step2Text>We come to your house, asses the job and give you our initial quote.</Step2Text>
                </Step2>
                <Step3>
                    <Step3Icon/>
                    <Step3Text>Agree for a quote.</Step3Text>
                </Step3>
                <Step4>
                    <Step4Icon/>
                    <Step4Text>Sit back! We do the rest...</Step4Text>
                </Step4>
            </GridContainer>
            <SeeFullProcessLink>See Our Full Process</SeeFullProcessLink>
        </ProcessSectionContainer>
    )
}

export default ProcessSection;