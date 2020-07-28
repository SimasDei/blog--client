import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PostList: React.FC = () => {
	const [posts, setPosts] = useState({});

	const fetchPosts = async () => {
		const res = await axios.get('http://localhost:4000/posts');
		setPosts(res.data);
	};

	useEffect(() => {
		fetchPosts();
	}, []);

	const renderPosts = Object.values(posts).map(
		(post: any): React.ReactNode => (
			<div className='card' style={{ width: '30%', marginBottom: '20px' }} key={post.id}>
				<div className='card-body'>
					<h3>{post.title}</h3>
				</div>
			</div>
		)
	);

	return <div className='d-flex flex-row flex-wrap justify-content-between'>{renderPosts}</div>;
};

export default PostList;
