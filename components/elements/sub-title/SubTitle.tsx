import cx from "clsx";

type SubTitle = {
  subTitle: string;
  className?: string;
};

export const SubTitle = ({ subTitle, className }: SubTitle) => {
  return (
    <div className="mb-12 flex w-full items-center gap-2 border-b border-neutral-300 pb-4 text-[#464647] sm:mb-14">
      <span className="block h-3 w-3 rounded-full bg-primary-300" />
      <span className={cx(className)}>{subTitle}</span>
    </div>
  );
};
