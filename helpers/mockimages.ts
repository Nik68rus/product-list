export const getImages = async (n: number) => {
  const imageUrls: string[] = [];
  for (let i = 0; i < Math.floor(n / 20); i++) {
    const response = await fetch(
      `https://api.unsplash.com/search/photos/?client_id=${process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY}&query=products&page=${i}&per_page=20`
    );
    const data = await response.json();
    const images = data.results.map((img: any) => img.urls.small) as string[];
    imageUrls.push(...images);
  }

  return imageUrls.slice(0, n);
};
