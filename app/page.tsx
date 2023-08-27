import MemeList from "@/components/Memes/MemeList";

export default async function Home() {
  /* Get all memes from DB ordered by 'created_at' descending */
  const allMemes = [] as any[];

  return (
    <main>
      <h1 className="text-center text-6xl text-gray-900 dark:text-white font-extrabold border-b-2	p-4">
        Memes Board
      </h1>
      <MemeList initMemes={allMemes} />
    </main>
  );
}
