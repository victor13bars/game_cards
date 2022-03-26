import React from 'react';
import './Card.css'

const Card = ({card, handleChoice, flipped, disabled}) => {

    const handleClick = () => {
        if (!disabled) {
            handleChoice(card)
        }

    }

    return (
        <div key={card.id} className='card'>
            <div className={flipped ? 'flipped' : ''}>
                <img
                    src={card.src}
                    className='front'
                />
                <img
                    src="/img/cover.png"
                    className='back'
                    onClick={handleClick}
                />
            </div>
        </div>
    );
};

export default Card;