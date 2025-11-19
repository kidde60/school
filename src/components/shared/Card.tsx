import type { ReactNode } from "react";

interface CardProps {
  title?: string;
  children: ReactNode;
  actions?: ReactNode;
  className?: string;
}

export default function Card({
  title,
  children,
  actions,
  className = "",
}: CardProps) {
  return (
    <div
      className={`bg-white rounded-xl shadow-sm border border-blue-100 overflow-hidden ${className}`}
    >
      {(title || actions) && (
        <div className="px-6 py-4 border-b border-blue-100 flex items-center justify-between">
          {title && (
            <h3 className="text-lg font-semibold text-blue-900">{title}</h3>
          )}
          {actions && <div>{actions}</div>}
        </div>
      )}
      <div className="p-6">{children}</div>
    </div>
  );
}
