import {Model, model, property} from '@loopback/repository';

@model()
export class Answer extends Model {
  @property({
    type: 'number',
    id: true,
    generated: false,
    required: true,
  })
  question: number;

  @property({
    type: 'string',
    required: true,
  })
  answer: string;


  constructor(data?: Partial<Answer>) {
    super(data);
  }
}

export interface AnswerRelations {
  // describe navigational properties here
}

export type AnswerWithRelations = Answer & AnswerRelations;
