import React from "react";
import { Container, Box, List, Divider } from "@mui/material";
import CustomerItem from "./Item";
import { getCookie } from "@/lib/utils/cookies.util";

const CustomersPage = async () => {
  const userAddress: { value: string; name: string } | any = await getCookie(
    "wallet-address"
  );

  const response = await fetch("http://localhost:3000/api/customers", {
    cache: "no-store",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${userAddress.value}`,
    },
  });

  if (!response.ok) {
    return <div>Failed to fetch customers</div>;
  }

  const customers: any = await response.json();

  return (
    <Container maxWidth="md">
      <Box mt={1}>
        <List>
          {customers.map((customer: any, index: any) => (
            <React.Fragment key={index}>
              <CustomerItem request={customer} />
              {index < customers.length - 1 && <Divider component="li" />}
            </React.Fragment>
          ))}
        </List>
      </Box>
    </Container>
  );
};

export default CustomersPage;
