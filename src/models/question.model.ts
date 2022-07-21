import {Model, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Question extends Model {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  questionNumber?: number;

  @property({
    type: 'string',
    required: true,
  })
  questionTitle: string;

  @property({
    type: 'string',
  })
  questionDescription?: string;

  @property({
    type: 'string',
  })
  questionType?: string;

  @property({
    type: 'string',
  })
  defaultAnswer?: string;

  @property({
    type: 'array',
    itemType: 'string',
  })
  answerOptions?: string[];

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Question>) {
    super(data);
  }
}

export interface QuestionRelations {
  // describe navigational properties here
}

export type QuestionWithRelations = Question & QuestionRelations;
