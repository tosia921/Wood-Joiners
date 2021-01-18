import React from 'react';

import { ProcessSectionContainer, SectionBanner, BannerText, GridContainer, Step1, Step2, Step3, Step4, SeeFullProcessLink,
         Step1Icon, Step1Text, Step2Icon, Step2Text, Step3Icon, Step3Text, Step4Icon, Step4Text, IconBackground  } from './ProcessSection.styles';


const ProcessSection = () => {
    return (
        <ProcessSectionContainer>
            <SectionBanner>
                <BannerText>OUR PROCESS</BannerText>
            </SectionBanner>
            <GridContainer>
                <Step1>
                    <IconBackground>
                        <Step1Icon/>
                    </IconBackground>
                    <Step1Text>Contact Us to get Your free estimate.</Step1Text>
                </Step1>
                <Step2>
                    <IconBackground>
                        <Step2Icon/>
                    </IconBackground>
                    <Step2Text>Assesing the job, initial quote.</Step2Text>
                </Step2>
                <Step3>
                    <IconBackground>
                        <Step3Icon/>
                     </IconBackground>
                    <Step3Text>Agree for a quote.</Step3Text>
                </Step3>
                <Step4>
                    <IconBackground>
                        <Step4Icon/>
                    </IconBackground>
                    <Step4Text>Sit back! We do the rest...</Step4Text>
                </Step4>
            </GridContainer>
            <SeeFullProcessLink to="/process">Click to see full Process</SeeFullProcessLink>
        </ProcessSectionContainer>
    )
}

export default ProcessSection;