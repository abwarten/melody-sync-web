"use client";

import {
  FeaturesSection,
  FeaturesTitle,
  FeaturesGrid,
  FeatureCard,
  FeatureIcon,
  FeatureContent,
  FeatureTitle,
  FeatureDescription,
} from "./styled";
import { FEATURES } from "../../model/constants";

export const Features = () => {
  return (
    <FeaturesSection>
      <FeaturesTitle>강력한 기능을 간단하게</FeaturesTitle>
      <FeaturesGrid>
        {FEATURES.map((feature, index) => (
          <FeatureCard key={index}>
            <FeatureIcon>{feature.icon}</FeatureIcon>
            <FeatureContent>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
            </FeatureContent>
          </FeatureCard>
        ))}
      </FeaturesGrid>
    </FeaturesSection>
  );
};
