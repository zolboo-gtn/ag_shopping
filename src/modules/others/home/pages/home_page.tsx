//
import type { NextPageWithLayout } from "next";

//
import { MainLayout } from "common/components";
//
import {
  BrowseHistory,
  FeaturedCategories,
  MostVisited,
  NewProducts,
  Services,
} from "modules/others/home/components";

export const HomePage: NextPageWithLayout = () => {
  return (
    <div className="container mx-auto">
      <div className="h-[2000px]">{`Home Page`}</div>
      {/* <div className="flex flex-col gap-y-[100px] pt-5 pb-40">
        <NewProducts />
        <FeaturedCategories />
        <Services />
        <MostVisited />
        <BrowseHistory />
      </div> */}
    </div>
  );
};
HomePage.getLayout = (page) => {
  return <MainLayout>{page}</MainLayout>;
};
