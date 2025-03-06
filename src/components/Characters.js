export default function Characters(props) {
    const { characters, setCharacters } = props

    const resetCharacters = () => {
        setCharacters(null)
    }
    
    return(    
    <div className="characters">
        <h1>Characters</h1>
        <span className="back-home" onClick={resetCharacters}>return to home</span>
        <div className="container-characters">
            {characters.map((character, index) => (
                <div className="character-container" key={index}>
                    <div>
                        <img src={character.image} alt={character.name}></img>
                    </div>
                    <div>
                        <h3>{character.name}</h3>
                        <h6>{character.status === "Alive" ? (
                            <>
                            <span className="alive" />
                            Alive
                            </>
                        ) : (
                            <>
                            <span className="dead" />
                            Dead
                            </>
                        )}
                        </h6>
                        <p className="text-grey">Chapters:
                        <span>{character.episode.length}</span>
                        </p>
                        <p className="text-grey">Gender: 
                        <span>{character.gender}</span>
                        </p>
                        <p className="text-grey">Specie: 
                        <span>{character.species}</span>
                        </p>
                        <p className="text-grey">Origin: 
                        <span>{character.origin.name}</span>
                        </p>
                    </div>
                </div>
            ))}
        </div>
        <span className="back-home" onClick={resetCharacters}>return to home</span>
    </div>
    )
}