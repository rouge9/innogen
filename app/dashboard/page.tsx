import Collection from "@/components/shared/Collection";
import { getAllImages } from "@/lib/actions/image.actions";

const Home = async ({ searchParams }: SearchParamProps) => {
  const page = Number(searchParams?.page) || 1;
  const searchQuery = (searchParams?.query as string) || "";

  const images = await getAllImages({ page, searchQuery });
  return (
    <div className="p-8">
      <Collection
        hasSearch={true}
        images={images?.data}
        totalPages={images?.totalPage}
        page={page}
      />
    </div>
  );
};

export default Home;
