import NextLink, { LinkProps } from "next/link";

type Props = Partial<LinkProps> & {
  title: string;
  target?: string;
};

export function Link({ title, ...props }: Props) {
  return (
    <NextLink href="#" {...props}>
      <span className="text-sm underline text-muted-foreground hover:text-foreground transition-colors">
        {title}
      </span>
    </NextLink>
  );
}
