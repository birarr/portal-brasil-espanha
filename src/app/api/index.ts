
export async function newsApi() {
    const data = await fetch(
    "https://newsapi.org/v2/everything?q=spain&language=es&apiKey=11a5395719ac4af693c3d5e7630790d5"
  );

  const newsRoot = await data?.json();

  const news = await newsRoot?.articles?.splice(0, 5);

  return news
};
