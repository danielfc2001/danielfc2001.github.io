import { ReactElement } from "react";

/**
 * HEADER NAVIGATION TYPES
 *  **/

/**
 * ABOUT US TYPES
 * **/

export type AboutUsSkillCardTypes = {
  skill: string
  usedLenguageIcon?: string
  useTecIcon?: string
  useSecondTecIcon?: string
}

export type EmailContactTypes = {
  email: string;
  copyBtn: boolean;
  linkBtn: boolean;
};

export type EmailContactBtnTypes = {
  btnType: "copy" | "send";
};

/**
 * CONTAINER PILL TYPES
 * **/

export type ContainerPillTypes = {
  title: string;
  target: string;
  content: Array<ContainerPillsObj> | [];
};

export type ContainerPillsObj = {
  title: string;
  img: string;
  description?: string;
  tecs?: string[];
  link?: string;
  demo?: string;
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

export type PillProjectTypes = {
  className?: string;
  title: string;
  progress?: number;
  icon?: string;
  description?: string;
  tecs?: string[];
  code?: string;
  demo?: string;
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
