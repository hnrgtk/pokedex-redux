type HeadTitleProps = {
  title: string;
};

export const headTitle = ({ title }: HeadTitleProps) => {
  title = title || "Pokedéx";
  document.title = title;
};
