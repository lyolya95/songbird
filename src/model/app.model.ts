export interface DataProps {
  data: {
    id: number;
    name: string;
    description: string;
    image: string;
    audio: string;
    activeClass: string;
  }[][];
}

export interface DataQuestionState {
  id: number;
  name: string;
  description: string;
  image: string;
  audio: string;
  activeClass: string;
}
