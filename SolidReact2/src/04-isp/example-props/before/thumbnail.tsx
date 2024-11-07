import { User } from "../../../types";

type ThumbnailProps = {
  user: User;
}

export function Thumbnail({
  user,
}: ThumbnailProps) {
  return <img src={user.profileThumbnail} />
}
