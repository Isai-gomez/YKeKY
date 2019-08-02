import React from "react";
import { createDrawerNavigator, createAppContainer } from "react-navigation";

import Home from '../screens/HomeScreen';
import Initial from '../screens/InitialScreen';

const DrawerNavigator = createDrawerNavigator({
    Home,
    Initial
  },
  {
    drawerType: 'slide',
    drawerWidth: 200
  }
  );

  export default createAppContainer(DrawerNavigator);