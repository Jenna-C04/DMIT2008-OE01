//  export default -> this is what's imported when we e.g.
//  import Hello from some/file.js
//  basiically, default export when we only wan to export/imort one (main) things in one file

//  not using default generally means you have multiple exported things
//  TLDR: export default is just what we write when we have one thing to export/import
export default function Hello() { 
        return(
            <p>This is my first component</p>
        )
}