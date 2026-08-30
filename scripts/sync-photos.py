import urllib.request, re, json, os

album_url = 'https://photos.app.goo.gl/wigPajHs16cZTVKf7'
headers = {'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)'}
req = urllib.request.Request(album_url, headers=headers)
html = urllib.request.urlopen(req).read().decode('utf-8', errors='ignore')

photos_dir = os.path.join(os.getcwd(), 'public', 'photos')
os.makedirs(photos_dir, exist_ok=True)

photos = []

def extract_strings(obj):
    captions = []
    if isinstance(obj, str):
        if len(obj) > 2 and not obj.startswith('http') and not obj.startswith('AF1Qip') and not re.match(r'^[A-Za-z0-9_-]{20,}$', obj):
            captions.append(obj)
    elif isinstance(obj, list):
        for item in obj:
            captions.extend(extract_strings(item))
    return captions

for script in re.findall(r'AF_initDataCallback\s*\(\s*(\{.*?\})\s*\)\s*;', html, re.DOTALL):
    if 'lh3.googleusercontent.com' in script:
        data_match = re.search(r'data\s*:\s*(\[.*\])\s*,\s*sideChannel', script, re.DOTALL)
        if data_match:
            try:
                data = json.loads(data_match.group(1))
                if len(data) > 1 and isinstance(data[1], list):
                    for item in data[1]:
                        if isinstance(item, list) and len(item) > 1:
                            url = item[1][0] if isinstance(item[1], list) and len(item[1]) > 0 else None
                            if url and 'lh3.googleusercontent.com' in url:
                                user_caption = ''
                                found_strs = extract_strings(item)
                                if found_strs:
                                    user_caption = found_strs[0]
                                photos.append({'url': url, 'caption': user_caption})
            except Exception as e:
                pass

print(f'Syncing {len(photos)} photos and descriptions from Google Photos album...')

ts_items = []
for i, p in enumerate(photos):
    photo_num = i + 1
    photo_path = os.path.join(photos_dir, f'photo{photo_num}.jpg')
    img_url = p['url'] + '=w1200'
    try:
        data = urllib.request.urlopen(urllib.request.Request(img_url, headers=headers)).read()
        with open(photo_path, 'wb') as f:
            f.write(data)
    except Exception as e:
        print(f'Error downloading photo{photo_num}: {e}')

    caption = p['caption'] if p['caption'] else 'Moments & Events'
    title = 'Photos from the Past'
    
    clean_caption = caption.replace('"', '\\"').replace('\n', ' ')
    ts_items.append(f'''  {{
    id: {photo_num},
    src: "/photos/photo{photo_num}.jpg",
    title: "{title}",
    caption: "{clean_caption}"
  }}''')

ts_content = f'''export type PhotoItem = {{
  id: number;
  src: string;
  title: string;
  caption: string;
}};

export const photosData: PhotoItem[] = [
''' + ',\n'.join(ts_items) + '\n];\n'

with open(os.path.join(os.getcwd(), 'app', 'photosData.ts'), 'w') as f:
    f.write(ts_content)

print('Done! Photos and descriptions updated successfully.')
