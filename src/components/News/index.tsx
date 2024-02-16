'use client';
import { useEffect, useState } from 'react';
import { Comment } from '@/components/Comment';

export const CommentsContent = () => {
  const [comments, setComments] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchComment = async (commentId: number) => {
    const res = await fetch(`/api/comment?commentId=${commentId}`); // 使用你的API路由
    const { data: postData } = await res.json();
    return postData;
  }

  const fetchComments = async () => {
    const res = await fetch('/api/hackernews?id=39386156');
    const { data: postData } = await res.json();
    // 保留30条评论
    postData.kids = postData.kids.slice(0, 30);
    const commentIds = postData.kids || [];

    const commentsPromises = commentIds.map((id: number) => fetchComment(id));
    const commentsData = await Promise.all(commentsPromises);
    setComments(commentsData);
    setLoading(false);
  };



  useEffect(() => {
    fetchComments();
  }, []);


  if (loading) {
    return <p>Loading comments...</p>;
  }
  return (
    <div className='mt-24'>
      {comments.map((comment) => (
        <div key={comment.id}>
          <Comment {...comment} />
        </div>
      ))}
    </div>

  );
};

