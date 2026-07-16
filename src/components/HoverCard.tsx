interface HoverCardProps {
  children: React.ReactNode;
  variant?: 'default' | 'sm' | 'lg' | 'team';
  style?: React.CSSProperties;
  className?: string;
  onMouseEnter?: React.MouseEventHandler<HTMLDivElement>;
  onMouseLeave?: React.MouseEventHandler<HTMLDivElement>;
}

/** Wraps children in a card with a lift-on-hover effect. */
export default function HoverCard({
  children,
  variant = 'default',
  style,
  className = '',
  onMouseEnter,
  onMouseLeave,
}: Readonly<HoverCardProps>) {
  const variantSuffix: Record<typeof variant, string> = {
    sm: 'hover-card-sm',
    lg: 'hover-card-lg',
    team: 'hover-card-team',
    default: '',
  };
  const variantClass = `hover-card ${variantSuffix[variant]}`.trim();

  return (
    <div
      className={`${variantClass} ${className}`}
      style={style}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </div>
  );
}
