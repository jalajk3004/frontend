import React from "react";

export type Feature = {
  key: FeatureKey; 
  title: string;
  description: string[];
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  openMode?: "modal" | "direct" | "redirect";
  redirectTo?: string;
};

export type FeatureKey =
  | "one_click_ad_launch"
  | "ai_creative_intelligence"
  | "smart_automation"
  | "analytics"
  | "campaign_management"
  | "social_media"
  | "geo_targeting"
  | "agency_tools"
  | "influencer_marketing";