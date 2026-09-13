// Pure youtube URL helpers - usable on client and server (no 'server-only')
export function extractYouTubeId(url) {
  if (!url || typeof url !== 'string') return null
  const str = url.trim()
  // Bare 11-char ID
  if (/^[a-zA-Z0-9_-]{11}$/.test(str)) return str
  try {
    const u = new URL(str)
    const host = u.hostname.replace(/^www\./, '').replace(/^m\./, '')
    // youtu.be/<id>
    if (host === 'youtu.be') {
      const id = u.pathname.slice(1).split('/')[0].split('?')[0].split('&')[0]
      if (id && id.length === 11) return id
      if (id && /^[a-zA-Z0-9_-]{11}$/.test(id)) return id
    }
    if (host.includes('youtube.com') || host.includes('youtube-nocookie.com')) {
      // ?v=ID
      const v = u.searchParams.get('v')
      if (v && /^[a-zA-Z0-9_-]{11}$/.test(v)) return v
      // /embed/ID  /v/ID  /shorts/ID
      const m = u.pathname.match(/\/(?:embed|v|shorts)\/([^/?&#]+)/)
      if (m && /^[a-zA-Z0-9_-]{11}$/.test(m[1])) return m[1]
    }
  } catch {
    // fall through to regex
  }
  // Regex fallback for any youtube URL pattern
  const m = str.match(
    /(?:youtube\.com\/(?:[^/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/|youtube\.com\/shorts\/)([^"&?/\s]{11})/
  )
  if (m) return m[1]
  return null
}

export function isYouTubeUrl(url) {
  return extractYouTubeId(url) !== null
}

export function youtubeEmbedUrl(id) {
  return `https://www.youtube-nocookie.com/embed/${id}?rel=0`
}

export function youtubeWatchUrl(id) {
  return `https://www.youtube.com/watch?v=${id}`
}

export function youtubeThumbnailUrl(id, quality = 'hqdefault') {
  // hqdefault 480x360, mqdefault 320x180, maxresdefault 1280x720 (not always exists)
  return `https://img.youtube.com/vi/${id}/${quality}.jpg`
}
