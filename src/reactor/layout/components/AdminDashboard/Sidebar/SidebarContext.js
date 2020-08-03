import React from 'react';
import { currentRoute } from 'reactor/router/navigator';


const SidebarContext = React.createContext({
    currentRoute: currentRoute(),
});

export default SidebarContext;