import { DataQuestionState } from '../../model/app.model';

export interface QuestionBlockProps {
  dataComponent: DataQuestionState | null;
  isDisabled: boolean;
}
