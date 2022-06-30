import { string } from "prop-types";

interface UserCardProps {
  userName: string;
  introduction: string;
  avatarSrc: string;
  styleProps?: object;
  onClick?: () => void;
}

const UserCard = ({
  userName,
  introduction,
  avatarSrc,
  styleProps,
  onClick,
}: UserCardProps) => {
  return <div></div>;
};

export default UserCard;
