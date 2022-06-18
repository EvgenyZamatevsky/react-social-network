import React, { FC } from 'react'
import { useSelector } from 'react-redux'
import { AddItemForm } from '../common/AddItemForm/AddItemForm'
import { useActions } from '../../redux/hooks'
import { profileActionCreators } from '../../redux/reducers/profile-reducer'
import { selectPosts } from '../../redux/reducers/profile-reducer/selectors'
import s from './PostsList.module.css'
import { PostItem } from '../PostItem/PostItem'

type PostsListPropsType = {

}

export const PostsList: FC<PostsListPropsType> = ({ }) => {

	const { addPostAC } = useActions(profileActionCreators)
	const posts = useSelector(selectPosts)

	const addPostHandler = (postTitle: string) => {
		addPostAC(postTitle)
	}

	return (
		<div className={s.postsBlock}>
			<h2>My posts</h2>
			<AddItemForm addItem={addPostHandler} buttonTitle={'Add post'} />
			<div className={s.posts}>
				{posts.map(p => <PostItem key={p.id} post={p} />)}
			</div>
		</div>
	)
}