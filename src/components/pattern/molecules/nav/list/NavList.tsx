import List, { ListProps } from "@mui/material/List";
import ListItem, { ListItemProps } from "@mui/material/ListItem";
import ListItemButton, {
  ListItemButtonProps,
} from "@mui/material/ListItemButton";
import ListItemText, { ListItemTextProps } from "@mui/material/ListItemText";

type NavListProps = {
  listProps?: ListProps;
  listItemsProps: {
    listItemProps?: ListItemProps;
    listItemButtonProps?: ListItemButtonProps;
    listItemTextProps: ListItemTextProps;
  }[];
};
const NavList: React.FC<NavListProps> = ({ listProps, listItemsProps }) => {
  return (
    <List {...listProps}>
      {listItemsProps.map(
        ({ listItemProps, listItemButtonProps, listItemTextProps }, index) => (
          <ListItem key={index} {...listItemProps}>
            <ListItemButton {...listItemButtonProps}>
              <ListItemText {...listItemTextProps} />
            </ListItemButton>
          </ListItem>
        )
      )}
    </List>
  );
};

export default NavList;
