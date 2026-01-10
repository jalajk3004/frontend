import React from "react";
import type { FeatureKey } from "@/types/feature";
import { OneClickAdLaunchModal } from "./OneClickAdLaunch";
import { AICreativeIntelligenceModal } from "./AICreativeIntelligence";
import { SmartAutomationOptimizationModal } from "./smartOptimization";


export const FEATURE_MODAL_CONTENT: Record<FeatureKey, React.ReactNode> = {
  one_click_ad_launch: <OneClickAdLaunchModal  />,
  ai_creative_intelligence: <AICreativeIntelligenceModal />,
  smart_automation: <SmartAutomationOptimizationModal/>,
  analytics: <div>Analytics content coming soon...</div>,
  campaign_management: <div>Campaign Management content coming soon...</div>,
  social_media: <div>Social Media content coming soon...</div>,
  geo_targeting: <div>geo_targeting content coming soon...</div>,
  agency_tools: <div>agency_tools content coming soon...</div>,
  influencer_marketing: <div>influencer_marketing content coming soon...</div>
};