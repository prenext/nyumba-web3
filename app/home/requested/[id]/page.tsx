import { Box } from "@mui/material";
import ConfirmationPage from "./form";
import { getCookie } from "@/lib/utils/cookies.util";
import { API_URL } from "@/app/url";

export default async function RequestPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const userAddress: { name: string; value: string } | any = await getCookie(
    "wallet-address"
  );

  const response = await fetch(`${API_URL}/requests/${id}`, {
    cache: "no-store",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${userAddress.value}`,
    },
  });

  if (!response.ok) {
    return <h1>Error fetching property</h1>;
  }

  const data = await response.json();

  console.log(data);

  return (
    <Box p={2}>
      {data ? (
        <ConfirmationPage
          request={data?.request}
          owner={data?.owner}
          property={data?.property}
        />
      ) : (
        <>Not Found</>
      )}
    </Box>
  );
}
