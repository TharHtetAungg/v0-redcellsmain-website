export default function Loading() {
  const keyframes = `
    @keyframes spin {
      to {
        transform: rotate(360deg);
      }
    }
  `

  return (
    <>
      <style>{keyframes}</style>
      <div
        style={{
          position: "fixed",
          inset: "0",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "rgba(14, 14, 17, 0.8)",
          zIndex: 100,
        }}
      >
        <div
          style={{
            width: "4rem",
            height: "4rem",
            border: "4px solid #E50930",
            borderTopColor: "transparent",
            borderRadius: "50%",
            animation: "spin 1s linear infinite",
          }}
        />
      </div>
    </>
  )
}
