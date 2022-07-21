import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {QuestionnaireAnswers, QuestionnaireAnswersRelations} from '../models';

export class QuestionnaireAnswersRepository extends DefaultCrudRepository<
  QuestionnaireAnswers,
  typeof QuestionnaireAnswers.prototype.id,
  QuestionnaireAnswersRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(QuestionnaireAnswers, dataSource);
  }
}
