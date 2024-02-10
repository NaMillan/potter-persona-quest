

function CharacterCard({character}) {
  return (
    <div>
     <img 
     className="card_img" 
     src={character.image !== '' ? character.image:'https://via.placeholder.com/210x295/ffffff/666666/?text=HarryPotter' }
     alt="Foto del personaje"
     title= "Foto del personaje"
     />
     <h2 className="card_tittle">{character.name}</h2>
     <h3 className="card_species">{character.species}</h3>
    </div>
  )
}


export default CharacterCard