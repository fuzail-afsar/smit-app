import List, { ListProps } from "@mui/material/List";
import ListItem, { ListItemProps } from "@mui/material/ListItem";
import ListItemButton, {
  ListItemButtonProps,
} from "@mui/material/ListItemButton";
import ListItemText, { ListItemTextProps } from "@mui/material/ListItemText";

type NavListProps = {
  navItems: string[];
  listProps?: ListProps;
  listItemProps?: ListItemProps;
  listItemButtonProps?: ListItemButtonProps;
  listItemTextProps?: ListItemTextProps;
};
const NavList: React.FC<NavListProps> = ({
  navItems,
  listProps,
  listItemProps,
  listItemButtonProps,
  listItemTextProps,
}) => {
  return (
    <List {...listProps}>
      {navItems.map((item, index) => (
        <ListItem key={item + index} {...listItemProps}>
          <ListItemButton {...listItemButtonProps}>
            <ListItemText primary={item} {...listItemTextProps} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};

export default NavList;
