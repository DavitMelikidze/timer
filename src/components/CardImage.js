import React from 'react';
import {Button, Card} from "react-bootstrap";

function CardImage ({takeCurImageUrl,thumbnailUrl,title,url}) {

    const changeCurImageUrl = () => {
        takeCurImageUrl(url);
    }

    return(
        <>
            <Button className="p-0 border-0" onClick={changeCurImageUrl}>
                <Card.Img variant="top" src={thumbnailUrl}/>
            </Button>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
            </Card.Body>
        </>
    )

}

export default CardImage;