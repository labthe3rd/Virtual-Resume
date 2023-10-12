export default function Blog({ allPostsData }) {
  console.log(allPostsData);
  return (
    <>
      {/* Add this <section> tag below the existing <section> tag */}
      <section>
        <h2 className="text-3xl mb-6">Blog</h2>
        <ul className="space-y-10">
          {allPostsData.map(({ id, date, title, content }) => (
            <li key={id}>
              <span className="text-3xl">{title}</span>
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
