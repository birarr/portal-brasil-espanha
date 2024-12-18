import 'dotenv/config'

export async function newsApi() {
    const data = await fetch(
    `https://newsapi.org/v2/everything?q=spain&language=es&apiKey=${process.env.NEXT_PUBLIC_API_KEY!}`
  );

  const newsRoot = await data?.json();

  const news = await newsRoot?.articles?.splice(0, 5);

  return news
};
