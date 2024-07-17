export const LAMPORTS_PER_SOL = 1000000000;

export const simplifyWalletAddress = (walletAddress) => {
  return (
    walletAddress.substring(0, 4) +
    "..." +
    walletAddress.substring(walletAddress.length - 5, walletAddress.length - 1)
  );
};

export const delay = (duration) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, duration);
  });
};

export function toFixed(num, fixed) {
  const re = new RegExp(`^-?\\d+(?:\\.\\d{0,${fixed || -1}})?`);
  return num.toString().match(re)[0];
}
