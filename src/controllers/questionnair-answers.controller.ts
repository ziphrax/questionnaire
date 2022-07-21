import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {QuestionnaireAnswers} from '../models';
import {QuestionnaireAnswersRepository} from '../repositories';

export class QuestionnairAnswersController {
  constructor(
    @repository(QuestionnaireAnswersRepository)
    public questionnaireAnswersRepository : QuestionnaireAnswersRepository,
  ) {}

  @post('/questionnaire-answers')
  @response(200, {
    description: 'QuestionnaireAnswers model instance',
    content: {'application/json': {schema: getModelSchemaRef(QuestionnaireAnswers)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(QuestionnaireAnswers, {
            title: 'NewQuestionnaireAnswers',
            exclude: ['id'],
          }),
        },
      },
    })
    questionnaireAnswers: Omit<QuestionnaireAnswers, 'id'>,
  ): Promise<QuestionnaireAnswers> {
    return this.questionnaireAnswersRepository.create(questionnaireAnswers);
  }

  @get('/questionnaire-answers/count')
  @response(200, {
    description: 'QuestionnaireAnswers model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(QuestionnaireAnswers) where?: Where<QuestionnaireAnswers>,
  ): Promise<Count> {
    return this.questionnaireAnswersRepository.count(where);
  }

  @get('/questionnaire-answers')
  @response(200, {
    description: 'Array of QuestionnaireAnswers model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(QuestionnaireAnswers, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(QuestionnaireAnswers) filter?: Filter<QuestionnaireAnswers>,
  ): Promise<QuestionnaireAnswers[]> {
    return this.questionnaireAnswersRepository.find(filter);
  }

  @patch('/questionnaire-answers')
  @response(200, {
    description: 'QuestionnaireAnswers PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(QuestionnaireAnswers, {partial: true}),
        },
      },
    })
    questionnaireAnswers: QuestionnaireAnswers,
    @param.where(QuestionnaireAnswers) where?: Where<QuestionnaireAnswers>,
  ): Promise<Count> {
    return this.questionnaireAnswersRepository.updateAll(questionnaireAnswers, where);
  }

  @get('/questionnaire-answers/{id}')
  @response(200, {
    description: 'QuestionnaireAnswers model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(QuestionnaireAnswers, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(QuestionnaireAnswers, {exclude: 'where'}) filter?: FilterExcludingWhere<QuestionnaireAnswers>
  ): Promise<QuestionnaireAnswers> {
    return this.questionnaireAnswersRepository.findById(id, filter);
  }

  @patch('/questionnaire-answers/{id}')
  @response(204, {
    description: 'QuestionnaireAnswers PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(QuestionnaireAnswers, {partial: true}),
        },
      },
    })
    questionnaireAnswers: QuestionnaireAnswers,
  ): Promise<void> {
    await this.questionnaireAnswersRepository.updateById(id, questionnaireAnswers);
  }

  @put('/questionnaire-answers/{id}')
  @response(204, {
    description: 'QuestionnaireAnswers PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() questionnaireAnswers: QuestionnaireAnswers,
  ): Promise<void> {
    await this.questionnaireAnswersRepository.replaceById(id, questionnaireAnswers);
  }

  @del('/questionnaire-answers/{id}')
  @response(204, {
    description: 'QuestionnaireAnswers DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.questionnaireAnswersRepository.deleteById(id);
  }
}
