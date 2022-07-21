import {Entity, model, property} from '@loopback/repository';
import {Question} from './question.model';

@model({settings: {strict: false}})
export class Questionnaire extends Entity {
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
  name: string;

  @property({
    type: 'date',
  })
  validFrom?: string;

  @property({
    type: 'date',
  })
  validTo?: string;

  @property.array(Question)
  questions: Question[];

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Questionnaire>) {
    super(data);
  }
}

export interface QuestionaireRelations {
  // describe navigational properties here
}

export type QuestionaireWithRelations = Questionnaire & QuestionaireRelations;
