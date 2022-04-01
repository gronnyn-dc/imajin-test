import './Modal.css'
import React from 'react'
import { Overlay } from '../Overlay/Overlay'

export default function Modal({ isModalActive, handleClickOverlay, book, handleChangeTitle, handleChangePrice, handleClickSave }) {
  if (isModalActive) {
    return (
      <>
        <Overlay isOverlayActive={isModalActive} onClick={handleClickOverlay} />
        <div className='imajin__modalContainer'>
          <div className='imajin__titleTextContainer'>
            <span>Title :</span>
            <input
              name='titleText'
              placeholder='Enter a title for this card..'
              value={book.judul}
              onChange={(e) => handleChangeTitle(e)}
              className='imajin__addCardTitleTextArea'
            />
          </div>
          <div className='imajin__priceTextContainer'>
            <span>Price :</span>
            <input
              name='priceText'
              placeholder='Enter a price for this card..'
              value={book.harga}
              onChange={(e) => handleChangePrice(e)}
              className='imajin__addCardTitleTextArea'
              type='number'
            />
          </div>
          <button onClick={handleClickSave} className='imajin__submitButton'>
            Save
          </button>
        </div>
      </>
    )
  } else {
    return null
  }
}