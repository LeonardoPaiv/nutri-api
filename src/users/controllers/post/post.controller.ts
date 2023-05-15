import { Controller, Get, Param } from '@nestjs/common';
import { PostService } from 'src/users/services/post/post.service';

@Controller('post')
export class PostController {
  constructor(private postService: PostService) {}

  @Get(':userId')
  async getPostFromUser(@Param('userId') userId: number) {
    const postList = this.postService.findUserPosts(userId);
    return postList;
  }
}