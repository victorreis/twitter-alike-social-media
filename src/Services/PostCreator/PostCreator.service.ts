import { nanoid } from 'nanoid';

import { LOCAL_STORAGE } from '../../Config/Constants';
import { PostType } from '../../Models/Post.types';
import { QuotePostType } from '../../Models/QuotePost.types';
import { RepostType } from '../../Models/Repost.types';
import { postRetrieverService } from '../PostRetriever';
import { userRetrieverService } from '../UserRetriever';
import { PostCreatorService } from './PostCreator.service.type';

const createPost = (text: string, createdById: string): PostType => {
  const posts = postRetrieverService.getAll();
  const userCreator = userRetrieverService.getById(createdById);

  if (!userCreator) {
    throw Error(`This user doesn't exists`);
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
    throw Error(`This user doesn't exists`);
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
    throw Error(`This user doesn't exists`);
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
