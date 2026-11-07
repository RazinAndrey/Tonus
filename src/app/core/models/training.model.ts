export interface TrainingData {
  id: string;
  title: string;
  short_description: string;
  description: string;
}

export type TrainingPayload = Omit<TrainingData, 'id'>;
