export interface DataProps {
  data: {
    id: number;
    name: string;
    description: string;
    image: string;
    audio: string;
  }[][];
}

export interface DataQuestionState {
  id: number;
  name: string;
  description: string;
  image: string;
  audio: string;
}
