type Props = {
  children: React.ReactNode;
};

export default function SearchLayout({ children }: Props) {
  return (
    <section>
      <div className="min-w-[360px] max-w-lg">{children}</div>
    </section>
  );
}
