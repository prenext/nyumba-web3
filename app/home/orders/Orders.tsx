import React from 'react';
import {
  Avatar,
  Box,
  Container,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  ListItemSecondaryAction,
  Typography,
  InputBase,
  Paper,
  Button,
  Grid,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';

const orders = [
  {
    name: "Ciaran Murray",
    email: "ciaran.murray@email.com",
    date: "Feb 3, 2023",
    invoice: "INV-1232",
    status: "Refunded",
  },
  {
    name: "Maria Macdonald",
    email: "maria.mc@email.com",
    date: "Feb 3, 2023",
    invoice: "INV-1231",
    status: "Refunded",
  },
  {
    name: "Charles Fulton",
    email: "fulton@email.com",
    date: "Feb 3, 2023",
    invoice: "INV-1230",
    status: "Cancelled",
  },
  {
    name: "Jay Hooper",
    email: "hooper@email.com",
    date: "Feb 3, 2023",
    invoice: "INV-1229",
    status: "Cancelled",
  },
];

const OrderItem = ({ order }: { order: any }) => (
  <ListItem alignItems="flex-start">
    <ListItemAvatar>
      <Avatar>{order.name[0]}</Avatar>
    </ListItemAvatar>
    <Grid container>
      <Grid item xs={12} sm={8}>
        <ListItemText
          primary={
            <Typography component="span" variant="body1">
              {order.name}
            </Typography>
          }
          secondary={
            <>
              <Typography component="span" variant="body2" color="textPrimary">
                {order.email}
              </Typography>
              <br />
              {order.date} - {order.invoice}
              <br />
              <Button variant="text" color="primary" sx={{ mt: 1 }}>
                View
              </Button>
            </>
          }
        />
      </Grid>
      <Grid item xs={12} sm={4} container alignItems="center" justifyContent="flex-end">
        {order.status === 'Refunded' && (
          <Box display="flex" alignItems="center">
            <CheckCircleIcon color="primary" fontSize="small" />
            <Typography component="span" variant="body2" color="primary" ml={0.5}>
              Refunded
            </Typography>
          </Box>
        )}
        {order.status === 'Cancelled' && (
          <Box display="flex" alignItems="center">
            <CancelIcon color="error" fontSize="small" />
            <Typography component="span" variant="body2" color="error" ml={0.5}>
              Cancelled
            </Typography>
          </Box>
        )}
        <IconButton edge="end" aria-label="more">
          <MoreVertIcon />
        </IconButton>
      </Grid>
    </Grid>
  </ListItem>
);

const OrdersList = () => (
  <Container maxWidth="md">
    <Box mt={2}>
      <Typography variant="h6" gutterBottom>
        Orders
      </Typography>
      <Paper component="form" sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}>
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search"
          inputProps={{ 'aria-label': 'search orders' }}
        />
        <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>
      <List>
        {orders.map((order, index) => (
          <React.Fragment key={index}>
            <OrderItem order={order} />
            {index < orders.length - 1 && <Divider component="li" />}
          </React.Fragment>
        ))}
      </List>
    </Box>
  </Container>
);

function OrdersPage() {
  return (
    <div>
      <OrdersList />
    </div>
  );
}

export default OrdersPage;
