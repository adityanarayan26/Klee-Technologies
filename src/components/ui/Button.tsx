import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ArrowUpRight, ArrowRight } from "@/components/svg/Icons";

export type ButtonVariant = "primary" | "secondary" | "outline" | "text-arrow";
export type ButtonSize = "sm" | "md" | "lg";

interface BaseButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: React.ReactNode;
  showArrow?: boolean;
  arrowDirection?: "up-right" | "right";
  className?: string;
  children: React.ReactNode;
}

export type ButtonProps = BaseButtonProps &
  (
    | (React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined })
    | (React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string })
  );

/**
 * Reusable Button component adhering to KLEE Studio's refined aesthetic.
 * Supports button & link modes, hover micro-interactions, focus-visible states,
 * and deliberate arrow transitions without excessive pill rounding.
 */
export const Button = React.forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>(function Button(
  {
    variant = "primary",
    size = "md",
    icon,
    showArrow = false,
    arrowDirection = "right",
    className,
    children,
    ...props
  },
  ref
) {
  const baseStyles =
    "group relative inline-flex items-center justify-center font-medium transition-all duration-200 ease-out select-none disabled:opacity-50 disabled:pointer-events-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]";

  const sizeStyles: Record<ButtonSize, string> = {
    sm: "text-xs px-3.5 py-2 gap-1.5 rounded-[6px]",
    md: "text-sm px-5 py-2.5 gap-2 rounded-[8px]",
    lg: "text-base px-7 py-3.5 gap-2.5 rounded-[10px]",
  };

  const variantStyles: Record<ButtonVariant, string> = {
    primary:
      "bg-[var(--color-foreground)] text-white shadow-sm hover:bg-[var(--color-accent)] active:scale-[0.99]",
    secondary:
      "bg-[var(--color-surface-muted)] text-[var(--color-foreground)] border border-[var(--color-border-subtle)] hover:border-[var(--color-border)] hover:bg-[var(--color-surface-hover)] active:scale-[0.99]",
    outline:
      "bg-transparent text-[var(--color-foreground)] border border-[var(--color-border)] hover:border-[var(--color-foreground)] active:scale-[0.99]",
    "text-arrow":
      "bg-transparent text-[var(--color-foreground)] p-0 hover:text-[var(--color-accent)] rounded-none font-semibold",
  };

  const renderedSizeStyle = variant === "text-arrow" ? "text-sm gap-2" : sizeStyles[size];

  const content = (
    <>
      {icon && <span className="flex-shrink-0">{icon}</span>}
      <span>{children}</span>
      {showArrow && (
        <span className="flex-shrink-0 transition-transform duration-200 ease-out group-hover:translate-x-1 group-hover:-translate-y-0.5">
          {arrowDirection === "up-right" ? (
            <ArrowUpRight size={size === "sm" ? 14 : size === "lg" ? 18 : 16} />
          ) : (
            <ArrowRight size={size === "sm" ? 14 : size === "lg" ? 18 : 16} />
          )}
        </span>
      )}
    </>
  );

  if ("href" in props && props.href) {
    const { href, ...anchorProps } = props;
    return (
      <Link
        href={href}
        ref={ref as React.Ref<HTMLAnchorElement>}
        className={cn(baseStyles, renderedSizeStyle, variantStyles[variant], className)}
        {...anchorProps}
      >
        {content}
      </Link>
    );
  }

  const { ...buttonProps } = props as React.ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button
      ref={ref as React.Ref<HTMLButtonElement>}
      className={cn(baseStyles, renderedSizeStyle, variantStyles[variant], className)}
      {...buttonProps}
    >
      {content}
    </button>
  );
});

Button.displayName = "Button";
