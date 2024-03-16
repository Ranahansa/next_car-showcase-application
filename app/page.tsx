import CustomFilter from "@/components/CustomFilter";
import Hero from "@/components/Hero";
import SearchBar from "@/components/SearchBar";
import { fetchCars } from "@/utils";
import NextImage from "next/image";

export default async function HomePage() {

  const allCars = await fetchCars();

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width " id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore the world of cars and book your favorite one!</p>
        </div>
        <div className="home__filters">
            <SearchBar />
          <div className="home__filter-container">
            <CustomFilter title="fuel" />
            <CustomFilter title="year" />
          </div>
        </div>
        {
          !isDataEmpty ? (
            <section>
              we have cars
            </section>
          ): (
            <div>
              <h2>No cars</h2>
              <p>{allCars?.message}</p>
            </div>
          )
        }
      </div>
    </main>
  );
}
