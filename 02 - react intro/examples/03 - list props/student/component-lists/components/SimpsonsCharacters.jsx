const SIMPSONS_CHARACTERS = [
    "Hommer Simpson",
    "Bart Simpson",
    "Marge Simpson",
    "Mr.Burns",
    "Lisa Simpson",
    "Apu Nahasapeemapetilon",
    "Slideshow Bob",
    "Milhouse Van Houtne",
    "Ned Flanders",
]

export default function SimpsonCharacters() {
    return(
        <ul>
            {
                SIMPSONS_CHARACTERS.map(
                    (name, index) => {
                        return <li key={index}>{name}</li>
                    }
                )
            }
        </ul>
    )
}