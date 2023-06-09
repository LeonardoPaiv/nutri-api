import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { PostService } from 'src/users/services/post/post.service';

@ApiTags('post')
@Controller('post')
export class PostController {
  constructor(private postService: PostService) {}

  @Get(':userId')
  async getPostFromUser(@Param('userId') userId: number) {
    const postList = this.postService.findUserPosts(userId);
    return postList;
  }

  @Get(':userId/relateds')
  async getPostsReletesByUser(@Param('userId') userId: number) {
    const postList = this.postService.findPostsRelatedByUser(userId);
    return postList;
  }
}
