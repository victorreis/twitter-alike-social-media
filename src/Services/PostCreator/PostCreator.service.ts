import dayjs from 'dayjs';
import { nanoid } from 'nanoid';

import {
  LOCAL_STORAGE,
  SHORT_DATE_FORMAT,
} from '../../Config/Constants.config';
import {
  REACHED_THE_MAX_NUMBER_OF_POSTS_PER_DAY,
  USER_NOT_FOUND,
} from '../../Config/ErrorMessages.config';
import { PostType } from '../../Models/Post.types';
import { QuotePostType } from '../../Models/QuotePost.types';
import { RepostType } from '../../Models/Repost.types';
import { postRetrieverService } from '../PostRetriever';
import { userRetrieverService } from '../UserRetriever';
import { PostCreatorService } from './PostCreator.service.type';

const reachedTheMaximumNumberOfPostsPerDay = (userId: string) => {
  const postsByUser = postRetrieverService.getAllCreatedByUser(userId);
  const todayPosts = postsByUser.filter(
    (post) =>
      dayjs(post.createdAt).format(SHORT_DATE_FORMAT) ===
      dayjs(new Date()).format(SHORT_DATE_FORMAT)
  );

  return todayPosts.length >= 5;
};

const createPost = (text: string, createdById: string): PostType => {
  const posts = postRetrieverService.getAll();
  const userCreator = userRetrieverService.getById(createdById);

  if (!userCreator) {
    throw Error(USER_NOT_FOUND(createdById));
  }
  if (reachedTheMaximumNumberOfPostsPerDay(createdById)) {
    console.error(REACHED_THE_MAX_NUMBER_OF_POSTS_PER_DAY);
    throw Error(REACHED_THE_MAX_NUMBER_OF_POSTS_PER_DAY);
  }

  const newPost: PostType = {
    type: 'Post',
    id: nanoid(),
    text,
    createdAt: new Date(),
    createdBy: userCreator,
    reposts: 0,
    quotPosts: 0,
  };

  posts.push(newPost);
  localStorage.setItem(LOCAL_STORAGE.POSTS, JSON.stringify(posts));

  return newPost;
};

const createRepost = (
  originalPostId: string,
  createdById: string
): RepostType => {
  const posts = postRetrieverService.getAll();
  const originalPost = postRetrieverService.getById(originalPostId) as PostType;
  const userCreator = userRetrieverService.getById(createdById);

  if (!originalPost || !userCreator) {
    throw Error(USER_NOT_FOUND(createdById));
  }
  if (reachedTheMaximumNumberOfPostsPerDay(createdById)) {
    console.error(REACHED_THE_MAX_NUMBER_OF_POSTS_PER_DAY);
    throw Error(REACHED_THE_MAX_NUMBER_OF_POSTS_PER_DAY);
  }

  const newRepost: RepostType = {
    type: 'Repost',
    originalPost,
    id: nanoid(),
    createdAt: new Date(),
    createdBy: userCreator,
  };

  posts.push(newRepost);
  localStorage.setItem(LOCAL_STORAGE.POSTS, JSON.stringify(posts));

  return newRepost;
};

const createQuotePost = (
  originalPostId: string,
  text: string,
  createdById: string
): QuotePostType => {
  const posts = postRetrieverService.getAll();
  const originalPost = postRetrieverService.getById(originalPostId) as PostType;
  const userCreator = userRetrieverService.getById(createdById);

  if (!userCreator) {
    throw Error(USER_NOT_FOUND(createdById));
  }
  if (reachedTheMaximumNumberOfPostsPerDay(createdById)) {
    console.error(REACHED_THE_MAX_NUMBER_OF_POSTS_PER_DAY);
    throw Error(REACHED_THE_MAX_NUMBER_OF_POSTS_PER_DAY);
  }

  const newPost: QuotePostType = {
    type: 'QuotePost',
    originalPost,
    id: nanoid(),
    text,
    createdAt: new Date(),
    createdBy: userCreator,
    reposts: 0,
    quotPosts: 0,
  };

  posts.push(newPost);
  localStorage.setItem(LOCAL_STORAGE.POSTS, JSON.stringify(posts));

  return newPost;
};

export const postCreatorService: PostCreatorService = {
  createPost,
  createRepost,
  createQuotePost,
};
