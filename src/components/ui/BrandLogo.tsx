type BrandLogoProps = {
  subtitle: string;
  phone: string;
  footerNote?: string;
  rootClassName?: string;
  className?: string;
};

export function BrandLogo({
  subtitle,
  phone,
  footerNote,
  rootClassName = "about-logo",
  className,
}: BrandLogoProps) {
  const composedClassName = [rootClassName, className].filter(Boolean).join(" ");

  return (
    <div className={composedClassName}>
      <p className="logo-title">LOCAL ROOTS</p>
      <p className="logo-sub">{subtitle}</p>
      <p className="logo-phone">{phone}</p>
      {footerNote ? <p className="logo-sub">{footerNote}</p> : null}
    </div>
  );
}
