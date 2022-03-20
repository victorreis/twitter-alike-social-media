import dayjs from 'dayjs';

import { EXTENDED_DATE_FORMAT } from '../../Config/Constants.config';
import { TestProps } from '../../Config/Tests/Test.types';
import { FeedbackColor } from '../../Theme/Types/Colors.types';
import { Avatar } from '../Avatar';
import { Button } from '../Button';
import { Typography } from '../Typography';
import {
  UserDetailsContainer,
  UserDetailsContent,
  UserDetailsHeader,
  UserDetailsHeaderContent,
} from './UserDetails.styles';
import { UserDetailsProps, DefaultUserDetailsProps } from './UserDetails.types';

export const userDetailsDefaults: Required<DefaultUserDetailsProps> &
  Required<TestProps> = {
  testID: 'UserDetails',
};

export const UserDetails: React.FC<UserDetailsProps> = (props): JSX.Element => {
  const {
    testID = userDetailsDefaults.testID,
    isFollowing,
    onFollow,
    onUnfollow,
    name,
    nickname,
    thumbnailUrl,
    createdAt,
    following,
    followers,
    numberOfPosts,
    style,
    ...others
  } = props;

  const formattedDate = dayjs(createdAt).format(EXTENDED_DATE_FORMAT);
  const buttonText = isFollowing ? 'FOLLOWING' : 'FOLLOW';
  const buttonHoverText = isFollowing ? 'UNFOLLOW' : '';
  const buttonHoverFeedbackColor: FeedbackColor = isFollowing
    ? 'error'
    : 'info';

  const handleFollowClick = () => {
    if (!isFollowing && onFollow) {
      onFollow();
      return;
    }
    if (isFollowing && onUnfollow) {
      onUnfollow();
    }
  };

  const renderFollowButton = () => {
    if (isFollowing === undefined) {
      return null;
    }

    return (
      <Button
        hoverFeedbackColor={buttonHoverFeedbackColor}
        hoverText={buttonHoverText}
        onClick={handleFollowClick}
      >
        {buttonText}
      </Button>
    );
  };

  return (
    <UserDetailsContainer data-testid={testID} style={style} {...others}>
      <UserDetailsHeader>
        <Avatar
          isAvatarClickable={false}
          name={name}
          nickname={nickname}
          size="LG"
          thumbnailUrl={thumbnailUrl}
        />

        <UserDetailsHeaderContent>
          {renderFollowButton()}
          <Typography variant="body2">{numberOfPosts} Posts</Typography>
        </UserDetailsHeaderContent>
      </UserDetailsHeader>

      <UserDetailsContent>
        <Typography variant="h4">{name}</Typography>
        <Typography variant="body2">@{nickname}</Typography>
        <Typography variant="body2">Joined {formattedDate}</Typography>
        <br />
        <Typography>{following} following</Typography>
        <Typography>{followers} followers</Typography>
      </UserDetailsContent>
    </UserDetailsContainer>
  );
};
