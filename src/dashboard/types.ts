import { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import { DrawerProps } from '@mui/material';

export interface TopInformationBoxAppbarProps extends MuiAppBarProps {
  open?: boolean;
  drawerWidth: number;
}

export interface NavigationMenuPropsDrawerProps extends DrawerProps {
  open?: boolean;
  drawerWidth: number;
}

export interface TopInformationBoxProps {
  open?: boolean;
  handleOpen: Function;
  drawerWidth: number;
}

export interface NavigationMenuProps {
  open?: boolean;
  handleOpen: () => void;
  drawerWidth: number;
}
