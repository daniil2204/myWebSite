export interface IProjectCard {
  id: number;
  imgUrl: string;
  title: string;
  tag: string[];
  gitUrl: string;
  previewUrl: string;
}

export interface IProjectTag {
  text: string;
  onClickBtn: () => void;
  isSelected: boolean;
}
