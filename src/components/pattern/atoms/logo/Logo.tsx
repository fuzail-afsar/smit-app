export type LogoProps = {
  src: string;
  style?: React.CSSProperties;
};
const Logo: React.FC<LogoProps> = ({ src, style }) => {
  return <img style={{ maxWidth: "100%", ...style }} src={src} alt="logo" />;
};

export default Logo;
