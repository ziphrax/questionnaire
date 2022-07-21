import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Questionnaire, QuestionnaireRelations} from '../models';

export class QuestionnaireRepository extends DefaultCrudRepository<
  Questionnaire,
  typeof Questionnaire.prototype.id,
  QuestionnaireRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Questionnaire, dataSource);
  }
}
