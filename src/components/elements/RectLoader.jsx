import ContentLoader from "react-content-loader";

export default function ({ width, height, className }) {
  return (
    <ContentLoader
      width={width}
      height={height}
      speed={1.5}
      backgroundColor="rgba(0,0,0,0.15)"
      foregroundColor="rgba(0,0,0,0.5)"
      className={className}
    >
      <rect x="0" y="0" rx="3" ry="3" width="100%" height="100%" />
    </ContentLoader>
  );
}
