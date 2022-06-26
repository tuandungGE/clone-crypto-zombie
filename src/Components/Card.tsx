type CardProps = {
  id: number;
  title: string;
  percent: number;
};

const Card = (props: CardProps) => {
  return (
    <div className="relative rounded border-4 border-blue-900 text-white">
      <div className="bg-[#192033] px-4 py-10 text-center">{props.title}</div>
      <div className="bg-[#282e4a] px-4 pt-6 pb-14 text-center text-xl font-bold text-green-400">
        {props.percent}% Completed
      </div>
      <div className="absolute -top-4 -left-3 rounded bg-sky-700 py-2 px-4">
        {props.id}
      </div>
      <div className="absolute inset-x-0 -bottom-4 flex justify-center">
        <div className="rounded bg-sky-700 py-2 px-6 text-lg font-bold">
          Start Course
        </div>
      </div>
    </div>
  );
};

export { Card };
