/**
 * Container
 * Centers content and applies the fluid page-padding gutter (--space-pp)
 * defined in globals.css. Use for anything that should align to the page
 * grid instead of running full-bleed.
 */
export default function Container({ children, className = "" }) {
  return (
    <div className={`mx-auto w-full max-w-container px-pp ${className}`}>
      {children}
    </div>
  );
}   
