'use server'
import 'dotenv/config'

export async function newsApi() {
    const data = await fetch(
    `https://api.thenewsapi.com/v1/news/top?api_token=${process.env.NEXT_PUBLIC_API_KEY!}&locale=es&limit=5`
  );

  const newsRoot = await data?.json();

  const news = await newsRoot?.data?.splice(0, 5);

  return news
};
