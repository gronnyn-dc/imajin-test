import './Books.css';
import { React, useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import axios from 'axios';
import Card from '../../components/Book/Card';
import Modal from '../../components/Modal/Modal';

export default function Books() {
	const params = useParams();
	const location = useLocation();
	const [books, setBooks] = useState([]);
	const [isModalActive, setModalActive] = useState(false);
	const [editedBook, setEditedBook] = useState({});
	const [chosenIndex, setIndex] = useState(0);
	const [imageURL, setImageURL] = useState('');
	const [author, setAuthor] = useState('');

	useEffect(() => {
		if (params.id) {
			setImageURL(location.state.image_url);
			setAuthor(location.state.author);
			axios.get(`https://imajin.id/interview/api/1/books/${params.id}`).then((res) => {
				if (res.status === 200) {
					setBooks(res.data.books);
				}
			});
		}
	}, [params]);

	const handleClickEditButton = (book, index) => {
		setIndex(index);
		setModalActive(true);
		setEditedBook(book);
	};

	const handleClickOverlay = () => {
		setModalActive(false);
	};

	const handleChangeTitle = (e) => {
		setEditedBook({
			...editedBook,
			judul: e.target.value,
		});
	};

	const handleChangePrice = (e) => {
		setEditedBook({
			...editedBook,
			harga: e.target.value,
		});
	};

	const handleClickSave = () => {
		books[chosenIndex].judul = editedBook.judul;
		books[chosenIndex].harga = editedBook.harga;
		setModalActive(false);
		handleClickOverlay();
		setEditedBook({});
	};

	return (
		<div className='imajin__container'>
			<Modal
				isModalActive={isModalActive}
				book={editedBook}
				handleClickOverlay={() => handleClickOverlay()}
				handleChangeTitle={(e) => handleChangeTitle(e)}
				handleChangePrice={(e) => handleChangePrice(e)}
				handleClickSave={() => handleClickSave()}
			/>
			<div className='imajin__titleContainer'>
				<p className='imajin__title'>Books List</p>
				<div className='imajin__counterContainer'>
					<span className='imajin__counterText'>Total Books: {books.length}</span>
					<span className='imajin__counterText'>Total Pages: 1</span>
				</div>
			</div>
			<div className='imajin__imageContainer'>
				<img src={imageURL} alt='imajin-picture' className='imajin__pictureImage' />
				<span className='imajin__authorName'>{author}</span>
			</div>
			<div className='imajin__purpleLine' />
			<div className='imajin__booksContainer'>
				<p className='imajin__sectionTitle'>Book</p>
				<p className='imajin__sectionTitle'>Price</p>
				<p className='imajin__sectionTitle'>Helper</p>
			</div>
			{books.length > 0
				? books.map((book, index) => {
						return (
							<div key={index}>
								<Card index={index} book={book} handleClickEditButton={(book, index) => handleClickEditButton(book, index)} image_url={imageURL} />
							</div>
						);
				  })
				: null}
			<div className='imajin__pagination'>
				<span>1</span>
			</div>
		</div>
	);
}
