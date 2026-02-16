import { ImageResponse } from 'next/og'
 
// Metadata da imagem
export const alt = 'Melina Confeitaria Afetiva - Doces Artesanais'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'
 
// Gerador de imagem Open Graph
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 80,
          background: 'linear-gradient(135deg, #f1eee9 0%, #e8dfd5 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '80px',
        }}
      >
        <div
          style={{
            fontSize: 120,
            fontWeight: 'bold',
            color: '#00255F',
            marginBottom: 20,
            fontFamily: 'serif',
            letterSpacing: '0.05em',
          }}
        >
          Melina
        </div>
        <div
          style={{
            fontSize: 50,
            color: '#8f7054',
            marginBottom: 40,
            fontFamily: 'cursive',
          }}
        >
          Confeitaria Afetiva
        </div>
        <div
          style={{
            fontSize: 32,
            color: '#5a432b',
            textAlign: 'center',
            maxWidth: '800px',
            lineHeight: 1.4,
          }}
        >
          Doces artesanais feitos com amor e tradição
        </div>
        <div
          style={{
            position: 'absolute',
            bottom: 40,
            fontSize: 24,
            color: '#b8a490',
          }}
        >
          🧁 Barão Geraldo - Campinas/SP
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
