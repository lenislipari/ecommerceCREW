import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import ItemCount from './itemCount';


export const ItemDetail = ({producto}) => {

  return (
    <div className='divPadre'>
    <CardGroup className='cardDetalle'>
    <Card className='card1' border='light'>
        <Card.Title>{producto.name}</Card.Title>
      <Card.Img variant="top" src={producto.photo} />
     
    </Card>
    <Card className='card2' border='light'>
    
      <Card.Body>
        <Card.Title>Descripción</Card.Title>
        <Card.Text>{producto.description}</Card.Text>
        <Card.Text>${producto.price}</Card.Text>
        <ItemCount/>
        

      </Card.Body>
      
    </Card>
    </CardGroup>
    
    </div>
  )
}

export default ItemDetail