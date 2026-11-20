import Image from "next/image";
import Link from "next/link";
import type { ReactElement } from "react";
import { ContentContainer } from "@/components/content-container/ContentContainer";
import { getNewsPosts } from "@/components/news/get-news";
import { getMainNewsPosts, NEWS_PATH } from "@/components/news/news-content";
import { NewsTable } from "@/components/news/NewsTable";
import moreIcon from "@/images/btn_list_more.png";

const NEWS_NOTICES_TITLE = "News & Notices";

const TITLE_CLASS_NAME =
  "font-(family-name:--font-roboto) text-[20px] leading-[1.2] font-bold text-[#263238] min-[768px]:text-[24px] min-[1100px]:text-[30px]";

export async function MainNews(): Promise<ReactElement> {
  const posts = await getNewsPosts();

  return (
    <section aria-label={NEWS_NOTICES_TITLE} className="bg-white">
      <ContentContainer className="py-[30px] min-[768px]:py-10 min-[1100px]:py-[50px]">
        <div className="flex items-center justify-between">
          <h2 className={TITLE_CLASS_NAME}>{NEWS_NOTICES_TITLE}</h2>
          <Link
            href={NEWS_PATH}
            aria-label={NEWS_NOTICES_TITLE}
            className="shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#263238]"
          >
            <Image
              src={moreIcon}
              alt=""
              width={26}
              height={26}
              loading="eager"
            />
          </Link>
        </div>
        <div className="mt-6 min-[1100px]:mt-8">
          <NewsTable posts={getMainNewsPosts(posts)} />
        </div>
      </ContentContainer>
    </section>
  );
}
