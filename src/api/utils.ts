enum TYPE_RESPONSE {
  JSON,
  BLOB
}

function getContentType(contentTypeHeader: string): TYPE_RESPONSE {
  if (contentTypeHeader.includes('application/json')) {
    return TYPE_RESPONSE.JSON;
  }

  if (contentTypeHeader.includes('image/')) {
    return TYPE_RESPONSE.BLOB;
  }
}

export async function fetchApi(url: string, options?: RequestInit): Promise<any> {
  try {
    const response = await fetch(url, options);
    const contentType = getContentType(response.headers.get('Content-Type'));

    if (!response.ok) {
      throw new Error(`Request status is: ${response.status}. Text: ${response.statusText}`);
    }

    if (contentType === TYPE_RESPONSE.JSON) {
      return response.json();
    }

    return response.blob();
  } catch (error) {
    console.error(error);
  }
}
