type ThumbnailProps = {
  imageUrl: string;
}

export function Thumbnail({
  imageUrl,
}: ThumbnailProps) {
  return <img src={imageUrl} />
}
