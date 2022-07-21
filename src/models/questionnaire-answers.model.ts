import {Entity, model, property} from '@loopback/repository';
import {Answer} from './answer.model';

@model({settings: {strict: false}})
export class QuestionnaireAnswers extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  respondersEmail: string;

  @property({
    type: 'date',
    required: true,
  })
  responseDate: string;

  @property({
    type: 'string',
    required: true,
  })
  questionnaireId: string;

  @property.array(Answer)
  questions: Answer[];

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<QuestionnaireAnswers>) {
    super(data);
  }
}

export interface QuestionnaireAnswersRelations {
  // describe navigational properties here
}

export type QuestionnaireAnswersWithRelations = QuestionnaireAnswers &
  QuestionnaireAnswersRelations;
