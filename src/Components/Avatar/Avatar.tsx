import { useState } from 'react';

import { TestProps } from '../../Config/Tests/Test.types';
import { AvatarContainer, AvatarImage, AvatarInitials } from './Avatar.styles';
import { AvatarProps, DefaultAvatarProps } from './Avatar.types';

export const avatarDefaults: Required<DefaultAvatarProps> &
  Required<TestProps> = {
  testID: 'Avatar',
  size: 'MD',
  clickable: true,
};

export const Avatar: React.FC<AvatarProps> = (props): JSX.Element => {
  const {
    testID = avatarDefaults.testID,
    size = avatarDefaults.size,
    thumbnailUrl,
    name,
    clickable = avatarDefaults.clickable,
    style,
    ...others
  } = props;

  const [imageLoadingError, setImageLoadingError] = useState<boolean>(false);

  const handleImageLoadingError = () => {
    setImageLoadingError(true);
  };

  const extractInitials = () => {
    const splittedName = name.split(' ');
    let initials = splittedName[0]?.charAt(0) || '';
    if (splittedName.length > 1) {
      initials += splittedName[1]?.charAt(0) || '';
    }
    return initials;
  };

  const description = `${name}'s avatar photo.`;

  const renderImage = () => {
    if (!imageLoadingError) {
      return (
        <AvatarImage
          alt={description}
          clickable={clickable}
          data-testid={`${testID}_image`}
          onError={handleImageLoadingError}
          size={size}
          src={thumbnailUrl}
          title={description}
          {...others}
        />
      );
    }
    return null;
  };

  const renderInitials = () => {
    const initials = extractInitials();
    if (imageLoadingError) {
      return (
        <AvatarInitials
          data-testid={`${testID}_initials`}
          size={size}
          variant="body1"
        >
          {initials}
        </AvatarInitials>
      );
    }
    return null;
  };

  return (
    <AvatarContainer
      clickable={clickable}
      data-testid={testID}
      size={size}
      style={style}
    >
      {renderImage()}
      {renderInitials()}
    </AvatarContainer>
  );
};
