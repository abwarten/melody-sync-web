"use client";

import {
  StepsSection,
  StepsTitle,
  StepsGrid,
  Step,
  StepIcon,
  StepTitle,
  StepDescription,
} from "./styled";
import { STEPS } from "../../model/constants";

export const Steps = () => {
  return (
    <StepsSection>
      <StepsTitle>간단한 3단계로 시작하기</StepsTitle>
      <StepsGrid>
        {STEPS.map((step, index) => (
          <Step key={index}>
            <StepIcon>{step.icon}</StepIcon>
            <StepTitle>{step.title}</StepTitle>
            <StepDescription>{step.description}</StepDescription>
          </Step>
        ))}
      </StepsGrid>
    </StepsSection>
  );
};
