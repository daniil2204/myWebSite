import React from "react";

export interface ITabBtn {
  active: boolean;
  selectTab: () => void;
  children: React.ReactNode;
}

export interface ITabContent {
  title: string;
  id: string;
  htmlContent: React.ReactNode;
}
