const BgImage = ({ src, minHeight }: { src: string; minHeight: string }) => {
  return (
    <div
      className="rounded-lg"
      style={{
        backgroundImage: `url('${src}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: `${minHeight}`,
        width: "100%",
      }}
    ></div>
  );
};

export default BgImage;
