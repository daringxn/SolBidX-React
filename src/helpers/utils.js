export const simplifyWalletAddress = (walletAddress) => {
  return (
    walletAddress.substring(0, 4) +
    "..." +
    walletAddress.substring(walletAddress.length - 5, walletAddress.length - 1)
  );
};
