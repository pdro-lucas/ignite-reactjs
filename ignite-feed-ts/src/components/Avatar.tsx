import styles from './Avatar.module.css';

interface AvatarProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  hasBorder?: boolean;
}

export function Avatar({ hasBorder = true, src, ...props }: AvatarProps) {
  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      src={src}
      {...props}
    />
  );
}
