import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';
import Link from 'next/link';

const links = [
  { name: 'Dashboard', icon: <DashboardIcon />, href: '/home' },
  { name: 'Orders', icon: <ShoppingCartIcon />, href: '/home/orders' },
  { name: 'Customers', icon: <PeopleIcon />, href: '/home/customers' },
  { name: 'Reports', icon: <BarChartIcon />, href: '/home/reports' },
  { name: 'Integrations', icon: <LayersIcon />, href: '/home/integrations' },
];

const savedReports = [
  { name: 'Current month', icon: <AssignmentIcon />, href: '/reports/current-month' },
  { name: 'Last quarter', icon: <AssignmentIcon />, href: '/reports/last-quarter' },
  { name: 'Year-end sale', icon: <AssignmentIcon />, href: '/reports/year-end-sale' },
];

const RenderList = ({ items }: { items: { name: string, icon: React.ReactNode, href: string }[] }) => (
  <React.Fragment>
    {items.map((item, index) => (
      <Link key={index} href={item.href} passHref>
        <ListItemButton component="a">
          <ListItemIcon>{item.icon}</ListItemIcon>
          <ListItemText primary={item.name} />
        </ListItemButton>
      </Link>
    ))}
  </React.Fragment>
);

export const mainListItems = <RenderList items={links} />;

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      Saved reports
    </ListSubheader>
    <RenderList items={savedReports} />
  </React.Fragment>
);
