import PropTypes from 'prop-types';
// import css from './Profile.module.css';
import { getFormatNumber } from 'utils';
import {
  Container,
  Description,
  Avatar,
  Name,
  Tag,
  Location,
  Stats,
  Label,
  Quantity,
} from './Profile.styled';

export const Profile = ({
  username,
  tag,
  location,
  stats: { likes, views, followers },
  avatar,
}) => {
  return (
    <Container>
      <Description>
        <Avatar alt="User avatar" src={avatar} />
        <Name>{username}</Name>
        <Tag>`@{tag}`</Tag>
        <Location>{location}</Location>
      </Description>

      <Stats>
        <li>
          <Label>Followers</Label>
          <Quantity>{getFormatNumber(followers)}</Quantity>
        </li>
        <li>
          <Label>Views</Label>
          <Quantity>{getFormatNumber(views)}</Quantity>
        </li>
        <li>
          <Label>Likes</Label>
          <Quantity>{getFormatNumber(likes)}</Quantity>
        </li>
      </Stats>
    </Container>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    likes: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    followers: PropTypes.number.isRequired,
  }),
};
