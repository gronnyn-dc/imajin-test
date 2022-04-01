import React from 'react';
import { addCommas } from '../../helpers/index';

export default function Card({ handleClickEditButton, book, index }) {
	return (
		<div key={index} className='imajin__cardContainer'>
			<span className='imajin__cardTitle'>{book.judul}</span>
			<span className='imajin__cardPrice'>{addCommas(book.harga)}</span>
			<div onClick={() => handleClickEditButton(book, index)} className='imajin__cardEdit'>
				<span>Edit</span>
			</div>
		</div>
	);
}
