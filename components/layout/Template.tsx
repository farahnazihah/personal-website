export const TemplateText = ({ text = "Coming Soon 😞" }: { text: string }) => {
  return (
    <section className="flex flex-col items-center justify-center h-full">
      <h1 className="text-center text-4xl text-gray-300">{text}</h1>
    </section>
  );
};
