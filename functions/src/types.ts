export interface GenerateLogoRequest {
  prompt: string;
  style: string;
}

export interface GenerateLogoResponse {
  id: string;
  prompt: string;
  style: LogoStyle;
  imageUrl: string;
}
export interface LogoStyle {
  key: string;
  label: string;
  url: string;
}
