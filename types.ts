export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export interface AbcdItem {
  letter: string;
  title: string;
  description: string;
  color: string;
  iconName: 'activity' | 'scale' | 'monitor' | 'salad';
}

export enum CalculationStatus {
  IDLE = 'IDLE',
  HEALTHY = 'HEALTHY',
  WARNING = 'WARNING',
  DANGER = 'DANGER'
}