export default function Chip({
  customClasses,
  children,
}: {
  customClasses: string;
  children: React.ReactNode;
}) {
  return (
    <p
      className={`${customClasses} px-4 py-1 text-lg font-semibold rounded-full`}
    >
      {children}
    </p>
  );
}
