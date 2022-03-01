import React, {useState} from 'react';
import {Button, Card, Modal} from "react-bootstrap";
import CardImage from "./CardImage";

function ImagesGrid({data}) {

    const [showModal,setShowModal] = useState(false);
    const [curImageUrl,setCurImageUrl] = useState('');

    const hideModal = () => setShowModal(false);

    const takeCurImageUrl = (Url) => {
        setCurImageUrl(Url)
        setShowModal(true);
        console.log(Url);
    };

    return (
        <>
            {
                data.map(image=>
                    <Card key={image.id} style={{ width: '15rem' }} className="m-2">
                        <CardImage
                            takeCurImageUrl = {takeCurImageUrl}
                            {...image}
                        />
                    </Card>
                )
            }
            <Modal show={showModal} onHide={hideModal}>
                <Modal.Body>
                    <Card.Img variant="top" src={curImageUrl}/>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default ImagesGrid;