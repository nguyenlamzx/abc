import './button.scss';

export enum ButtonStyle {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  SUCCESS = 'success',
  DANGER = 'danger',
  WARNING = 'warning',
  INFO = 'info',
  LIGHT = 'light',
  DARK = 'dark',
  LINK = 'link',
}

export enum ButtonTag {
  BUTTON,
  ANCHOR,
}

export interface ButtonProps {
  tag?: number;
  style?: string;
  label: string;
}

export const DEFAULT_BUTTON: ButtonProps = {
  tag: ButtonTag.BUTTON,
  style: ButtonStyle.SECONDARY,
  label: 'default',
};
