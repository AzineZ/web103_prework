// Card component — represents a single content creator so it can be
// displayed on the main page. Fleshed out in Step 4.

export type Creator = {
  id: number
  name: string
  url: string
  description: string
  imageURL?: string | null
}

type CardProps = {
  creator: Creator
}

function Card({ creator }: CardProps) {
  return (
    <article>
      {creator.imageURL && <img src={creator.imageURL} alt={creator.name} />}
      <h2>{creator.name}</h2>
      <p>{creator.description}</p>
      <a href={creator.url} target="_blank" rel="noreferrer">
        Visit channel
      </a>
    </article>
  )
}

export default Card
