interface HoverCardProps {
  children: React.ReactNode;
  variant?: 'default' | 'sm' | 'lg' | 'team';
  style?: React.CSSProperties;
  className?: string;
}

/** Wraps children in a card with a lift-on-hover effect. */
export default function HoverCard({
  children,
  variant = 'default',
  style,
  className = '',
}: Readonly<HoverCardProps>) {
  const variantSuffix: Record<typeof variant, string> = {
    sm: 'hover-card-sm',
    lg: 'hover-card-lg',
    team: 'hover-card-team',
    default: '',
  };
  const variantClass = `hover-card ${variantSuffix[variant]}`.trim();

  return (
    <div className={`${variantClass} ${className}`} style={style}>
      {children}
    </div>
  );
}
