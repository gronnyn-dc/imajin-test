import './Book.css';
import React from 'react';

export default function Book({ handleClickContact, book }) {
	return (
		<div className='imajin__contactsContainer' onClick={() => handleClickContact(book)}>
			<img src={book.photo} alt='imajin-picture' className='imajin__pictureImage' />
			<div className='imajin__details'>
				<span className='imajin__text'>Name : {book.name}</span>
				<span className='imajin__text'>Phone : {book.telp}</span>
			</div>
		</div>
	);
}
