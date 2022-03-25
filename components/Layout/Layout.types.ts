import React from "react";

export interface LayoutProps {
  children: React.ReactNode;
}

export type FlexContainerProps = {
  height?: string;
  justifyContent?: string;
  wrap?: boolean;
};

export type SectionContainerProps = {
  backgroundColor?: string;
  marginTop?: string;
};

export type SectionParagraphProps = {
  marginBottom?: string;
};

export type BoxTitleProps = {
  width?: string;
  marginBottom?: string;
};
