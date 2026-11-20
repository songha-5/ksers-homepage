import type { ReactElement } from "react";
import { NewsArticleBodyNodes } from "@/components/news/NewsArticleBodyNodes";
import { parseNewsHtml } from "@/components/news/parse-news-html";

interface NewsArticleBodyProps {
  readonly html: string;
}

const BODY_CLASS_NAME = [
  "mt-8 border-t border-[#e4e4e4] pt-8 leading-relaxed text-[#595959]",
  "[&_p]:mb-4",
  "[&_ul]:mb-4 [&_ul]:list-disc [&_ul]:pl-5",
  "[&_ol]:mb-4 [&_ol]:list-decimal [&_ol]:pl-5",
  "[&_a]:font-bold [&_a]:text-primary [&_a]:underline",
  "[&_h1]:mt-6 [&_h1]:mb-3 [&_h1]:text-2xl [&_h1]:font-bold [&_h1]:text-[#263238]",
  "[&_h2]:mt-6 [&_h2]:mb-3 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-[#263238]",
  "[&_h3]:mt-4 [&_h3]:mb-2 [&_h3]:text-lg [&_h3]:font-bold [&_h3]:text-[#263238]",
  "[&_h4]:mt-4 [&_h4]:mb-2 [&_h4]:text-base [&_h4]:font-bold [&_h4]:text-[#263238]",
  "[&_blockquote]:my-4 [&_blockquote]:border-l-4 [&_blockquote]:border-[#e8eef5] [&_blockquote]:pl-4",
  "[&_img]:my-4 [&_img]:h-auto [&_img]:max-w-full",
  "[&_video]:my-4 [&_video]:h-auto [&_video]:max-w-full",
  "[&_table]:mb-4 [&_table]:w-full [&_table]:border-collapse [&_table]:text-sm",
  "[&_th]:border [&_th]:border-[#e4e4e4] [&_th]:bg-[#e8eef5] [&_th]:px-3 [&_th]:py-2 [&_th]:text-left",
  "[&_td]:border [&_td]:border-[#e4e4e4] [&_td]:px-3 [&_td]:py-2 [&_td]:text-left",
  "[&_pre]:mb-4 [&_pre]:overflow-x-auto [&_pre]:bg-[#f7f9fb] [&_pre]:p-4",
  "[&_hr]:my-6 [&_hr]:border-[#e4e4e4]",
  "[&_figure]:my-4",
  "[&_figcaption]:mt-2 [&_figcaption]:text-sm [&_figcaption]:text-[#8d8d8d]",
  "[&_.news-file]:font-normal [&_.news-file]:text-[#263238] [&_.news-file]:no-underline",
  "[&_strong]:font-bold [&_b]:font-bold",
].join(" ");

export function NewsArticleBody({ html }: NewsArticleBodyProps): ReactElement {
  const source = html.trim().startsWith("<") ? html : `<p>${html}</p>`;

  return (
    <div className={BODY_CLASS_NAME}>
      <NewsArticleBodyNodes nodes={parseNewsHtml(source)} />
    </div>
  );
}
