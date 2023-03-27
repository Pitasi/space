export function SquircleShapeProvider() {
  return (
    <svg width="0" height="0" viewBox="0 0 10 10">
      <clipPath id="squircleClip" clipPathUnits="objectBoundingBox">
        <path
          fill="red"
          stroke="none"
          d="M 0,0.5 C 0,0 0,0 0.5,0 S 1,0 1,0.5 1,1 0.5,1 0,1 0,0.5"
        />
      </clipPath>
    </svg>
  );
}
