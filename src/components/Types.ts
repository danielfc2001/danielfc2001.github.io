import { ReactElement } from "react";

/**
 * HEADER NAVIGATION TYPES
 *  **/

/**
 * CONTAINER PILL TYPES
 * **/

export type ContainerPillsObj = {
  title: string;
  img: string;
  progress: number;
  description?: string;
  link?: string;
};

/**
 * LEARNED AND NAVIGATION CONTAINER TYPES
 * **/

export type lenguagesLearnedTypes = {
  name: string;
  progress: number;
  icon?: string;
};

export type LearnNavigationTypes = {
  children: ReactElement[];
};

export type LearnNavigationTabsTypes = {
  name: string;
  tabName: string;
  tabIndex: number;
};

export type PillTitleType = {
  className?: string;
  title: string;
  progress?: number;
  icon?: string;
  description?: string;
  link?: string;
};

export type LenguagePillIconType = {
  className: string;
  icon?: string;
  w: string;
  h: string;
};

export type PillProgressTypes = {
  valueNow?: number;
};
