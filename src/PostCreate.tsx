import React, { useState } from 'react';
import axios from 'axios';

const PostCreate: React.FC = () => {
	const [title, setTitle] = useState('');

	const onSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		await axios.post('http://localhost:4000/posts', { title });

		setTitle('');
	};

	return (
		<div>
			<form onSubmit={onSubmit}>
				<div className='form-group'>
					<label htmlFor='title'>Title</label>
					<input value={title} onChange={(e) => setTitle(e.target.value)} type='text' className='form-control' />
				</div>
				<button className='btn btn-primary'>Submit</button>
			</form>
		</div>
	);
};

export default PostCreate;
