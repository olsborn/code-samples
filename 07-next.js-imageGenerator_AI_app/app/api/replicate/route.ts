import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { prompt, model, aspectRatio } = await req.json();

  const baseDimension = 1400;
  /*
  let width = baseDimension;
  let height = baseDimension;
  
  if (aspectRatio && typeof aspectRatio === 'string' && aspectRatio.includes(':')) {
    const [w, h] = aspectRatio.split(':').map(Number);

    if (!isNaN(w) && !isNaN(h) && w > 0 && h > 0) {
      if (h > w) {
        width = baseDimension;
        height = Math.round((h / w) * baseDimension);
      } else {
        height = baseDimension;
        width = Math.round((w / h) * baseDimension);
      }
    }
  }
*/
  const input = {
    prompt,
    width: baseDimension,
    height: baseDimension,
    aspect_ratio: aspectRatio,
    max_images: 1,
  };

  try {
    const response = await fetch('https://api.replicate.com/v1/models/' + model + '/predictions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.REPLICATE_API_TOKEN}`,
        'Content-Type': 'application/json',
        Prefer: 'wait',
      },
      body: JSON.stringify({
        input,
      }),
    });

    //const response = await fetchImage(model, input);

    const data = await response.json();
    //console.log(data);

    if (data?.title === 'Unauthenticated') {
      //throw new Error('Replicate API token is invalid or missing.');
      //console.log(data.title);
      return NextResponse.json(
        { error: 'Replicate API token is invalid or missing.' },
        { status: 500 }
      );
    }

    //const imageDataUrl = await readReplicateOutput(output);
    //console.log(imageDataUrl);
    return NextResponse.json({ image: data });
  } catch (error) {
    console.error('Replicate API error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : String(error) },
      { status: 500 }
    );
  }
}
