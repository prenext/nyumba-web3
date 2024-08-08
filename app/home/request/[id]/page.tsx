import { Box } from "@mui/material";
import { getPropertyById } from "./action";
import ConfirmationPage from "./form";

export default async function RequestPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const data: any = await getPropertyById(id);

  console.log(data);
  return (
    <Box p={2}>
      {data ? <ConfirmationPage property={data} /> : <>Not Found</>}
    </Box>
  );
}
