import Web3 from "web3";

declare global {
  interface Window {
    ethereum: any;
  }
}

interface PaymentDetails {
  sender: string;
  receiver: string;
  amount: string; // Amount in Ether as a string
}

export const makePayment = async ({
  sender,
  receiver,
  amount,
}: PaymentDetails): Promise<{ success: boolean; message: string; transactionHash?: string }> => {
  if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
    try {
      const web3 = new Web3(window.ethereum);

      // Check if the sender's wallet is connected
      const accounts = await web3.eth.getAccounts();
      console.log("Accounts:", accounts);
      console.log("Sender:", sender);
      if (
        !accounts ||
        accounts.length === 0 ||
        accounts[0].toLowerCase() !== sender.toLowerCase()
      ) {
        return { success: false, message: "Sender wallet not connected" };
      }

      console.log("Sending payment...");
      console.log("Sender:", sender);
      console.log("Receiver:", receiver);
      console.log("Amount:", amount);

      // Convert the amount to Wei (smallest unit of Ether)
      const amountInWei = web3.utils.toWei(amount, "ether");

      // Send transaction
      const transaction = await web3.eth.sendTransaction({
        from: sender,
        to: receiver,
        value: amountInWei,
      });

      // If the transaction is successful, return success message and transaction hash
      return {
        success: true,
        message: "Payment successful",
        transactionHash: transaction.transactionHash.toString(),
      };
    } catch (error: any) {
      console.error("Payment error:", error);
      return { success: false, message: `Payment failed: ${error.message}` };
    }
  } else {
    console.log("Please install MetaMask");
    return { success: false, message: "MetaMask is not installed" };
  }
};
