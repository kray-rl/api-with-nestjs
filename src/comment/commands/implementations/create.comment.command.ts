import User from '../../../user/user.entity';
import CreateCommentDto from '../../dto/create.comment.dto';

export class CreateCommentCommand {
  constructor(
    public readonly comment: CreateCommentDto,
    public readonly author: User,
  ) {}
}