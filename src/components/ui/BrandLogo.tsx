type BrandLogoProps = {
  rootClassName?: string;
  className?: string;
  alt?: string;
  imagesrc?: string;
};

export function BrandLogo({
  rootClassName = "about-logo",
  className,
  alt = "Local Roots Property Maintenance Logo",
  imagesrc = "/img/logo.png",
}: BrandLogoProps) {
  const composedClassName = [
    "flex items-center justify-center p-2",
    rootClassName,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={composedClassName}>
      <img
        src={imagesrc}
        alt={alt}
        className="max-w-full h-auto object-contain mx-auto"
        style={{ maxHeight: "160px" }}
      />
    </div>
  );
}
