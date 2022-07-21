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
import {Questionnaire} from '../models';
import {QuestionnaireRepository} from '../repositories';

export class QuestionnaireController {
  constructor(
    @repository(QuestionnaireRepository)
    public questionnaireRepository : QuestionnaireRepository,
  ) {}

  @post('/questionnaires')
  @response(200, {
    description: 'Questionnaire model instance',
    content: {'application/json': {schema: getModelSchemaRef(Questionnaire)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Questionnaire, {
            title: 'NewQuestionnaire',
            exclude: ['id'],
          }),
        },
      },
    })
    questionnaire: Omit<Questionnaire, 'id'>,
  ): Promise<Questionnaire> {
    return this.questionnaireRepository.create(questionnaire);
  }

  @get('/questionnaires/count')
  @response(200, {
    description: 'Questionnaire model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Questionnaire) where?: Where<Questionnaire>,
  ): Promise<Count> {
    return this.questionnaireRepository.count(where);
  }

  @get('/questionnaires')
  @response(200, {
    description: 'Array of Questionnaire model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Questionnaire, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Questionnaire) filter?: Filter<Questionnaire>,
  ): Promise<Questionnaire[]> {
    return this.questionnaireRepository.find(filter);
  }

  @patch('/questionnaires')
  @response(200, {
    description: 'Questionnaire PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Questionnaire, {partial: true}),
        },
      },
    })
    questionnaire: Questionnaire,
    @param.where(Questionnaire) where?: Where<Questionnaire>,
  ): Promise<Count> {
    return this.questionnaireRepository.updateAll(questionnaire, where);
  }

  @get('/questionnaires/{id}')
  @response(200, {
    description: 'Questionnaire model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Questionnaire, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Questionnaire, {exclude: 'where'}) filter?: FilterExcludingWhere<Questionnaire>
  ): Promise<Questionnaire> {
    return this.questionnaireRepository.findById(id, filter);
  }

  @patch('/questionnaires/{id}')
  @response(204, {
    description: 'Questionnaire PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Questionnaire, {partial: true}),
        },
      },
    })
    questionnaire: Questionnaire,
  ): Promise<void> {
    await this.questionnaireRepository.updateById(id, questionnaire);
  }

  @put('/questionnaires/{id}')
  @response(204, {
    description: 'Questionnaire PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() questionnaire: Questionnaire,
  ): Promise<void> {
    await this.questionnaireRepository.replaceById(id, questionnaire);
  }

  @del('/questionnaires/{id}')
  @response(204, {
    description: 'Questionnaire DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.questionnaireRepository.deleteById(id);
  }
}
