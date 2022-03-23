const App = () => {
    return(
        <div className="App">
            <h1>Memoria</h1>
            <Cards />
        </div>        
    )
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);

let contador = 0
function Cards(){
    const [items, setItems] = React.useState([
        {id: 1, img: './img/img1.jpg', stat: "" },
        {id: 1, img: './img/img1.jpg', stat: "" },
        {id: 2, img: './img/img2.jpg', stat: "" },
        {id: 2, img: './img/img2.jpg', stat: "" },
        {id: 3, img: './img/img3.jpg', stat: "" },
        {id: 3, img: './img/img3.jpg', stat: "" },
        {id: 4, img: './img/img4.jpg', stat: "" },
        {id: 4, img: './img/img4.jpg', stat: "" },
        {id: 5, img: './img/img5.jpg', stat: "" },
        {id: 5, img: './img/img5.jpg', stat: "" },
        {id: 6, img: './img/img6.jpg', stat: "" },
        {id: 6, img: './img/img6.jpg', stat: "" },
        {id: 7, img: './img/img7.jpg', stat: "" },
        {id: 7, img: './img/img7.jpg', stat: "" },
        {id: 8, img: './img/img8.jpg', stat: "" },
        {id: 8, img: './img/img8.jpg', stat: "" }
        
    ].sort(() => Math.random() - 0.5))

    const [prev, setPrev] = React.useState(-1)

    function ver(actual){
        if(items[actual].id == items[prev].id){
            items[actual].stat = "correcto"
            items[prev].stat = "correcto"
            setItems([...items])
            setPrev(-1)
            contador++
        }else{
            items[actual].stat = "incorrecto"
            items[prev].stat = "incorrecto"
            setItems([...items])
            setTimeout(() => {
                items[actual].stat = ""
                items[prev].stat = ""
                setItems([...items])
                setPrev(-1)
            }, 1000)
        }

        if (contador == 8) {
            setTimeout(() => {
                alert("Has encontrado a todos los personajes!")
            }, 1000)
           
        }
    }

    function handleClick(id){
        if(prev === -1){
            if (items[id].stat != "correcto") {
                items[id].stat = "activo"
                setItems([...items])
                setPrev(id)
            }
        }else{
            ver(id)
        }
    }

    return (
        <div className="contenedor">
            { items.map((item, index) => (
                <Card key={index} item={item} id={index} handleClick={handleClick} />
            )) }
        </div>
    )
}

function Card({item, id, handleClick}){
    const itemClass = item.stat ? " activo " + item.stat : ""

    return (
        <div className={"card" + itemClass} onClick={() => handleClick(id)}>
            <img src={item.img} alt="" />
        </div>
    )
}



