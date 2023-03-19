const classNames = (...classes: (string | undefined)[]): string | undefined => {
  return classes.filter((item) => !!item).join(" ");
};

export default classNames;
