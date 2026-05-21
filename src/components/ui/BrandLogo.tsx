type BrandLogoProps = {
  rootClassName?: string;
  className?: string;
  alt?: string;
};

export function BrandLogo({
  rootClassName = "about-logo",
  className,
  alt = "Local Roots Property Maintenance Logo",
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
        src="/img/logo.png"
        alt={alt}
        className="max-w-full h-auto object-contain mx-auto"
        style={{ maxHeight: "160px" }}
      />
    </div>
  );
}
