export const getImages = async (term: string, n: number) => {
  const imageUrls: string[] = [];
  for (let page = 1; page <= Math.ceil(n / 20); page++) {
    console.log(page);

    const response = await fetch(
      `https://api.unsplash.com/search/photos/?client_id=${process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY}&query=${term}&page=${page}&per_page=20`
    );
    const data = await response.json();
    const images = data.results.map((img: any) => img.urls.small) as string[];
    imageUrls.push(...images);
  }

  return imageUrls.slice(0, n);
};
