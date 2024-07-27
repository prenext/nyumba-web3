declare global {
  interface Window {
    ethereum: any;
  }
}

type SetWalletAddress = (address: string) => void;
type SetWalletBalance = (balance: string) => void;

export const connectWallet = async (
  setWalletAddress: SetWalletAddress,
  setWalletBalance: SetWalletBalance
): Promise<void> => {
  if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
    try {
      const accounts: string[] = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setWalletAddress(accounts[0]);
      console.log(accounts[0]);
      await getWalletBalance(accounts[0], setWalletBalance);
    } catch (err: any) {
      console.error(err.message);
    }
  } else {
    console.log("Please install MetaMask");
  }
};

export const getCurrentWalletConnected = async (
  setWalletAddress: SetWalletAddress,
  setWalletBalance: SetWalletBalance
): Promise<void> => {
  if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
    try {
      const accounts: string[] = await window.ethereum.request({
        method: "eth_accounts",
      });
      if (accounts.length > 0) {
        setWalletAddress(accounts[0]);
        console.log(accounts[0]);
        await getWalletBalance(accounts[0], setWalletBalance);
      } else {
        console.log("Connect to MetaMask using the Connect button");
      }
    } catch (err: any) {
      console.error(err.message);
    }
  } else {
    console.log("Please install MetaMask");
  }
};

export const addWalletListener = (
  setWalletAddress: SetWalletAddress,
  setWalletBalance: SetWalletBalance
): void => {
  if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
    window.ethereum.on("accountsChanged", async (accounts: string[]) => {
      setWalletAddress(accounts[0]);
      console.log(accounts[0]);
      await getWalletBalance(accounts[0], setWalletBalance);
    });
  } else {
    setWalletAddress("");
    setWalletBalance("");
    console.log("Please install MetaMask");
  }
};

export const disconnectWallet = (
  setWalletAddress: SetWalletAddress,
  setWalletBalance: SetWalletBalance
): void => {
  setWalletAddress("");
  setWalletBalance("");
  console.log("Wallet disconnected");
};

const getWalletBalance = async (
  walletAddress: string,
  setWalletBalance: SetWalletBalance
): Promise<void> => {
  if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
    try {
      const balance = await window.ethereum.request({
        method: "eth_getBalance",
        params: [walletAddress, "latest"],
      });
      //@ts-ignore
      const balanceInEther = window.web3.utils.fromWei(balance, "ether");
      setWalletBalance(balanceInEther);
      console.log(`Balance: ${balanceInEther} ETH`);
    } catch (err: any) {
      console.error(err.message);
    }
  }
};
