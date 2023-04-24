import { useEffect, useState } from "react"
import { mFetch } from "./mFetch"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Filter from "./Filter";
import Carousel from "./Carousel"
import {Link} from "react-router-dom"



const ItemListContainer = ({ greeting }) => {

    const [productos, setProductos] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        mFetch()

            .then(resultado => {
                setProductos(resultado)
            })
            .catch(error => console.log(error))
            .finally(() => setIsLoading(false))
    }, [])

    const handleProductFiltered = ({ filterState, handleFilterChange }) => (
        <div style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap"
        }}>
            <Carousel />
            
            <div>
                <h4>Buscar Producto</h4>
                <input type="text" value={filterState} onChange={handleFilterChange} />
            </div>

            {isLoading ?
                <h2>Cargando...</h2>
                :

                <>
                    {filterState === ''

                        ? productos.map(({ id, photo, name, price }) =>
                            <Card key={id} style={{ width: '20rem', margin: '1em' }}>
                                <Card.Img variant="top" src={photo} />
                                <Card.Body className="text-center">
                                    <Card.Title>{name}</Card.Title>
                                    <Card.Text>
                                        ${price}
                                    </Card.Text>
                                    <Button variant="outline-warning"><Link className="linkDetalle" to={`/itemDetail/${id}`}> Detalle </Link></Button>
                                </Card.Body>

                            </Card>

                        )
                        :
                        productos.filter(producto => producto.name.toLowerCase().includes(filterState.toLowerCase())).map(({ id, photo, name, price }) =>
                            <Card key={id} style={{ width: '20rem', margin: '1em' }}>
                                <Card.Img variant="top" src={photo} />
                                <Card.Body className="text-center">
                                    <Card.Title>{name}</Card.Title>
                                    <Card.Text>
                                        ${price}
                                    </Card.Text>
                                    <Button variant="outline-warning"><Link className="linkDetalle" to={`/itemDetail/${id}`}> Detalle </Link></Button>
                                </Card.Body>

                            </Card>

                        )
                    }
                </>
            }

        </div>
    )

    return (
        <div style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap"
        }}>
            <Filter>
                {handleProductFiltered}
            </Filter>




        </div>


    )
}






export default ItemListContainer