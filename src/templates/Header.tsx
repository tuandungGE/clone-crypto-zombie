import * as React from 'react';

const Header = () => {
  return (
    <div className="fixed h-auto w-full bg-stone-900 text-white">
      <div className="mx-auto flex max-w-5xl items-center justify-between py-2">
        <div className="flex items-center gap-4">
          <div className="text-lg font-medium">Logo</div>
          <div className="rounded border-2 border-solid border-white px-4 py-2">
            Course
          </div>
        </div>
        <div className="flex items-center gap-4 text-white">
          <div>Ask Question</div>
          <div>Share</div>
          <select className="bg-stone-900">
            <option className="w-10" value="">
              VN
            </option>
            <option value="">JP</option>
            <option value="">EN</option>
          </select>
          <div className="rounded bg-slate-500 py-2 px-4 font-medium">
            Register
          </div>
          <div className="rounded bg-sky-500 py-2 px-4 font-medium">
            Sign IN
          </div>
        </div>
      </div>
    </div>
  );
};

export { Header };
