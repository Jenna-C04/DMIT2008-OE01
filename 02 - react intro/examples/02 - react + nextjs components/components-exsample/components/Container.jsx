export default function Container({ children }) {
    // 'children' is a hard coded prop for anyhing nested inside that compnents when it's called.
    // Its is automatically passed if you take all your props in as one argument (i.e. props -> props.children)
    return(
        // The <> & </> has to be here for it to work!!
        <> 
            {children}
        </>
    )
}