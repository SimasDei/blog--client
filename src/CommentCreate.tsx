import React, { useState } from 'react';
import axios from 'axios';

const CommentCreate: React.FC<{ postId: string }> = ({ postId }) => {
	const [content, setContent] = useState('');

	const onSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		await axios.post(`http://localhost:4001/posts/${postId}/comments`, { content });
		setContent('');
	};

	return (
		<div>
			<form onSubmit={onSubmit}>
				<div className='form-group'>
					<label htmlFor=''>New Comment</label>
					<input type='text' className='form-control' value={content} onChange={(e) => setContent(e.target.value)} />
				</div>
				<button className='btn btn-primary'>Submit</button>
			</form>
		</div>
	);
};

export default CommentCreate;
