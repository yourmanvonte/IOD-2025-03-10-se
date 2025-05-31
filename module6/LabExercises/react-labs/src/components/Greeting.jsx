function Greeting ({name, children}) {

    return (
        <div className="Greeting">
            {name ? <p>Hello {name}</p> : <p>Hello World</p>}
            {children}
        </div>
    )
}

export default Greeting