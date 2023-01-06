import Logo, { LogoProps } from "components/pattern/atoms/logo/Logo";
import { Link } from "react-router-dom";

type LogoAnchorProps = {
  to?: string;
} & LogoProps;

const LogoAnchor: React.FC<LogoAnchorProps> = ({ to = "./", ...logoProps }) => {
  return (
    <Link to={to}>
      <Logo {...logoProps} />
    </Link>
  );
};

export default LogoAnchor;
