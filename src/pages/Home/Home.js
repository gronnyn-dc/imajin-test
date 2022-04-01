import './Home.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import Book from '../../components/Book/Book';

export default function Home() {
	const history = useHistory();
	const [books, setBooks] = useState([]);

	useEffect(() => {
		axios.get('https://imajin.id/interview/api/1/').then((res) => {
			if (res.status === 200) {
				setBooks(res.data);
			}
		});
	}, []);

	const handleClickContact = (book) => {
		if (book.id) {
			history.push({
				pathname: `/books/${book.id}`,
				state: { image_url: book.photo, author: book.name },
			});
		}
	};

	return (
		<div className='imajin__container'>
			<p className='imajin__title'>All Writer Data</p>
			<div className='imajin__purpleLine' />
			{books.length > 0 ? (
				books.map((book, index) => {
					return (
						<div key={index}>
							<Book book={book} handleClickContact={(book) => handleClickContact(book)} />
						</div>
					);
				})
			) : (
				<div> nothing to render</div>
			)}
		</div>
	);
}
