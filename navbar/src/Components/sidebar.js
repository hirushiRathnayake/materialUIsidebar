import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AddHomeIcon from '@mui/icons-material/AddHome';
import DescriptionIcon from '@mui/icons-material/Description';
import DataUsageIcon from '@mui/icons-material/DataUsage';
import SettingsInputComponentIcon from '@mui/icons-material/SettingsInputComponent';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
//import {Navigate, useNavigate} from 'react-router-dom';

export default function TemporaryDrawer({state,setState,toggleDrawer}) {


  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
     
      <List>
        
        {
        
        ['Dashboad', 'Home', 'Test case', 'Data','Component','Locator','Settings','Support'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              
              <ListItemIcon>
               {index=== 0 ? <DashboardIcon /> : null} 
               {index=== 1 ? <AddHomeIcon/> : null}   
               {index=== 2 ? <DescriptionIcon/> : null}
               {index=== 3 ? <DataUsageIcon/> : null}
               {index=== 4 ? <SettingsInputComponentIcon/> : null}   
               {index=== 5 ? <LocationOnIcon/> : null}
               {index=== 6 ? <SettingsIcon/> : null}
               {index=== 7 ? <HelpOutlineIcon/> : null}
              </ListItemIcon>
              
        
              <ListItemText primary={text} />
              
            </ListItemButton>
            
            
      
          </ListItem>
              
        ))}
    
      </List>
     <Divider />
    </Box>
  );

  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}